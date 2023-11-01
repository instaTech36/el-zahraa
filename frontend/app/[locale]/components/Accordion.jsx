import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { useLocale, useTranslations } from "next-intl";
 
function Icon({ id, open }) {
  
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

const CUSTOM_ANIMATION = {
  mount: { scale: 1 },
  unmount: { scale: 0.9 },
};
 
export function AccordionCustomAnimation() {
  const [open, setOpen] = React.useState(0);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  const t=useTranslations("Index")
  const locale=useLocale()
  return (
    <>
      <Accordion  open={open === 1} icon={<Icon id={1} open={open} />} animate={CUSTOM_ANIMATION} className="mt-10">
        <AccordionHeader onClick={() => handleOpen(1)}>{t("accordionTitle1")}</AccordionHeader>
        <AccordionBody  className="font-bold text-lg">
        {t("accordionAnswer1")}
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} icon={<Icon id={2} open={open} />} animate={CUSTOM_ANIMATION} >
        <AccordionHeader onClick={() => handleOpen(2)}>
        {t("accordionTitle2")}
        </AccordionHeader>
        <AccordionBody className="font-bold text-lg">
        {t("accordionAnswer2")}
        </AccordionBody>
      </Accordion>
      
    </>
  );
}