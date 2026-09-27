import type { Metadata } from "next";
import { InquiryForm } from "@/components/InquiryForm";
export const metadata: Metadata = { title: "Careers" };

export default function Page() {
  return (
    <article className="sheet">
      <p className="eyebrow">{"Chambers"}</p>
      <h1>{"We take a trainee when we have the work, not every September."}</h1>
      <p className="lede">{"Write with the area you want and a writing sample. Not a slogan."}</p>
      
      
      
      
      <InquiryForm submitLabel={"Send"} fields={[{"name":"name","label":"Name"},{"name":"email","label":"Email","type":"email"},{"name":"phone","label":"Phone","type":"tel"},{"name":"note","label":"Message","type":"textarea"}]} />
    </article>
  );
}
