import React from "react";
import Image from "next/image";
import MegaMenuOtel from "./MegaMenuOtel";
import MegaMenuTour from "./MegaMenuTour";
import MegaMenuCampaings from "./MegaMenuCampaings";
import ResponsiveMenu from "./ResponsiveMenu";
export default function HeaderTop() {
  const [openMegaMenu, setOpenMegaMenu] = React.useState([false, false, false]);
  return (
    <div className="flex md:flex-row flex-col items-center justify-between w-full md:w-[1440px] md:border-r-2 md:border-l-2 border-b-2 md:pt-5 md:pl-6 md:pr-6 md:pb-4">
      <div className="md:w-auto w-full ">
        <div className="hidden md:flex">
          <a href="/">
            <Image
              src="/images/logo.svg"
              alt="Picture of the author"
              width={218}
              height={43}
            />
          </a>
        </div>

        <div className="md:hidden w-full ">
          <img
            src="/images/ust bar.svg"
            alt="Picture of the author"
            className="w-full  h-[30px]  object-cover"
          />
        </div>
      </div>

      <div className="hidden md:flex md:flex-row md:gap-x-8">
        <div className="relative ">
          <button
            onClick={() => setOpenMegaMenu([!openMegaMenu[0], false, false])}
            type="button"
            className="flex flex-row items-center gap-x-3 font-bold text-[#3F536C] hover:scale-125"
          >
            Otel
            <img
              src="/images/Icon awesome-angle-down-1.svg"
              className="md:pt-1"
            />
          </button>
          {openMegaMenu[0] && <MegaMenuOtel />}
        </div>
        <div className="relative ">
          <button
            onClick={() => setOpenMegaMenu([false, !openMegaMenu[1], false])}
            type="button"
            className="flex flex-row items-center gap-x-3 font-bold text-[#3F536C] hover:scale-125"
          >
            Tur
            <img src="/images/Icon awesome-angle-down-1.svg" className="pt-1" />
          </button>
          {openMegaMenu[1] && <MegaMenuTour />}
        </div>
        <div className="relative">
          <button
            onClick={() => setOpenMegaMenu([false, false, !openMegaMenu[2]])}
            type="button"
            className="flex flex-row font-bold items-center gap-x-3 text-[#3F536C] hover:scale-125"
          >
            Kampanyalar
            <img src="/images/Icon awesome-angle-down-1.svg" className="pt-1" />
          </button>
          {openMegaMenu[2] && <MegaMenuCampaings />}
        </div>
      </div>
      <div className="hidden md:flex md:flex-row md:items-center gap-x-4 pr-4 ">
        <button className="flex w-[150px] h-[30px] text-[12px]  text-center text-[#3f536c] font-semibold flex-row items-center gap-x-4 border border-[#6F7E8F4D] rounded-full p-2">
          <img className="" src="/images/Icon feather-headphones.svg" />0 850
          333 3 33
        </button>
        <div>
          <button className="flex flex-row  items-center justify-center w-[106px] h-[30px] text-[12px] text-[#3f536c] font-semibold  gap-x-4 border border-[#6F7E8F4D] rounded-full p-2">
            Giriş yapın
          </button>
        </div>
      </div>
      <ResponsiveMenu />
    </div>
  );
}
