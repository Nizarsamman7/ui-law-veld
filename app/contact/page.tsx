import type { Metadata } from "next";
import { InquiryForm } from "@/components/InquiryForm";
export const metadata: Metadata = { title: "Contact" };

export default function Page() {
  return (
    <article className="sheet">
      <p className="eyebrow">{"Clerk"}</p>
      <h1>{"Write to the clerks. +31 20 123 4540."}</h1>
      <p className="lede">{"Name the other party so we can check conflicts."}</p>
      
      
      
      
      <InquiryForm submitLabel={"Send"} fields={[{"name":"name","label":"Name"},{"name":"email","label":"Email","type":"email"},{"name":"phone","label":"Phone","type":"tel"},{"name":"note","label":"Message","type":"textarea"}]} />
    </article>
  );
}
