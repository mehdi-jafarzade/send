'use client'

import React, { useEffect, useState } from "react";

interface ImageData {
  img: string;
}

export default function Home() {
  const [img, setImg] = useState<string>('');
  const [dataf, setDataf] = useState<ImageData[]>([]); 


  const sendData = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    try {
      const response = await fetch('/api/image', {
        method: "POST",
        body: JSON.stringify({ img }),
        headers: { "Content-Type": "application/json" }
      });
      if (response.ok) {
        fetchData();
      } else {
        console.error("Failed to send image data to server");
      }
    } catch (error) {
      console.error("Error sending image data:", error);
    }
  }

  
  const fetchData = async (): Promise<void> => {
    try {
      const response = await fetch('/api/imageget');
      if (response.ok) {
        const data: ImageData[] = await response.json();
        setDataf(data);
        console.log(data);
        
      } else {
        console.error("Failed to fetch data from server");
        console.log(dataf);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      console.log(dataf);
    }
  }

  
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      <div>
        <form onSubmit={sendData} className="flex flex-col items-center justify-center">
          <input onChange={(e) => setImg(e.target.value)} className="border border-black" type="text" placeholder="آدرس تصویر..." />
          <button type="submit">ارسال</button>
        </form>
      </div>

      <div>
        {dataf.map((item, index) => (
          <div key={index}>
            <p>{item.img} data:</p>
          </div>
        ))}
      </div>
    </main>
  );
}