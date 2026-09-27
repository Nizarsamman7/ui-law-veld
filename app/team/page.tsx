import type { Metadata } from "next";
export const metadata: Metadata = { title: "Lawyers" };

export default function Page() {
  return (
    <article className="sheet">
      <p className="eyebrow">{"People"}</p>
      <h1>{"Who answers."}</h1>
      <p className="lede">{"You will know the name on the letter. Work is not passed to a silent team."}</p>
      
      <div className="trio">
<article className="panel"><h2>{"E. Veld"}</h2><p>{"Contracts and property. Partner."}</p></article>
<article className="panel"><h2>{"M. Hart"}</h2><p>{"Employment and disputes. Partner."}</p></article>
<article className="panel"><h2>{"A. de Wit"}</h2><p>{"Contracts. Associate."}</p></article>
<article className="panel"><h2>{"J. Smit"}</h2><p>{"Disputes. Associate."}</p></article>
</div>
      
      
      
    </article>
  );
}
