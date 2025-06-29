// TravelDetail.jsx
import React from "react";
import { useParams } from "react-router-dom";
import useCollaction from "../hooks/useCollaction";

function TravelDetail() {
  const { id } = useParams(); 
  const { data } = useCollaction("salomat");
  const { data: uzbekTravel } = useCollaction("uzbekTravel");

  if (!data || !uzbekTravel) {
    return <div className="text-center mt-20">Yuklanmoqda...</div>;
  }

  const allData = [...data, ...uzbekTravel];

  const item = allData.find((el) => el?.id?.toString() === id);

  if (!item) {
    return <div className="text-center mt-20">Sayohat topilmadi!</div>;
  }

  return (
    <div
      className="py-16 px-4 max-w-[1000px] mx-auto bg-cover bg-center rounded-xl"
      style={{ backgroundImage: `url(${item.images})` }}
    >
      <div className="bg-black/50 p-6 rounded-xl">
        <h1 className="text-[32px] md:text-[48px] font-bold text-white mb-4">
          {item.title}
        </h1>
        <p className="text-[18px] md:text-[22px] text-white mb-6">
          Narx: <strong>{item.price} UZS</strong>
        </p>
        <p className="text-[16px] text-white max-w-[700px]">
         {item?.description}
        </p>
      </div>
    </div>
  );
}

export default TravelDetail;
