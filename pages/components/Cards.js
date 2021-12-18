import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import MobileChoseTour from "./MobileChoseTour";
export default function Cards() {
  const [value, setValue] = useState("1");
  return (
    <>
      <div className=" bg-[#F6F5F8] w-full mt-8 md:flex justify-center h-[570px] md:rounded-3xl md:mb-10">
        <div className="flex flex-col w-full pl-4 pr-4 md:pl-0 md:pr-0 md:w-[1180px]">
          <h2 className="text-[#3F536C] pt-[50px] text-2xl font-bold tracking-wide md:flex text-center md:items-start">
            Yazın ilk fırsatlarını kaçırma!
          </h2>
          <div className="md:hidden">
            <MobileChoseTour />
          </div>
          <Tabs value={value} className="hidden md:block ">
            <TabList className="flex flex-row justify-between">
              <div className="flex flex-row gap-x-8 pb-10">
                <Tab
                  id="1"
                  className={
                    value === "1"
                      ? "flex flex-row gap-x-2 border-b-2 border-b-[#115BB9]  hover:cursor-pointer p-3 text-[#3F536C] text-[14px] font-semibold"
                      : "flex flex-row gap-x-2 hover:cursor-pointer p-3 text-[#3F536C] text-[14px] opacity-70 font-medium "
                  }
                  onClick={() => {
                    setValue("1");
                  }}
                >
                  <p>Son Gezdiğiniz Oteller</p>
                </Tab>
                <Tab
                  id="2"
                  className={
                    value === "2"
                      ? "flex flex-row gap-x-2 border-b-2 border-b-[#115BB9]  hover:cursor-pointer p-3 text-[#3F536C] text-[14px] font-semibold"
                      : "flex flex-row gap-x-2 hover:cursor-pointer p-3 text-[#3F536C] text-[14px] opacity-70 font-medium "
                  }
                  onClick={() => {
                    setValue("2");
                  }}
                >
                  En Çok Aranan Oteller
                </Tab>
                <Tab
                  id="2"
                  className={
                    value === "3"
                      ? "flex flex-row gap-x-2 border-b-2 border-b-[#115BB9]  hover:cursor-pointer p-3 text-[#3F536C] text-[14px] font-semibold"
                      : "flex flex-row gap-x-2 hover:cursor-pointer p-3 text-[#3F536C] text-[14px] opacity-70 font-medium "
                  }
                  onClick={() => {
                    setValue("3");
                  }}
                >
                  Tükenmek Üzere Olan Oteller
                </Tab>
              </div>
              <div className="flex items-start justify-center pt-3 pr-2">
                {" "}
                <p className="text-[#2A5AB3] text-[12px] font-semibold">
                  <a target="_blank" rel="noreferrer" href="/">
                    Daha fazla göster
                  </a>
                </p>
              </div>
            </TabList>

            <TabPanel id="1" value="1">
              <div className="grid md:grid-cols-4 grid-cols-1 gap-x-6">
                <div className="md:w-[280px] w-[267px] h-[305px]  md:h-[320px] border-[1px] border-[#3F536C] border-opacity-30 bg-white rounded-xl ">
                  <img src="/images/Mask Group 49.png" alt="firsat-items" />
                  <div className="p-4">
                    <p className="text-[#3F536C] text-[14px] opacity-90 font-bold mb-2">
                      Vikingen İnfinity Resort <br />& Spa Hotel
                    </p>
                    <p className="flex text-[10px] text-[#3F536C] opacity-90 font-bold bg-[#F6F5F8] w-[105px] h-[20px] justify-center items-center ">
                      Ultra Herşey Dahil
                    </p>
                    <div className="flex flex-row justify-between items-end w-full h-auto pt-4">
                      <p className="text-[12px] text-[#3F536C] opacity-30 font-bold ">
                        Antalya, Alanya
                      </p>
                      <div className="hidden md:block">
                        <p className="text-[20px]  text-right text-[#115BB9] font-semibold">
                          230<b className="text-[16px]">₺</b>
                          <span className="text-[10px] text-[#3F536C] opacity-50 font-bold">
                            'den
                          </span>
                        </p>
                        <p className="text-[10px] text-[#3F536C] opacity-50 font-bold">
                          {" "}
                          başlayan fiyatlarla
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="hidden relative md:left-44 md:bottom-[310px] bottom-[30px]  z-50 md:flex flex-row pr-[4px]">
                    <p className="text-white text-[10px] bg-[#115BB9] p-[4px] rounded-l-lg font-extrabold">
                      9/10
                    </p>
                    <p className="text-[#3F536C] text-[10px] bg-white p-[4px] rounded-r-lg font-extrabold">
                      ÇOK İYİ
                    </p>
                  </div>
                </div>
                <div className="md:[280px] md:h-[320px] w-[267px] h-[305px] border-[1px] border-[#3F536C] border-opacity-30 bg-white rounded-xl ">
                  <img
                    src="/images/test2.png"
                    alt="firsat-items"
                    className="w-full rounded-t-xl"
                  />

                  <div className="p-4">
                    <p className="text-[#3F536C] text-[14px] opacity-90 font-bold mb-2">
                      Le Meridien Bodrum <br />
                      Beach Resort
                    </p>
                    <p className="flex text-[10px] text-[#3F536C] opacity-90 font-bold bg-[#F6F5F8] w-[105px] h-[20px] justify-center items-center ">
                      Ultra Herşey Dahil
                    </p>
                    <div className="flex flex-row justify-between items-end w-full h-auto pt-4">
                      <p className="text-[12px] text-[#3F536C] opacity-30 font-bold ">
                        Antalya, Alanya
                      </p>
                      <div className="hidden md:block">
                        <p className="text-[20px]  text-right text-[#115BB9] font-semibold">
                          230<b className="text-[16px]">₺</b>
                          <span className="text-[10px] text-[#3F536C] opacity-50 font-bold">
                            'den
                          </span>
                        </p>
                        <p className="text-[10px] text-[#3F536C] opacity-50 font-bold">
                          {" "}
                          başlayan fiyatlarla
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="hidden relative md:left-44 md:bottom-[310px] bottom-[30px]  z-50 md:flex flex-row pr-[4px]">
                    <p className="text-white text-[10px] bg-[#115BB9] p-[4px] rounded-l-lg font-extrabold">
                      9/10
                    </p>
                    <p className="text-[#3F536C] text-[10px] bg-white p-[4px] rounded-r-lg font-extrabold">
                      ÇOK İYİ
                    </p>
                  </div>
                </div>
                <div className="md:[275px] md:h-[320px] w-[267px] h-[305px] border-[1px] border-[#3F536C] border-opacity-30 bg-white rounded-xl ">
                  <img src="/images/test1.png" alt="firsat-items" />

                  <div className="p-4">
                    <p className="text-[#3F536C] text-[14px] opacity-90 font-bold mb-2">
                      La Quinta by Wyndham
                      <br />
                      Bodrum
                    </p>
                    <p className="flex text-[10px] text-[#3F536C] opacity-90 font-bold bg-[#F6F5F8] w-[105px] h-[20px] justify-center items-center ">
                      Ultra Herşey Dahil
                    </p>
                    <div className="flex flex-row justify-between items-end w-full h-auto pt-4">
                      <p className="text-[12px] text-[#3F536C] opacity-30 font-bold ">
                        Antalya, Alanya
                      </p>
                      <div className="hidden md:block">
                        <p className="text-[20px]  text-right text-[#115BB9] font-semibold">
                          230<b className="text-[16px]">₺</b>
                          <span className="text-[10px] text-[#3F536C] opacity-50 font-bold">
                            'den
                          </span>
                        </p>
                        <p className="text-[10px] text-[#3F536C] opacity-50 font-bold">
                          {" "}
                          başlayan fiyatlarla
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="hidden relative md:left-44 md:bottom-[310px] bottom-[30px]  z-50 md:flex flex-row pr-[4px]">
                    <p className="text-white text-[10px] bg-[#115BB9] p-[4px] rounded-l-lg font-extrabold">
                      9/10
                    </p>
                    <p className="text-[#3F536C] text-[10px] bg-white p-[4px] rounded-r-lg font-extrabold">
                      ÇOK İYİ
                    </p>
                  </div>
                </div>
                <div className="md:[275px] md:h-[320px] w-[267px] h-[305px] border-[1px] border-[#3F536C] border-opacity-30 bg-white rounded-xl ">
                  <img src="/images/test.png" alt="firsat-items" />

                  <div className="p-4">
                    <p className="text-[#3F536C] text-[14px] opacity-90 font-bold mb-2">
                      La Quinta by Wyndham
                      <br />
                      Bodrum
                    </p>
                    <p className="flex text-[10px] text-[#3F536C] opacity-90 font-bold bg-[#F6F5F8] w-[105px] h-[20px] justify-center items-center ">
                      Ultra Herşey Dahil
                    </p>
                    <div className="hidden md:flex flex-row justify-between items-end w-full h-auto pt-4">
                      <p className="text-[12px] text-[#3F536C] opacity-30 font-bold ">
                        Antalya, Alanya
                      </p>
                      <div className="hidden md:block">
                        <p className="text-[20px]  text-right text-[#115BB9] font-semibold">
                          230<b className="text-[16px]">₺</b>
                          <span className="text-[10px] text-[#3F536C] opacity-50 font-bold">
                            'den
                          </span>
                        </p>
                        <p className="text-[10px] text-[#3F536C] opacity-50 font-bold">
                          {" "}
                          başlayan fiyatlarla
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="hidden relative md:left-44 md:bottom-[310px] bottom-[30px]  z-50 md:flex flex-row pr-[4px]">
                    <p className="text-white text-[10px] bg-[#115BB9] p-[4px] rounded-l-lg font-extrabold">
                      9/10
                    </p>
                    <p className="text-[#3F536C] text-[10px] bg-white p-[4px] rounded-r-lg font-extrabold">
                      ÇOK İYİ
                    </p>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel id="2" value="2">
              {" "}
              2
            </TabPanel>
            <TabPanel id="3" value="3">
              {" "}
              3
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </>
  );
}
