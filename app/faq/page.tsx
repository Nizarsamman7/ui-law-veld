import type { Metadata } from "next";
export const metadata: Metadata = { title: "FAQ" };

export default function Page() {
  return (
    <article className="sheet">
      <p className="eyebrow">{"Before you call"}</p>
      <h1>{"A few boundaries."}</h1>
      <p className="lede">{"We are not an emergency criminal practice."}</p>
      
      
      
      <div className="stack">
<details className="panel"><summary>{"Do you do legal aid?"}</summary><p>{"No."}</p></details>
<details className="panel"><summary>{"Can you act today?"}</summary><p>{"Sometimes for a letter. Rarely for a filing the same afternoon."}</p></details>
<details className="panel"><summary>{"Languages?"}</summary><p>{"Dutch and English."}</p></details>
<details className="panel"><summary>{"Where do you appear?"}</summary><p>{"Amsterdam and the courts a train ride away."}</p></details>
</div>
      
    </article>
  );
}
