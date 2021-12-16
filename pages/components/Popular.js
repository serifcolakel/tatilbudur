import React from "react";
import { MdDoubleArrow, MdArrowForward } from "react-icons/md";

export default function Popular() {
  return (
    <div className="md:w-full w-full gap-y-8 h-[491px] md:h-[460px] md:p-[90px] bg-[#FDF2ED] md:rounded-3xl flex flex-col items-start hide-scroll-bar justify-center md:gap-y-12 pl-8 md:overflow-y-hidden  overflow-scroll p-2 mt-2">
      <div className="pt-2 md:pt-0">
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
      <div className=" flex md:flex flex-row justify-between relative md:gap-x-4 md:pb-4 gap-x-10">
        <div className="w-[180px] h-[200px] rounded-b-2xl">
          <div className="absolute bottom-6 md:bottom-12 z-10 pl-4">
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
          <div className="absolute bottom-6 md:bottom-12 z-10 pl-4">
            <p className="text-white text-[14px] font-bold ">Termal Oteller</p>
            <p className="text-white text-[11px] font-normal ">2243 Otel</p>
          </div>
          <div>
            <img
              src="/images/Scroll Group 63.png"
              alt="pops-img"
              className="object-cover w-[180px] h-[200px]"
            />
          </div>
        </div>
        <div className="w-[180px] h-[200px] md:rounded-b-xl flex ">
          <div className="absolute bottom-6 md:bottom-12 z-10 pl-4">
            <p className="text-white text-[14px] font-bold ">
              Yetişkin Otelleri{" "}
            </p>
            <p className="text-white text-[11px] font-normal ">2243 Otel</p>
          </div>
          <div>
            <img
              src="/images/Rectangle 615-2.png"
              alt="pops-img"
              className="object-cover w-[180px] h-[200px]"
            />
          </div>
        </div>
        <div className="w-[180px] h-[200px] md:rounded-b-xl flex ">
          <div className="absolute bottom-6 md:bottom-12 z-10 pl-4">
            <p className="text-white text-[14px] font-bold ">
              Çocuk Dostu Oteller{" "}
            </p>
            <p className="text-white text-[11px] font-normal ">2243 Otel</p>
          </div>
          <div>
            <img
              src="/images/Rectangle 615-3.png"
              alt="pops-img"
              className="object-cover w-[180px] h-[200px]"
            />
          </div>
        </div>
        <div className="w-[180px] h-[200px] rounded-xl flex ">
          <div className="absolute bottom-6 md:bottom-12 z-10 pl-4">
            <p className="text-white text-[14px] font-bold ">
              Denize Sıfır Oteller{" "}
            </p>
            <p className="text-white text-[11px] font-normal ">2243 Otel</p>
          </div>
          <div>
            <img
              src="/images/Rectangle 615-4.png"
              alt="pops-img"
              className="object-cover w-[180px] h-[200px]"
            />
          </div>
        </div>

        <div className="w-[180px] h-[200px] rounded-xl  bg-[#2A5AB3] flex flex-col justify-center items-center ">
          <MdDoubleArrow className="text-white w-[42px] h-[34px]" />
          <p className="text-white text-[14px] font-bold ">Tümünü Gör</p>
        </div>
      </div>
      <div className="md:hidden flex flex-row items-center justify-center w-full gap-x-2">
        <p className="text-[#2A5AB3] text-[14px] font-bold">
          Daha fazla göster
        </p>
        <MdArrowForward className="text-[#2A5AB3] w-[24px] h-[18px]" />
      </div>
    </div>
  );
}
