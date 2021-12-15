import React from "react";
import { MdDoubleArrow, MdArrowForward } from "react-icons/md";

export default function Popular() {
  return (
    <div className="md:w-full w-full gap-y-8 h-[491px] md:h-[460px] md:p-[90px] bg-[#FDF2ED] md:rounded-3xl flex flex-col items-start justify-center md:gap-y-12 overflow-clip pl-8">
      <div className="pt-2 ">
        <p className="text-[#3F536C] text-[24px] font-bold pb-4">
          Kararsız mı Kaldınız?
        </p>
        <p className="text-[#3F536C] text-[16px] font-semibold opacity-50">
          Nasıl bir Tatil istediğinize karar
          <br className="md:hidden block" /> veremediyseniz size önerdiğimiz{" "}
          <br className="md:hidden block" />
          tatil temalarını inceleyin!
        </p>
      </div>
      <div className="flex md:w-full md:h-[200px] md:flex-row justify-between relative gap-x-4 md:pb-4">
        <div className="w-[180px] h-[200px] ">
          <div className="absolute bottom-6 z-10 pl-4">
            <p className="text-white text-[14px] font-bold ">Kayak Otelleri </p>
            <p className="text-white text-[11px] font-normal ">2243 Otel</p>
          </div>
          <div>
            <img
              src="/images/Mask Group 69.png"
              alt="pops-img"
              className="object-cover w-[180px] h-[200px] "
            />
          </div>
        </div>
        <div className="w-[180px] h-[200px] md:rounded-b-xl flex ">
          <div className="absolute bottom-6 z-10 pl-4">
            <p className="text-white text-[14px] font-bold ">Kayak Otelleri </p>
            <p className="text-white text-[11px] font-normal ">2243 Otel</p>
          </div>
          <div>
            <img
              src="/images/Mask Group 69.png"
              alt="pops-img"
              className="object-cover w-[180px] h-[200px]"
            />
          </div>
        </div>
        <div className="w-[180px] h-[200px] md:rounded-b-xl flex ">
          <div className="absolute bottom-6 z-10 pl-4">
            <p className="text-white text-[14px] font-bold ">Kayak Otelleri </p>
            <p className="text-white text-[11px] font-normal ">2243 Otel</p>
          </div>
          <div>
            <img
              src="/images/Mask Group 69.png"
              alt="pops-img"
              className="object-cover w-[180px] h-[200px]"
            />
          </div>
        </div>
        <div className="w-[180px] h-[200px] md:rounded-b-xl flex ">
          <div className="absolute bottom-6 z-10 pl-4">
            <p className="text-white text-[14px] font-bold ">Kayak Otelleri </p>
            <p className="text-white text-[11px] font-normal ">2243 Otel</p>
          </div>
          <div>
            <img
              src="/images/Mask Group 69.png"
              alt="pops-img"
              className="object-cover w-[180px] h-[200px]"
            />
          </div>
        </div>
        <div className="w-[180px] h-[200px] rounded-xl flex ">
          <div className="absolute bottom-6 z-10 pl-4">
            <p className="text-white text-[14px] font-bold ">Kayak Otelleri </p>
            <p className="text-white text-[11px] font-normal ">2243 Otel</p>
          </div>
          <div>
            <img
              src="/images/Mask Group 69.png"
              alt="pops-img"
              className="object-cover w-[180px] h-[200px]"
            />
          </div>
        </div>

        <div className="w-[180px] h-[200px] md:rounded-xl  bg-[#2A5AB3] flex flex-col justify-center items-center ">
          <MdDoubleArrow className="text-white w-[42px] h-[34px]" />
          <p className="text-white text-[14px] font-bold ">Tümünü Gör</p>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center w-full gap-x-2">
        <p className="text-[#2A5AB3] text-[14px] font-bold">
          Daha fazla göster
        </p>
        <MdArrowForward className="text-[#2A5AB3] w-[24px] h-[18px]" />
      </div>
    </div>
  );
}
