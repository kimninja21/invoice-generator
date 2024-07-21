import { NewInvoiceForm } from "@/app/invoice/component/NewInvoiceForm";
import { Suspense } from "react";
import { auth } from "@/auth";

export default async function Page() {
  const session =  await auth()
  if (!session?.user) return (
    <div>Not Logged In!</div>
  ) 
  return (

    <div className="min-h-screen overflow-y-auto h-full flex items-center md:flex-row flex-col-reverse">
    <Suspense>
      <NewInvoiceForm />
    </Suspense>
  </div>
  )
}


