import type { Metadata } from "next";
export const metadata: Metadata = { title: "Fees" };

export default function Page() {
  return (
    <article className="sheet">
      <p className="eyebrow">{"Cost"}</p>
      <h1>{"We quote a band before we start."}</h1>
      <p className="lede">{"Hourly rates are confirmed in the engagement letter. A first consult can be a fixed fee if the question is narrow."}</p>
      <p>{"This page is a template. Put real rates here only when a lawyer has approved them."}</p>
      
      <div className="stack">
<div className="row"><b>{"First consult, narrow question"}</b><span>{"Fixed fee, confirmed in writing"}</span></div>
<div className="row"><b>{"Partner"}</b><span>{"Hourly, in the letter"}</span></div>
<div className="row"><b>{"Associate"}</b><span>{"Hourly, in the letter"}</span></div>
<div className="row"><b>{"Disbursements"}</b><span>{"Court fees and searches, at cost"}</span></div>
</div>
      
      
    </article>
  );
}
