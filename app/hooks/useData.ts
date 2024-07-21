import { useGetValue, useItemParams } from "@/app/hooks/useGetValue";

export const useData = () => {
  const yourEmail = useGetValue("yourEmail") || "hello@iamkimninja.com";
  const yourName = useGetValue("yourName") || "김닌자 주식회사 Kim Ninja";
  const yourAddress = useGetValue("yourAddress") || "502, 126, Jandari-ro, Mapo-Gu";
  const yourCity = useGetValue("yourCity") || "Seoul";
  const yourState = useGetValue("yourState");
  const yourCountry = useGetValue("yourCountry") || "South Korea";
  const yourLogo = useGetValue("yourLogo") || "/logo_kimninja.png";
  const yourTaxId = useGetValue("yourTaxId");
  const yourZip = useGetValue("yourZip") || "03998";

  const email = useGetValue("email") || "invoice@lumoview.com";
  const companyName = useGetValue("companyName") || "Lumoview Building Analytics GmbH";
  const companyAddress = useGetValue("companyAddress") || "Eichendorffstr. 49";
  const companyCity = useGetValue("companyCity") || "Köln";
  const companyState = useGetValue("companyState") ;
  const companyCountry = useGetValue("companyCountry") || "Germany" ;
  const companyLogo = useGetValue("companyLogo") || "/logo_lumoview.png";
  const companyTaxId = useGetValue("companyTaxId") ;
  const companyZip = useGetValue("companyZip") || "50825";

  const note = useGetValue("note");
  const discount = useGetValue("discount");
  const taxRate = useGetValue("tax");
  const items = useItemParams();

  const bankName = useGetValue("bankName") || "Wise";
  const accountNumber = useGetValue("accountNumber") || "BE04967847815631";
  const accountName = useGetValue("accountName") || "Kim Ninja";
  const routingCode = useGetValue("routingCode");
  const swiftCode = useGetValue("swiftCode") || "TRWIBEB1XXX";
  const ifscCode = useGetValue("ifscCode");

  const invoiceNumber = useGetValue("invoiceNo") || "2024000";
  const issueDate = useGetValue("issueDate");
  const dueDate = useGetValue("dueDate");

  const currency = useGetValue("currency", "EUR");

  const invoiceTerms = {
    invoiceNumber,
    issueDate,
    dueDate,
  };

  const invoiceDetails = {
    note,
    discount,
    taxRate,
    items,
    currency,
  };

  const paymentDetails = {
    bankName,
    accountNumber,
    accountName,
    routingCode,
    swiftCode,
    ifscCode,
    currency
  };

  const yourDetails = {
    yourName,
    yourAddress,
    yourCity,
    yourState,
    yourCountry,
    yourLogo,
    yourEmail,
    yourTaxId,
    yourZip,
  };

  const companyDetails = {
    companyName,
    companyAddress,
    companyCity,
    companyState,
    companyCountry,
    companyLogo,
    companyTaxId,
    companyZip,
    email,
  };

  return {
    companyDetails,
    yourDetails,
    paymentDetails,
    invoiceTerms,
    invoiceDetails,
  };
};