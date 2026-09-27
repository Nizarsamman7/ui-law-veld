import type { Metadata } from "next";
import { InquiryForm } from "@/components/InquiryForm";
export const metadata: Metadata = { title: "Consult" };

export default function Page() {
  return (
    <article className="sheet">
      <p className="eyebrow">{"Instruct"}</p>
      <h1>{"Tell us the matter in a few lines."}</h1>
      <p className="lede">{"Do not send secrets you would not put in an email to a stranger. We confirm we can act before we ask for the file."}</p>
      
      
      
      
      <InquiryForm submitLabel={"Request a consultation"} fields={[{"name":"name","label":"Name"},{"name":"email","label":"Email","type":"email"},{"name":"matter","label":"Matter","type":"select","options":["Contracts","Employment","Property","Disputes"]},{"name":"note","label":"Short description","type":"textarea"}]} />
    </article>
  );
}
