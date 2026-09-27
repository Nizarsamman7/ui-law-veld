import type { Metadata } from "next";
export const metadata: Metadata = { title: "Chambers" };

export default function Page() {
  return (
    <article className="sheet">
      <p className="eyebrow">{"Rooms"}</p>
      <h1>{"A floor on a quiet street in Amsterdam."}</h1>
      <p className="lede">{"Meeting rooms for four. If your matter needs a courtroom crowd, we will say we are the wrong size."}</p>
      <p>{"Reception is staffed from 9:00 to 17:30. The door is not a walk-in clinic."}</p>
      
      
      
      
    </article>
  );
}
