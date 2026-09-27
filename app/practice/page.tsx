import type { Metadata } from "next";
import Link from "next/link";
import { InquiryForm } from "@/components/InquiryForm";

export const metadata: Metadata = { title: "Consult" };

export default function PracticePage() {
  return (
    <div className="frame">
      <header className="brand">
        <p>Consultation</p>
        <h1><Link href="/">Veld &amp; Hart</Link></h1>
      </header>
      <InquiryForm
        submitLabel="Request a consultation"
        fields={[
          { name: "name", label: "Name" },
          { name: "email", label: "Email", type: "email" },
          { name: "matter", label: "Matter", type: "select", options: ["Contracts", "Employment", "Property", "Disputes"] },
          { name: "note", label: "Short description", type: "textarea" },
        ]}
      />
    </div>
  );
}
