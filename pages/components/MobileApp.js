import React from "react";

export default function MobileApp() {
  return (
    <div className="md:w-full w-11/12 md:h-[220px] h-[297px] bg-[#E2F2FA] md:mt-12 flex md:overflow-visible overflow-hidden pl-4 md:justify-between flex-row justify-center items-center md:items-center md:p-[80px] rounded-3xl ">
      <div className="flex flex-col gap-y-6 items-start w-5/12 pl-2 md:w-7/12">
        <p className="text-[#3F536C] text-[16px] md:text-[20px] font-semibold ">
          TatilBudur uygulamasını indirin, aklınızdaki tatili hemen planlayın!
        </p>
        <div className="md:flex md:flex-row md:gap-x-4 hidden">
          <img
            src="/images/appstore.svg"
            alt="App-store-pic"
            className="w-[165px] h-[50px] rounded-xl object-cover border-[1px] "
          />
          <img
            src="/images/playstore.png"
            alt="App-store-pic"
            className="w-[165px] h-[50px] rounded-xl object-cover"
          />
          <img
            src="/images/huawei-app.png"
            alt="App-store-pic"
            className="w-[165px] h-[50px] rounded-xl"
          />
        </div>
        <div className="flex flex-row gap-x-4 md:hidden ">
          <img
            src="/images/apple.svg"
            alt="App-store-pic"
            className="w-auto h-auto  object-cover  "
          />
          <img
            src="/images/googleplay.png"
            alt="App-store-pic"
            className="w-auto h-auto  object-cover  "
          />
          <img
            src="/images/huawei.png"
            alt="App-store-pic"
            className="w-auto h-auto  object-cover  "
          />
        </div>
        <button className="md:hidden w-[154px] h-[40px] rounded-3xl text-center text-[14px] text-white bg-[#2A5AB3] font-extrabold">
          İndir
        </button>
      </div>
      <div className="relative top-2 left-[25px] md:hidden scale-75">
        <img
          src="/images/app@2x.png"
          alt="App-store-pic"
          className="object-cover "
        />
      </div>
      <div className="md:flex md:flex-col hidden ">
        <img
          src="/images/qr.svg"
          alt="Mobile-app-qr"
          className="w-[140px] h-[140px] rounded-xl object-cover border-[#3F536C14] border-[0.5px] p-2"
        />
        <p className="text-[#3F536C] text-[12px] text-center">
          {" "}
          İndirmek için <br />
          QR Kodu Tarayın
        </p>
      </div>
      <div className="md:relative md:block md:bottom-[10px] md:w-[182px] md:h-[241px] md:mr-8 hidden">
        <img
          src="/images/app.png"
          alt="Mobile-app"
          className=" object-cover "
        />
      </div>
    </div>
  );
}
