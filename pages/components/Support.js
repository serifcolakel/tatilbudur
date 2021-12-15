import React from "react";

export default function Support() {
  return (
    <div className="md:w-full w-10/12 md:h-[122px] flex flex-col md:flex-row justify-center mx-auto md:justify-center md:gap-x-20 items-center pt-8 gap-y-8">
      <div className="flex flex-row gap-x-10 md:gap-x-4 pl-2">
        <div>
          <img src="/images/milligurur.png" alt="destekci-milli-spor-img" />
        </div>
        <div className="flex flex-col justify-center items-start w-[162px]">
          <p className="text-[#3F536C] text-[16px] font-[600] ">
            #milligururbudur
          </p>
          <p className="text-[#3F536C] text-[14px] font-[500]">
            Tatilbudur.com <br /> Basketbol Milli Takımlar
            <br /> ANA SPONSORU
          </p>
        </div>
      </div>
      <div className="flex flex-row gap-x-8 md:gap-x-0">
        <div>
          <img
            src="/images/iş.png"
            alt="destekci-is-bankasi-img"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center items-start w-[162px]">
          <p className="text-[#3F536C] text-[16px] font-[600] ">
            Tatilbudur.com bir{" "}
          </p>
          <img
            src="/images/işgirişim.png"
            alt="destekci-is-bankasi-sermaye"
            className="object-cover"
          />
          <p className="text-[#3F536C] text-[16px] font-[600]">ortaklığıdır.</p>
        </div>
      </div>
    </div>
  );
}
