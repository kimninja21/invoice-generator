"use client";

import { DownloadInvoiceButton } from "@/app/component/form/downloadInvoice/downloadInvoiceButton";
import { InvoiceDetailsForm } from "@/app/component/form/invoiceDetails/invoiceDetailsForm";
import { InvoiceTermsForm } from "@/app/component/form/invoiceTerms/invoiceTermsForm";
import { PaymentDetailsForm } from "@/app/component/form/paymentDetails/paymentDetailsForm";
import { CompanyDetailsForm } from "@/app/component/form/companyDetails/companyDetailsForm";
import { YourDetailsForm } from "@/app/component/form/yourDetails/yourDetailsForm";
import { useGetValue } from "@/app/hooks/useGetValue";
import { getInitialValue } from "@/lib/getInitialValue";

export const UserInputForm = () => {
  const step = useGetValue("step", getInitialValue("step", "3"));

  return (
    <div>
      <div className={step === "1" ? "block" : "hidden"}>
        <InvoiceTermsForm />
        <InvoiceDetailsForm />
        <DownloadInvoiceButton />
      </div>
      <div className={step === "2" ? "block" : "hidden"}>
        <YourDetailsForm />
        <DownloadInvoiceButton />
      </div>
      <div className={step === "3" ? "block" : "hidden"}>
        <CompanyDetailsForm />
        <DownloadInvoiceButton />
      </div>
      <div className={step === "4" ? "block" : "hidden"}>
        <PaymentDetailsForm />
        <DownloadInvoiceButton />
      </div>
      <div className={step === "5" ? "block" : "hidden"}>
        <InvoiceTermsForm />
        <DownloadInvoiceButton />
      </div>
      {step === "6" && <DownloadInvoiceButton />}
    </div>
  );
};
