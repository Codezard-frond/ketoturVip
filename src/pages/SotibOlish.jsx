import React from "react";

function SotibOlish() {
  return (
    <div className="min-h-screen bg-[#f0eeee] flex flex-col items-center justify-center px-4">
      <h1 className="text-[#003000] text-3xl md:text-4xl font-semibold mb-10 text-center">
        Buyurtma uchun to‘lov
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full max-w-[900px]">
        <div className="flex flex-col items-center gap-6">
          <img
            src="./images/payme.png"
            alt="Payme"
            className="w-[200px] object-contain border p-3 rounded-xl bg-white"
          />
          <img
            src="./images/click.png"
            alt="Click"
            className="w-[200px] object-contain rounded-xl bg-white"
          />
        </div>

        <form className="flex flex-col gap-5">
          <input
            type="tel"
            placeholder="Telefon raqam: +998"
            className="px-4 py-3 rounded-md outline-none border border-gray-300 placeholder:text-gray-500"
          />
          <input
            type="text"
            placeholder="Buyurtma nomi"
            className="px-4 py-3 rounded-md outline-none border border-gray-300 placeholder:text-gray-500"
          />
          <input
            type="text"
            placeholder="Buyurtma id si"
            className="px-4 py-3 rounded-md outline-none border border-gray-300 placeholder:text-gray-500"
          />
          <div className="relative">
            <input
              type="text"
              placeholder="To‘lov summasi"
              className="w-full px-4 py-3 pr-16 rounded-md outline-none border border-gray-300 placeholder:text-gray-500"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 font-medium">
              UZS
            </span>
          </div>
          <button
            type="submit"
            className="bg-[#003000] text-white py-3 rounded-md hover:bg-[#004000] transition-all"
          >
            To‘lash
          </button>
        </form>
      </div>
    </div>
  );
}

export default SotibOlish;
