const JSON_HEADERS = {
  'Content-Type': 'application/json; charset=utf-8',
  'Cache-Control': 'no-store',
  'X-Content-Type-Options': 'nosniff',
};

const REQUEST_TO_EMAIL = 'info@houshafzar.ir';
const MAX_REQUEST_BYTES = 8192;
const PUBLIC_EMAIL_DOMAINS = new Set([
  'gmail.com', 'googlemail.com', 'yahoo.com', 'yahoo.co.uk', 'outlook.com',
  'hotmail.com', 'live.com', 'msn.com', 'icloud.com', 'me.com', 'aol.com',
  'proton.me', 'protonmail.com', 'gmx.com', 'mail.com', 'yandex.com', 'zoho.com',
]);

function json(body: Record<string, unknown>, status = 200) {
  return new Response(JSON.stringify(body), { status, headers: JSON_HEADERS });
}

function clean(value: unknown, maxLength: number) {
  return String(value ?? '').trim().replace(/\s+/g, ' ').slice(0, maxLength);
}

function validEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(value);
}

function organizationalEmail(value: string) {
  if (!validEmail(value)) return false;
  const domain = value.toLowerCase().split('@')[1];
  return Boolean(domain) && !PUBLIC_EMAIL_DOMAINS.has(domain);
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, character => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  })[character] || character);
}

async function sendRequestEmail(lead: {
  fullName: string;
  workEmail: string;
  company: string;
  jobTitle: string;
  source: string;
  submittedAt: string;
}) {
  const accountId = process.env.CF_ACCOUNT_ID;
  const apiToken = process.env.CF_EMAIL_API_TOKEN;
  const fromEmail = process.env.LEAD_FROM_EMAIL;

  const missing = [
    !accountId && 'CF_ACCOUNT_ID',
    !apiToken && 'CF_EMAIL_API_TOKEN',
    !fromEmail && 'LEAD_FROM_EMAIL',
  ].filter(Boolean);

  if (missing.length) {
    console.error(`Datasheet email configuration missing: ${missing.join(', ')}`);
    throw new Error('Email delivery is not configured.');
  }

  const subject = `[Houshafzar Datasheet Request] ${lead.company} — ${lead.fullName}`;
  const text = [
    'New MonoSuite datasheet request',
    '',
    `Name: ${lead.fullName}`,
    `Work email: ${lead.workEmail}`,
    `Company: ${lead.company}`,
    `Job title: ${lead.jobTitle || 'Not provided'}`,
    `Source: ${lead.source}`,
    `Submitted at: ${lead.submittedAt}`,
  ].join('\n');

  const html = `
    <h2>New MonoSuite datasheet request</h2>
    <table cellpadding="7" cellspacing="0" border="0">
      <tr><td><strong>Name</strong></td><td>${escapeHtml(lead.fullName)}</td></tr>
      <tr><td><strong>Work email</strong></td><td>${escapeHtml(lead.workEmail)}</td></tr>
      <tr><td><strong>Company</strong></td><td>${escapeHtml(lead.company)}</td></tr>
      <tr><td><strong>Job title</strong></td><td>${escapeHtml(lead.jobTitle || 'Not provided')}</td></tr>
      <tr><td><strong>Source</strong></td><td>${escapeHtml(lead.source)}</td></tr>
      <tr><td><strong>Submitted at</strong></td><td>${escapeHtml(lead.submittedAt)}</td></tr>
    </table>
  `;

  const response = await fetch(
    `https://api.cloudflare.com/client/v4/accounts/${encodeURIComponent(accountId!)}/email/sending/send`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: REQUEST_TO_EMAIL,
        from: fromEmail,
        reply_to: lead.workEmail,
        subject,
        text,
        html,
      }),
    },
  );

  const result = await response.json().catch(() => ({}));
  if (!response.ok || (result as { success?: boolean }).success === false) {
    console.error('Datasheet request email delivery failed', response.status, result);
    throw new Error('Email delivery failed.');
  }
}

export async function POST(request: Request) {
  try {
    const requestUrl = new URL(request.url);
    const origin = request.headers.get('Origin');
    const allowedOrigins = new Set([
      requestUrl.origin,
      'https://houshafzar.com',
      'https://www.houshafzar.com',
      'https://houshafzar.ir',
      'https://www.houshafzar.ir',
    ]);

    if (!origin || !allowedOrigins.has(origin)) {
      return json({ error: 'مبدأ درخواست معتبر نیست.' }, 403);
    }

    const contentType = request.headers.get('Content-Type') || '';
    if (!contentType.toLowerCase().startsWith('application/json')) {
      return json({ error: 'فرمت درخواست پشتیبانی نمی‌شود.' }, 415);
    }

    const contentLength = Number(request.headers.get('Content-Length') || '0');
    if (contentLength > MAX_REQUEST_BYTES) {
      return json({ error: 'حجم درخواست بیش از حد مجاز است.' }, 413);
    }

    const rawBody = await request.text();
    if (new TextEncoder().encode(rawBody).byteLength > MAX_REQUEST_BYTES) {
      return json({ error: 'حجم درخواست بیش از حد مجاز است.' }, 413);
    }

    let body: Record<string, unknown>;
    try {
      body = JSON.parse(rawBody);
    } catch {
      return json({ error: 'درخواست نامعتبر است.' }, 400);
    }

    if (!body || typeof body !== 'object' || Array.isArray(body)) {
      return json({ error: 'درخواست نامعتبر است.' }, 400);
    }

    // Honeypot: silently accept obvious bot submissions without sending mail.
    if (clean(body.website, 200)) {
      return json({ success: true }, 202);
    }

    const lead = {
      fullName: clean(body.fullName, 120),
      workEmail: clean(body.workEmail, 180).toLowerCase(),
      company: clean(body.company, 160),
      jobTitle: clean(body.jobTitle, 120),
      source: clean(body.source, 80) || 'houshafzar-datasheet-form',
      submittedAt: new Date().toISOString(),
    };

    if (!lead.fullName || !lead.workEmail || !lead.company) {
      return json({ error: 'لطفاً همه فیلدهای الزامی را تکمیل کنید.' }, 400);
    }

    if (!organizationalEmail(lead.workEmail)) {
      return json({ error: 'برای درخواست دیتاشیت باید از ایمیل سازمانی استفاده کنید.' }, 400);
    }

    await sendRequestEmail(lead);
    return json({ success: true }, 201);
  } catch (error) {
    console.error('Datasheet request processing failed', error instanceof Error ? error.message : error);
    return json({ error: 'ارسال درخواست در حال حاضر امکان‌پذیر نیست. لطفاً کمی بعد دوباره تلاش کنید.' }, 500);
  }
}

export async function GET() {
  return json({ error: 'Method not allowed.' }, 405);
}
