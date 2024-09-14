"use client";
import { useState } from "react";

export default function Home() {
  const [data, setData] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch("/api/hello", {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.text(); // 응답에서 텍스트 데이터를 꺼내옴
      setData(result); // 받은 데이터를 상태에 저장
      alert(result); // 데이터를 경고창으로 보여줌
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  return (
    <div>
      <button onClick={fetchData}>데이터 패치 확인</button>
      {data && <div>받은 데이터: {data}</div>} {/* 받은 데이터를 화면에 표시 */}
    </div>
  );
}
