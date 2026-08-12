import { query } from "#contentrain";
import { DashboardShell } from "../dashboard-shell";

export default function SettingsPage() {
  const groups = query("settings-group").locale("en").all();

  return (
    <DashboardShell
      activePath="/settings"
      kicker="Settings"
      title="Govern the strings users actually see in the app shell."
      description="Settings copy is modeled, grouped, and reviewable instead of living inside scattered form components."
    >
      <section className="section-block">
        <h2>Settings matrix</h2>
        <div className="stack">
          {groups.map((group) => (
            <article key={group.id} className="surface settings-card">
              <h3>{group.title}</h3>
              <p className="muted">{group.summary}</p>
              <div className="setting-items">
                {group.items?.map((item) => (
                  <div key={item.label} className="setting-row">
                    <div>
                      <strong>{item.label}</strong>
                      <p className="muted">{item.hint}</p>
                    </div>
                    <div className="setting-value">
                      <span>{item.value}</span>
                      {item.status ? <span className="pill">{item.status}</span> : null}
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </DashboardShell>
  );
}
