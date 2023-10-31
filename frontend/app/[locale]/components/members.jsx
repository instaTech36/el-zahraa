
import { Avatar, Typography } from "@material-tailwind/react";
import axios from "axios";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";

let API = process.env.NEXT_PUBLIC_BACKEND_API;
export default function Members({loading,items}) {


  const t=useTranslations("Index")
  const locale=useLocale()

  return (
    <>
    <h1 className="text-center text-2xl my-20 font-bold">{t("members")}</h1>
    <div className="flex flex-col md:flex-row  items-center justify-around text-center">
    {
      loading&&items.map((item)=>{
        return(
          <div className="flex flex-col flex-wrap items-center gap-4">
          <Avatar src={`http://localhost:8000${item.image}`} color="pink" className="w-[200px] p-1 h-[200px]  hover:w-[220px] hover:h-[220px] duration-300"  withBorder={true} alt="avatar" />
          <div>
            <h1 className="text-xl font-bold mb-1">{locale=="en"?item.name_en:item.name_ar}</h1>
            <p className="font-normal mb-10">
            {locale=="en"?item.title_en:item.title_ar}
            </p>
          </div>
        </div>
        )
      })
    }  
    </div>
    </>
  );
}