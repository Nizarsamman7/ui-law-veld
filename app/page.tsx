import Link from "next/link";

const areas = [
  ["Contracts", "Commercial agreements for owner-managed companies."],
  ["Employment", "Hiring, exits, and workplace disputes."],
  ["Property", "Leases and small transactions."],
  ["Disputes", "Letters before action, and court when needed."],
];

export default function HomePage() {
  return (
    <div className="frame">
      <header className="brand">
        <p>Advocaten</p>
        <h1>Veld &amp; Hart</h1>
        <p>Amsterdam</p>
      </header>
      <nav>
        <a href="#work">Practice</a>
        <Link href="/practice">Consult</Link>
      </nav>
      <section className="center">
        <h2>Counsel for companies that still know their clients by name.</h2>
        <p>Four lawyers. We answer the phone. We do not take every matter.</p>
      </section>
      <section className="areas" id="work">
        {areas.map(([title, text]) => <article key={title}><h2>{title}</h2><p>{text}</p></article>)}
      </section>
      <section className="people">
        <article className="person"><h2>E. Veld</h2><p>Contracts and property.</p></article>
        <article className="person"><h2>M. Hart</h2><p>Employment and disputes.</p></article>
      </section>
    </div>
  );
}
