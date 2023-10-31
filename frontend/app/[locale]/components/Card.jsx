import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
export const Card = ({image,title_en,title_ar,description,category}) => {
  const t=useTranslations("Index")
  const locale=useLocale()

  return (
    <div className="shadow-lg w-80 text-center mb-5 border-solid border-2 border-gray-200 rounded-lg">
 
      <div className="w-full max-h-52 overflow-hidden rounded-lg">
        <img
          alt="CardImage"
          src={image}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto"
          priority
        />
      </div>
      <div className="p-6 flex flex-col gap-1">
        <h1 className="text-xl font-semibold mb-3">{locale=="en"?title_en:title_ar}</h1>
        <p className="text-sm ">
          {description}
        </p>
        
      </div>
      {
        category===undefined? 
        <a href={`/${title_en}`}>     
        <button className=" border-solid border-2 border-black rounded-lg py-1 px-6 hover:bg-yellow-600 transition duration-300 all mb-8">
          {t("more")}
          </button>
      </a>
      :
      <a href={`/${category}/${title_en}`}>     
      <button className=" border-solid border-2 border-black rounded-lg py-1 px-6 hover:bg-yellow-600 transition duration-300 all mb-8">
        {t("more")}
        </button>
    </a>

      }
    </div>
  );
};
