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
                    <Link
                      to={`/travel/${item.id}`}
                      className="bg-[#002F2F] text-white px-[25px] py-[10px] rounded"
                    >
                      Batafsil
                    </Link>
                    <Link
                      to={`/sayohat/${item.id}`}
                      className="bg-[#002F2F] text-white px-[25px] py-[10px] rounded"
                    >
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
                    <Link
                      to={`/travel/${item.id}`}
                      className="bg-[#002F2F] text-white px-[25px] py-[10px] rounded"
                    >
                      Batafsil
                    </Link>
                    <Link
                      to={`/sayohat/${item.id}`}
                      className="bg-[#002F2F] text-white px-[25px] py-[10px] rounded"
                    >
                      Sotib olish
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="bg-[#002F2F] py-16 px-4">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-20">
          <div className="flex flex-col lg:flex-row justify-between gap-12">
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <img
                className="w-[90px] md:w-[110px] object-cover mb-6"
                src="./images/mian1.png"
                alt="mainLogo1"
              />
              <h3 className="text-white text-[32px] md:text-[44px] mb-6">
                Tajribali qo‘llanma
              </h3>
              <p className="text-white text-[16px] md:text-[18px] max-w-[422px]">
                Har bir mamlakatning va shaharning turli sayohat dasturlari
                haqida ma'lumotlar olasiz. Sayohatga chiqqaningizda sizga
                dastur, jamoa va xizmatlar haqida maslahatlar beramiz.
              </p>
            </div>

            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <img
                className="w-[90px] md:w-[110px] object-cover mb-6"
                src="./images/Plane-ticket (1).png"
                alt="mainLogo2"
              />
              <h3 className="text-white text-[32px] md:text-[44px] mb-6">
                Qulay narx
              </h3>
              <p className="text-white text-[16px] md:text-[18px] max-w-[422px]">
                Maxsus chegirmalar, xizmatlar va arzon narxlar orqali sizga
                sifatli sayohat imkoniyatlarini taqdim qilamiz.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-full max-w-[500px] mx-auto px-10 py-12 text-center">
            <h3 className="text-[#002F2F] text-xl md:text-2xl mb-2">
              Nima uchun?
            </h3>
            <h2 className="text-[#002F2F] text-[36px] md:text-[60px] font-bold">
              Nima uchun bizni tanlaysiz?
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row justify-between gap-12">
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <img
                className="w-[90px] md:w-[110px] object-cover mb-6"
                src="./images/List-agenda (1).png"
                alt="mainLogo3"
              />
              <h3 className="text-white text-[32px] md:text-[44px] mb-6">
                Ajoyib qo‘llab-quvvatlash
              </h3>
              <p className="text-white text-[16px] md:text-[18px] max-w-[422px]">
                Mijozlarga e-mail orqali yangiliklar, webinarlar va onlayn
                taqdimotlar bilan ko‘mak beramiz.
              </p>
            </div>

            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <img
                className="w-[90px] md:w-[110px] object-cover mb-6"
                src="./images/Plane-ticket (1).png"
                alt="mainLogo4"
              />
              <h3 className="text-white text-[32px] md:text-[44px] mb-6">
                Hashamatli mehmonxona
              </h3>
              <p className="text-white text-[16px] md:text-[18px] max-w-[422px]">
                Litsenziyalangan mehmonxonalar bilan hamkorlik. Mijozlarga
                qulay, sifatli xizmat ko‘rsatish kafolatlanadi.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#e9e5e5] py-16 px-4">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-semibold mb-8 text-[#002F2F]">
              Bog‘lanish
            </h2>
            <form className="flex flex-col gap-6">
              <div className="flex flex-col md:flex-row gap-4">
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
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="tel"
                  placeholder="Telefon raqam: +998"
                  className="w-full border border-[#002F2F] text-[#002F2F] placeholder:text-[#002F2F  ] px-4 py-2 outline-none"
                />
                <input
                  type="email"
                  placeholder="email@domain.com"
                  className="w-full border border-[#002F2F] text-[#002F2F] placeholder:text-[#002F2F  ] rounded-md px-4 py-2 outline-none"
                />
              </div>
              <textarea
                rows="5"
                placeholder="Xabar"
                className="w-full border border-[#002F2F] text-[#002F2F] placeholder:text-[#002F2F] rounded-md px-4 py-2 outline-none"
              />
              <button
                type="submit"
                className="bg-[#002F2F] text-[#fff] py-3 rounded-md hover:bg-[#003333] transition-all"
              >
                Xabar yuborish
              </button>
            </form>
          </div>

          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-semibold text-[#002F2F] mb-8">
              Manzilimiz
            </h2>
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="h-[300px] w-full bg-black flex items-center justify-center text-white text-xl">
                MAP IMAGE / IFRAME
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2">O‘zbekiston</h3>
                <p className="text-sm text-gray-700 mb-2">
                  Yakkasaroy tumani Bobur 46/72 Mo‘ljal: Yakkasaroy Xalqaro
                  Aeroport yo‘li
                </p>
                <div className="flex items-center gap-1 text-orange-500 text-sm">
                  ★★★★★ <span className="ml-2 text-black">5/5</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
