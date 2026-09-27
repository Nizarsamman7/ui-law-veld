import type { Metadata } from "next";
export const metadata: Metadata = { title: "Approach" };

export default function Page() {
  return (
    <article className="sheet">
      <p className="eyebrow">{"How"}</p>
      <h1>{"What the first week looks like."}</h1>
      <p className="lede">{"We confirm we can act, we ask for the papers, and we tell you the likely cost band before we draft."}</p>
      
      <div className="trio">
<article className="panel"><h2>{"Conflict check"}</h2><p>{"The same day, if you give us the other party's name."}</p></article>
<article className="panel"><h2>{"Papers"}</h2><p>{"Send the contract or the letter. A summary helps. The document matters more."}</p></article>
<article className="panel"><h2>{"Advice"}</h2><p>{"In writing, short, with the choice we would make and why."}</p></article>
</div>
      
      
      
    </article>
  );
}
