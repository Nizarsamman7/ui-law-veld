import Link from "next/link";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  return (
    <div className="frame">
      <header className="brand">
        <p>Advocaten</p>
        <h1><Link href="/">Veld &amp; Hart</Link></h1>
        <p>Amsterdam</p>
      </header>
      <nav className="site-nav" aria-label="Pages">
        <Link href="/">Home</Link>
        <Link href="/contracts">Contracts</Link>
        <Link href="/employment">Employment</Link>
        <Link href="/property">Property</Link>
        <Link href="/disputes">Disputes</Link>
        <Link href="/team">Lawyers</Link>
        <Link href="/approach">Approach</Link>
        <Link href="/about">Chambers</Link>
        <Link href="/fees">Fees</Link>
        <Link href="/practice">Consult</Link>
        <Link href="/careers">Careers</Link>
        <Link href="/faq">FAQ</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/notes">First call</Link>
      </nav>
      <main>{children}</main>
    </div>
  );
}
