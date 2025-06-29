import React from "react";
import { Link, useParams } from "react-router-dom";
import useCollaction from "../hooks/useCollaction";

function Sayohat() {
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
    <div className="bg-[#fff]">
      <div className="py-16 px-4 max-w-[1000px] mx-auto  rounded-xl">
        <h1 className="text-[60px] text-center font-normal text-[#003000] mb-[100px]">
          Sayoxat
        </h1>
        <div className="flex items-center justify-between gap-[60px]">
          <img
            className="max-w-[539px] rounded-2xl w-full"
            src={item?.images}
            alt={item?.title}
          />
          <div className="w-full">
            <div className="flex flex-col gap-[7px]">
              <h2 className="text-[#002F2F] text-[40px] ">{item?.title}</h2>
              <h3 className="text-[#002F2F] text-[40px] ">
                Narx: {item?.price}$
              </h3>
            </div>
            <div className="flex flex-col gap-[35px] w-full">
              <input
                type="text"
                placeholder="Ism"
                className="w-full border border-[#002F2F] text-[#002F2F] placeholder:text-[#002F2F  ] rounded-md px-4 py-2 outline-none"
              />
              <input
                type="text"
                placeholder="Ism"
                className="w-full border border-[#002F2F] text-[#002F2F] placeholder:text-[#002F2F  ] rounded-md px-4 py-2 outline-none"
              />
              <input
                type="text"
                placeholder="Familiya"
                className="w-full border border-[#002F2F] text-[#002F2F] placeholder:text-[#002F2F  ] rounded-md px-4 py-2 outline-none"
              />

              <Link
                to="/sotibolish"
                className="bg-[#002F2F] text-center text-white px-[25px] py-[10px] rounded"
              >
                Sotib olish
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sayohat;
