"use client";
import ProductSlider from "@/app/[locale]/components/ProductSlider";
import axios from "axios";
import { useLocale, useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { AccordionCustomAnimation } from "../../components/Accordion";
import { Spin } from "../../components/Spin";

function Product() {
  let text = useParams();
  let productName = text.product;
  productName = productName.replace("%20", " ");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const API = process.env.NEXT_PUBLIC_BACKEND_API;

  useEffect(() => {
    axios.get(API+"products").then((response) => {
      setProducts(response.data);
      setLoading(true);

    });
  }, []);

  let filteredProduct = products.filter(
    (product) => product.name_en === productName
  );

  
  const t = useTranslations("Index");
  const locale = useLocale();
  return (
    loading === true ? 
    <div className="p-10 ">
      <h1 className="text-center font-bold text-2xl my-3 mb-10">
        {loading && locale == "en"
          ? filteredProduct[0].name_en
          : loading && filteredProduct[0].name_ar}
      </h1>
      <h1 className="text-xl mb-10 whitespace-normal text-center">
        {loading && locale == "en"
          ? filteredProduct[0].description_en
          : loading && filteredProduct[0].description_ar}
      </h1>
      {loading && <ProductSlider images={filteredProduct[0].prod_images} />}

      <h1 className="  font-bold text-2xl mb-10 mt-10">{t("description")}</h1>
      
      <p className="  text-xl mb-10 whitespace-pre-line">
        {loading && locale == "en"
          ? `${filteredProduct[0].features_en}`
          : loading && `${filteredProduct[0].features_ar}`}
      </p>

      <h1 className="  font-bold text-2xl mb-10 mt-10">{t("features")}</h1>
      
      <p className="  text-xl mb-10 whitespace-pre-line">
        {loading && locale == "en"
          ? `${filteredProduct[0].features_en}`
          : loading && `${filteredProduct[0].features_ar}`}
      </p>

      <h1 className="  font-bold text-2xl mb-10">{t("app")}</h1>
      <p className="  text-xl mb-10 whitespace-pre-line">
        {loading && locale == "en"
          ? `${filteredProduct[0].applications_en}`
          : loading && `${filteredProduct[0].applications_ar}`}
      </p>
      {loading && <ProductSlider images={filteredProduct[0].app_images} />}

      <AccordionCustomAnimation/>
    </div>
    :
    <Spin/>
  );
}
export default Product;
