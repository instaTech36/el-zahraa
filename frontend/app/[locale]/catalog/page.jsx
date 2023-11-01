"use client"
import React, { useEffect, useState } from 'react'


const page = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/")
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