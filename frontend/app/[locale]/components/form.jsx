"use client"
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Textarea } from "@material-tailwind/react";
import { useLocale, useTranslations } from "next-intl";
 
 
export default function Form() {
  const t=useTranslations("Index")
  const locale=useLocale()

  return (
    <Card color="transparent" shadow={false} className="text-center mt-24">
      <h1 className="mb-3 text-4xl text-black font-semibold" >
      {t("contact_title")}
      </h1>
      <p className="text-lg max-w-[720px] m-auto text-black">
      {t("contact_desc")}
      </p>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 m-auto">
        <div className="mb-4 flex flex-col gap-6">
          <Input color="blue" size="lg" label={t("name")} type="text" required/>
          <Input color="blue" size="lg" label={t("email")} type="email" required/>
          <Textarea color="blue" size="lg" label={t("message")} type="textarea" required/>
        </div>
        
        <button className="mt-3 bg-gray-800  hover:bg-gray-900 w-[100%] text-white rounded-lg py-2 " type="submit">
        {t("msg")}
        </button>
        <p color="gray" className="mt-4 text-center text-xl">
        {t("happy")}
          
        </p>
      </form>
    </Card>
  );
}