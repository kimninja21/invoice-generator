import CustomTextInput from "@/app/component/ui/customTextInput";
import CustomNumberInput from "@/app/component/ui/customNumberInput";
import ImageInput from "@/app/component/ui/imageInput";

export const YourDetailsForm = () => (
  <div className="pt-24">
    <p className="text-2xl font-semibold pb-3">Company Details (Yours)</p>
    <CustomTextInput
      label="Email"
      placeholder="hello@iamkimninja.com"
      variableName="email"
    />
    <p className="pb-10 pt-3 text-xs font-medium text-neutral-500">
      We&apos;ll fill the billing details automatically if we find the company.
    </p>
    <p className="pb-2 text-sm font-medium text-neutral-500">Billing details</p>
    <CustomTextInput
      label="Company name"
      placeholder="Kim Ninja"
      variableName="companyName"
    />
    <ImageInput label="Logo" variableName="companyLogo" />
    <CustomTextInput
      label="Address"
      placeholder="502, 126 Jandari-ro, Mapo-Gu"
      variableName="companyAddress"
    />
    <CustomTextInput
      label="City"
      placeholder="Seoul"
      variableName="companyCity"
    />
    <CustomTextInput
      label="State"
      placeholder="Seoul"
      variableName="companyState"
    />
    <CustomNumberInput
      label="Zip"
      placeholder="03998"
      variableName="companyZip"
    />
    <CustomTextInput
      label="Country"
      placeholder="South Korea"
      variableName="companyCountry"
    />
    <CustomTextInput
      label="Tax ID"
      placeholder="GSTIN 1234"
      variableName="companyTaxId"
    />
  </div>
);
