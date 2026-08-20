import styles from './soc-alert.module.css';

export default function SocAlertVisual() {
  return (
    <div className={styles.panel} aria-label="نمونه هشدار امنیتی غنی‌شده با زمینه دارایی">
      <div className={styles.topbar}>
        <div className={styles.titleWrap}>
          <span className={styles.pulse}></span>
          <div>
            <b>Suspicious PowerShell Activity</b>
            <small>Behavioral Detection · Endpoint</small>
          </div>
        </div>
        <div className={styles.severity}>HIGH</div>
      </div>

      <div className={styles.metaRow} dir="ltr">
        <span>INC-28417</span>
        <span>19:26:14</span>
        <span>Confidence 92%</span>
      </div>

      <div className={styles.attackCard}>
        <div className={styles.attackHeader}>
          <span>MITRE ATT&amp;CK</span>
          <b>T1059.001 · PowerShell</b>
        </div>
        <div className={styles.command} dir="ltr">
          powershell.exe -enc JABjAGwAaQBlAG4AdAAuLi4=
        </div>
        <div className={styles.entities}>
          <div><small>HOST</small><b dir="ltr">APP-SRV-042</b></div>
          <div><small>USER</small><b dir="ltr">svc_payment</b></div>
          <div><small>SOURCE</small><b dir="ltr">10.24.18.37</b></div>
        </div>
      </div>

      <div className={styles.contextDivider}>
        <span>+</span>
        <div><b>MonoSuite Asset Context</b><small>Context added to detection</small></div>
      </div>

      <div className={styles.contextGrid}>
        <div className={styles.contextPrimary}>
          <small>Business Service</small>
          <b>Payment Service</b>
          <span>Critical · Production</span>
        </div>
        <div><small>Risk Score</small><b dir="ltr">72%</b><span className={styles.risk}>High</span></div>
        <div><small>Protection</small><b dir="ltr">61%</b><span>Below target</span></div>
        <div><small>Recent Change</small><b>Detected</b><span>New service · 18 min ago</span></div>
      </div>

      <div className={styles.signalRow}>
        <span>Internet exposed</span>
        <span>2 critical CVEs</span>
        <span>Hardening gap</span>
      </div>
    </div>
  );
}
