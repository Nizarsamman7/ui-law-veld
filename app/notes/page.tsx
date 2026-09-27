import type { Metadata } from "next";
export const metadata: Metadata = { title: "First call" };

export default function Page() {
  return (
    <article className="sheet">
      <p className="eyebrow">{"Prepare"}</p>
      <h1>{"What to have ready."}</h1>
      <p className="lede">{"The contract, the letter you received, and the date something has to happen. A long history can wait until the second conversation."}</p>
      <p>{"If there is a deadline this week, put it in the first sentence."}</p>
      
      
      
      
    </article>
  );
}
