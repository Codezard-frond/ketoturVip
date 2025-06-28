import React from "react";
import useCollaction from "../hooks/useCollaction";
import { Link } from "react-router-dom";

function Home() {
  const { data } = useCollaction("salomat");
  const { data: uzbekTravel } = useCollaction("uzbekTravel");

  return (
    <div>
      <div className="bg-[url(./images/malvidiya.png)] bg-cover bg-center h-screen">
        <div className="main-container pt-[100px] px-4">
          <h1 className="text-[40px] md:text-[80px] mb-[18px] max-w-[377px] font-bold text-black/70">
            Maldiviya
          </h1>
          <p className="text-[14px] md:text-[16px] max-w-[589px] font-normal">
            Maldiv orollari Respublikasi Hind okeanining ekvatorial suvlarida,
            Shri-Lankadan 700 km janubi-gʻarbda va Hindistondan 340 km janubda
            joylashgan
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-[16px] sm:gap-[24px] mt-[40px]">
            <button className="bg-[#002F2F] text-white px-[25px] py-[10px] rounded">
              Batafsil
            </button>
            <button className="bg-[#002F2F] text-white px-[25px] py-[10px] rounded">
              Sotib olish
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#e9e5e5]">
        <h2 className="text-[#002F2F] text-center text-[36px] md:text-[60px] mb-[33px] pt-[60px] md:pt-[100px]">
          Biz haqimizda
        </h2>
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-[40px] md:gap-[60px] main-container px-4 pb-10">
          <img
            className="rounded-full w-[250px] md:w-[400px]"
            src="./images/bzhaqmzda].png"
            alt="bzhaqmzda"
          />
          <div>
            <h3 className="text-[26px] md:text-[45px] mb-[24px] md:mb-[48px] font-bold text-[#002F2F] max-w-[584px]">
              Sayohat agentligimiz siz uchun go'zal Orzuingizdagi joyni taqdim
              etadi
            </h3>
            <p className="text-[18px] md:text-[22px] font-medium text-[#002F2F] max-w-[650px]">
              Kettu Tour sayyohlik agentligidir. Ko'pgina mamlakatlarda turli
              turistik marshrutlarni boshqaradigan agentlik. Kettu Tour ushbu
              agentliklar orasida o'zining ajoyib xizmati va ko'plab ajoyib
              takliflari bilan ajralib turadi.
            </p>
            <button className="mt-[40px] md:mt-[100px] bg-[#002F2F] text-white px-[25px] py-[10px] rounded-xl">
              Bog’lanish
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#e9e5e5] pb-[120px] px-4">
        <h2 className="text-center text-[36px] md:text-[60px] mb-[40px] md:mb-[58px] text-[#003000]">
          Dunyo bo’ylab sayohat
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px] md:gap-[74px] main-container">
          {data &&
            data.map((item) => (
              <div
                key={item.id}
                className="flex items-start justify-start flex-col"
              >
                <img
                  className="max-w-full w-full min-h-[200px] object-cover Hom-IMg"
                  src={item?.images}
                  alt=""
                />
                <div className="bg-[#fff] w-full p-2 home__border">
                  <h2 className="text-[24px] md:text-[35px] font-medium text-[#002F2F]">
                    {item?.title}
                  </h2>
                  <h3 className="text-[#002F2F] text-[20px] md:text-[25px] font-medium max-w-[275px]">
                    Narx: {item?.price} UZS
                  </h3>
                  <div className="flex justify-center sm:flex-row ml-0 sm:ml-3 items-start sm:items-center gap-[16px] sm:gap-[24px] mt-[30px]">
                    <Link className="bg-[#002F2F] text-white px-[25px] py-[10px] rounded">
                      Batafsil
                    </Link>
                    <Link className="bg-[#002F2F] text-white px-[25px] py-[10px] rounded">
                      Sotib olish
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className="bg-[#e9e5e5] pb-[120px] px-4">
        <h2 className="text-center text-[36px] md:text-[60px] mb-[40px] md:mb-[58px] text-[#003000]">
          O’zbekiston bo’ylab sayohat
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px] md:gap-[74px] main-container">
          {uzbekTravel &&
            uzbekTravel.map((item) => (
              <div
                key={item.id}
                className="flex items-start justify-start flex-col"
              >
                <img
                  className="Hom-IMg max-w-full w-full min-h-[200px] object-cover "
                  src={item?.images}
                  alt=""
                />
                <div className="bg-[#fff] w-full p-2 home__border">
                  <h2 className="text-[24px] md:text-[35px] font-medium text-[#002F2F]">
                    {item?.title}
                  </h2>
                  <h3 className="text-[#002F2F] text-[20px] md:text-[25px] font-medium max-w-[275px]">
                    Narx: {item?.price} UZS
                  </h3>
                  <div className="flex justify-center sm:flex-row ml-0 sm:ml-3 items-start sm:items-center gap-[16px] sm:gap-[24px] mt-[30px]">
                    <Link className="bg-[#002F2F] text-white px-[25px] py-[10px] rounded">
                      Batafsil
                    </Link>
                    <Link className="bg-[#002F2F] text-white px-[25px] py-[10px] rounded">
                      Sotib olish
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
