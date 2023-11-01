"use client"
import React, { useEffect, useState } from 'react'


const page = () => {
  const [items, setItems] = useState([]);
  const API = process.env.NEXT_PUBLIC_BACKEND_API;

  useEffect(() => {
    fetch(API)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setItems(result.profile);
      });
  }, []);

  return (
    <div>
      <iframe src={items.pdf} width="100%" height="700px"></iframe>
    </div>
  )
}

export default page