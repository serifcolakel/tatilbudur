import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

export default function Header() {
  const [value, setValue] = useState("1");
  useEffect(() => {
    console.log("value", value);
  }, [value]);
  return (
    <div className="gap-y-10 ">
      <div className="flex flex-col items-center justify-center gap-y-8 ">
        <div className="flex md:flex-row flex-col items-center justify-between w-full md:w-[1440px] md:border-r-2 md:border-l-2 border-b-2 md:pt-5 md:pl-6 md:pr-6 md:pb-4">
          <div className="md:w-auto w-full ">
            <div className="hidden md:flex">
              <Image
                src="/images/logo.svg"
                alt="Picture of the author"
                width={218}
                height={43}
              />
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
            <button
              type="button"
              className="flex flex-row items-center gap-x-3 font-bold text-[#3F536C] hover:scale-125"
            >
              Otel
              <img
                src="/images/Icon awesome-angle-down-1.svg"
                className="md:pt-1"
              />
            </button>
            <button
              type="button"
              className="flex flex-row items-center gap-x-3 font-bold text-[#3F536C] hover:scale-125"
            >
              Tur
              <img
                src="/images/Icon awesome-angle-down-1.svg"
                className="pt-1"
              />
            </button>
            <button
              type="button"
              className="flex flex-row font-bold items-center gap-x-3 text-[#3F536C] hover:scale-125"
            >
              Kampanyalar
              <img
                src="/images/Icon awesome-angle-down-1.svg"
                className="pt-1"
              />
            </button>
          </div>
          <div className="hidden md:flex md:flex-row md:items-center gap-x-4 pr-4 ">
            <button className="flex w-[150px] h-[30px] text-[12px]  text-center text-[#3f536c] font-semibold flex-row items-center gap-x-4 border border-[#6F7E8F4D] rounded-full p-2">
              <img className="" src="/images/Icon feather-headphones.svg" />0
              850 333 3 33
            </button>
            <div>
              <button className="flex flex-row  items-center justify-center w-[106px] h-[30px] text-[12px] text-[#3f536c] font-semibold  gap-x-4 border border-[#6F7E8F4D] rounded-full p-2">
                Giriş yapın
              </button>
            </div>
          </div>
          <div className="md:hidden flex flex-row items-center justify-between mx-auto p-8 w-full h-[70px]">
            <div className="flex flex-row items-center gap-x-3 text-[10px] font-extrabold text-[#3F536C]">
              <img src="/images/menu.svg" alt="menu-logo" />
              <p>MENU</p>
            </div>
            <div className="pr-8">
              <img src="/images/Group 849.svg" />
            </div>
            <div>
              <img src="/images/user.svg" />
            </div>
          </div>
        </div>
        <div className="w-full  justify-center md:w-[1180px] md:h-[176px] md:border-2 text-[14px] rounded-xl md:pl-10 pl-4 pr-4">
          <Tabs value={value}>
            <TabList className="flex flex-row gap-x-8 pb-4">
              <Tab
                id="1"
                className={
                  value === "1"
                    ? "flex flex-row gap-x-2 justify-center items-center border-b-2 border-b-[#115BB9]  hover:cursor-pointer md:w-auto w-1/3 md:pb-2 md:pt-4 pb-2"
                    : "flex flex-row gap-x-2 justify-center items-center border-b-2 border-b-[#ffffff] hover:cursor-pointer md:w-auto w-1/3 md:pb-2 md:pt-4 pb-2"
                }
                onClick={() => {
                  setValue("1");
                }}
              >
                <img
                  src="/images/Group 716.svg"
                  alt="otel-icon"
                  className="w-3 h-5"
                />
                Otel Ara
              </Tab>
              <Tab
                id="2"
                className={
                  value === "2"
                    ? "flex flex-row gap-x-2 justify-center items-center border-b-2 border-b-[#115BB9]  hover:cursor-pointer md:w-auto  w-1/3 md:pb-2 md:pt-4 pb-2"
                    : "flex flex-row gap-x-2 justify-center items-center border-b-2 border-b-[#ffffff] hover:cursor-pointer md:w-auto w-1/3 md:pb-2 md:pt-4 pb-2"
                }
                onClick={() => {
                  setValue("2");
                }}
              >
                <img
                  src="/images/ucak.svg"
                  alt="otel-icon"
                  className="w-3 h-5"
                />
                Uçuş Ara
              </Tab>
              <Tab
                id="2"
                className={
                  value === "3"
                    ? "flex flex-row gap-x-2 justify-center items-center border-b-2 border-b-[#115BB9]  hover:cursor-pointer md:w-auto w-1/3 md:pb-2 md:pt-4 pb-2"
                    : "flex flex-row gap-x-2 justify-center items-center border-b-2 border-b-[#ffffff] hover:cursor-pointer md:w-auto w-1/3 md:pb-2 md:pt-4 pb-2"
                }
                onClick={() => {
                  setValue("3");
                }}
              >
                <img
                  src="/images/Group 724.svg"
                  alt="otel-icon"
                  className="w-3 h-5"
                />{" "}
                Tur Ara
              </Tab>
            </TabList>

            <TabPanel id="1" value="1">
              <div className="flex flex-col md:flex-row gap-x-2 gap-y-4 md:pt-2 w-full justify-between">
                <label
                  htmlFor="phone"
                  className="flex group relative md:w-[400px] w-full cursor-pointer focus:stroke-red-700"
                >
                  <input
                    inputMode="numeric"
                    type="tel"
                    maxLength="25"
                    autoComplete="cc-number"
                    name="phone"
                    id="phone"
                    required
                    className="md:w-[400px] w-full focus:stroke-red-700 h-[50px] px-12 border-[0.5px] border-gray-200 focus:fill-red-700 focus:border-[#2A5AB3] rounded transition-colors group-hover:border-primary-brand-color outline-none peer text-sm pt-2 focus:text-[#2A5AB3]"
                  />
                  <div className="absolute w-full inset-y-0 left-0 flex items-center px-2 color hover pl-4  focus:stroke-red-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16.052"
                      height="20"
                      viewBox="0 0 16.052 20"
                      className="focus:stroke-red-700"
                    >
                      <path
                        id="Path_40"
                        data-name="Path 40"
                        d="M24.776,26.97c-.853,0-3.128-2.269-4.442-3.908C18.7,21.024,16.75,17.9,16.75,14.614A7.851,7.851,0,0,1,24.776,6.97,7.851,7.851,0,0,1,32.8,14.614c0,3.271-1.981,6.4-3.644,8.451C27.836,24.7,25.529,26.97,24.776,26.97Zm0-18.851a6.67,6.67,0,0,0-6.819,6.494c0,5.094,5.5,10.388,6.8,11.15,1.216-.792,6.84-6,6.84-11.15A6.67,6.67,0,0,0,24.776,8.119Zm0,9.818a3.414,3.414,0,0,1-3.49-3.324,3.494,3.494,0,0,1,6.98,0A3.414,3.414,0,0,1,24.776,17.938Zm0-5.5a2.177,2.177,0,1,0,2.283,2.174A2.233,2.233,0,0,0,24.776,12.439Z"
                        transform="translate(-16.75 -6.97)"
                        fill="#6f7e90"
                      />
                    </svg>
                  </div>
                  <span className="absolute top-0 left-0 h-full px-12 flex items-center text-sm text-gray-500 transition-all peer-focus:h-5 peer-focus:text-primary-brand-color peer-valid:h-5 peer-valid:text-primary-brand-color peer-valid:text-xs">
                    Otel, Şehir, Bölge veya Tema Adı
                  </span>
                </label>

                <label
                  htmlFor="text"
                  className="flex group relative w-full md:w-[400px] cursor-pointer focus:fill-red-700 focus:stroke-red-700"
                >
                  <input
                    inputMode="numeric"
                    type="text"
                    maxLength="25"
                    autoComplete="cc-number"
                    name="calendar"
                    id="calendar"
                    required
                    className="w-full md:w-[280px]  focus:stroke-red-700 h-[50px] px-12 border-[0.5px] border-gray-200 focus:fill-red-700 focus:border-[#2A5AB3] rounded transition-colors group-hover:border-primary-brand-color outline-none peer text-sm pt-2 focus:text-[#2A5AB3]"
                  />
                  <div className="absolute inset-y-0 left-0 flex items-center px-2 color hover pl-4 focus:fill-red-700  focus:stroke-red-700">
                    <svg
                      id="Group_1279"
                      data-name="Group 1279"
                      xmlns="http://www.w3.org/2000/svg"
                      width="22.054"
                      height="22.208"
                      viewBox="0 0 22.054 22.208"
                    >
                      <path
                        id="Path_32"
                        data-name="Path 32"
                        d="M11.863,17.3H2.4a1.127,1.127,0,0,1-1.123-1.123v-7.9H16.948v3.742a6.219,6.219,0,0,1,.638-.044,6.219,6.219,0,0,1,.638.044V4.864a2.4,2.4,0,0,0-2.4-2.4H14.7V.638a.638.638,0,0,0-1.277,0V2.465H9.75V.638a.638.638,0,0,0-1.277,0V2.465H4.8V.638a.638.638,0,1,0-1.277,0V2.465H2.4A2.4,2.4,0,0,0,0,4.864V16.177a2.4,2.4,0,0,0,2.4,2.4h9.508a5.151,5.151,0,0,1-.066-.836A2.806,2.806,0,0,1,11.863,17.3ZM1.277,4.864A1.127,1.127,0,0,1,2.4,3.742H3.522v.88a.638.638,0,1,0,1.277,0v-.88H8.474v.88a.638.638,0,0,0,1.277,0v-.88h3.676v.88a.638.638,0,1,0,1.277,0v-.88h1.123a1.127,1.127,0,0,1,1.123,1.123V7H1.277Z"
                        fill="#6f7e90"
                      />
                      <path
                        id="Path_33"
                        data-name="Path 33"
                        d="M14.345,41.9a2.223,2.223,0,1,0,2.245,2.223A2.25,2.25,0,0,0,14.345,41.9Zm0,3.191a.958.958,0,0,1-.946-.968.947.947,0,1,1,1.893,0A.958.958,0,0,1,14.345,45.091Z"
                        transform="translate(-9.437 -32.678)"
                        fill="#6f7e90"
                      />
                      <path
                        id="Path_34"
                        data-name="Path 34"
                        d="M17.553,66.5H15.638a.638.638,0,0,0,0,1.277h1.915a.638.638,0,0,0,0-1.277Z"
                        transform="translate(-11.698 -51.863)"
                        fill="#6f7e90"
                      />
                      <path
                        id="Path_35"
                        data-name="Path 35"
                        d="M38.153,66.5H36.238a.638.638,0,0,0,0,1.277h1.915a.638.638,0,1,0,0-1.277Z"
                        transform="translate(-27.764 -51.863)"
                        fill="#6f7e90"
                      />
                      <path
                        id="Path_36"
                        data-name="Path 36"
                        d="M38.153,49.2H36.238a.638.638,0,0,0,0,1.277h1.915a.638.638,0,1,0,0-1.277Z"
                        transform="translate(-27.764 -38.371)"
                        fill="#6f7e90"
                      />
                      <path
                        id="Path_37"
                        data-name="Path 37"
                        d="M58.675,49.2H56.738a.638.638,0,0,0,0,1.277h1.915a.639.639,0,0,0,.638-.638A.62.62,0,0,0,58.675,49.2Z"
                        transform="translate(-43.752 -38.371)"
                        fill="#6f7e90"
                      />
                      <path
                        id="Path_38"
                        data-name="Path 38"
                        d="M64.068,60.3a4.468,4.468,0,1,0,4.468,4.468A4.471,4.471,0,0,0,64.068,60.3Zm0,7.659a3.191,3.191,0,1,1,3.191-3.191A3.194,3.194,0,0,1,64.068,67.959Z"
                        transform="translate(-46.482 -47.028)"
                        fill="#6f7e90"
                      />
                      <path
                        id="Path_39"
                        data-name="Path 39"
                        d="M73.252,74.046,71.8,75.5l-.44-.44a.638.638,0,0,0-.9.9l.88.88a.612.612,0,0,0,.462.176.71.71,0,0,0,.462-.176l1.915-1.915a.651.651,0,0,0,0-.9A.7.7,0,0,0,73.252,74.046Z"
                        transform="translate(-54.807 -57.605)"
                        fill="#6f7e90"
                      />
                    </svg>
                  </div>
                  <span className="absolute top-0 left-0 h-full px-12 flex items-center text-sm text-gray-500 transition-all peer-focus:h-5 peer-focus:text-primary-brand-color peer-valid:h-5 peer-valid:text-primary-brand-color peer-valid:text-xs">
                    Konaklama Tarihi
                  </span>
                </label>

                <label
                  htmlFor="text"
                  className="flex  relative w-full md:w-[400px] cursor-pointer focus:fill-red-700 focus:stroke-red-700"
                >
                  <input
                    inputMode="numeric"
                    type="text"
                    maxLength="25"
                    autoComplete="cc-number"
                    name="calendar"
                    id="calendar"
                    required
                    className="w-full md:w-[220px]  focus:stroke-red-700 h-[50px] px-12 border-[0.5px] border-gray-200 focus:fill-red-700 focus:border-[#2A5AB3] rounded transition-colors group-hover:border-primary-brand-color outline-none peer text-sm pt-2 focus:text-[#2A5AB3]"
                  />
                  <div className="absolute inset-y-0 left-0 flex items-center px-2 color hover pl-4 focus:fill-red-700  focus:stroke-red-700">
                    <img src="/images/Group 687.svg" />
                  </div>
                  <span className="absolute top-0 left-0 h-full px-12 flex items-center text-sm text-gray-500 transition-all peer-focus:h-5 peer-focus:text-primary-brand-color peer-valid:h-5 peer-valid:text-primary-brand-color peer-valid:text-xs">
                    Kişi Sayısı
                  </span>
                </label>
                <div>
                  <button className="w-full md:w-[180px] h-[50px] bg-[#2A5AB3] text-white rounded-3xl mx-auto hover:scale-110">
                    Otel Ara
                  </button>
                </div>
              </div>
            </TabPanel>
            <TabPanel id="2" value="2">
              <div className="flex flex-col md:flex-row gap-x-2 gap-y-4 md:pt-2 w-full just ">
                <label
                  htmlFor="phone"
                  className="flex group relative md:w-[400px] w-full cursor-pointer focus:stroke-red-700"
                >
                  <input
                    inputMode="numeric"
                    type="tel"
                    maxLength="25"
                    autoComplete="cc-number"
                    name="phone"
                    id="phone"
                    required
                    className="md:w-[400px] w-full focus:stroke-red-700 h-[50px] px-12 border-[0.5px] border-gray-200 focus:fill-red-700 focus:border-[#2A5AB3] rounded transition-colors group-hover:border-primary-brand-color outline-none peer text-sm pt-2 focus:text-[#2A5AB3]"
                  />
                  <div className="absolute w-full inset-y-0 left-0 flex items-center px-2 color hover pl-4  focus:stroke-red-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16.052"
                      height="20"
                      viewBox="0 0 16.052 20"
                      className="focus:stroke-red-700"
                    >
                      <path
                        id="Path_40"
                        data-name="Path 40"
                        d="M24.776,26.97c-.853,0-3.128-2.269-4.442-3.908C18.7,21.024,16.75,17.9,16.75,14.614A7.851,7.851,0,0,1,24.776,6.97,7.851,7.851,0,0,1,32.8,14.614c0,3.271-1.981,6.4-3.644,8.451C27.836,24.7,25.529,26.97,24.776,26.97Zm0-18.851a6.67,6.67,0,0,0-6.819,6.494c0,5.094,5.5,10.388,6.8,11.15,1.216-.792,6.84-6,6.84-11.15A6.67,6.67,0,0,0,24.776,8.119Zm0,9.818a3.414,3.414,0,0,1-3.49-3.324,3.494,3.494,0,0,1,6.98,0A3.414,3.414,0,0,1,24.776,17.938Zm0-5.5a2.177,2.177,0,1,0,2.283,2.174A2.233,2.233,0,0,0,24.776,12.439Z"
                        transform="translate(-16.75 -6.97)"
                        fill="#6f7e90"
                      />
                    </svg>
                  </div>
                  <span className="absolute top-0 left-0 h-full px-12 flex items-center text-sm text-gray-500 transition-all peer-focus:h-5 peer-focus:text-primary-brand-color peer-valid:h-5 peer-valid:text-primary-brand-color peer-valid:text-xs">
                    Uçuş Ara
                  </span>
                </label>

                <label
                  htmlFor="text"
                  className="flex group relative w-full md:w-[400px] cursor-pointer focus:fill-red-700 focus:stroke-red-700"
                >
                  <input
                    inputMode="numeric"
                    type="text"
                    maxLength="25"
                    autoComplete="cc-number"
                    name="calendar"
                    id="calendar"
                    required
                    className="w-full md:w-[280px]  focus:stroke-red-700 h-[50px] px-12 border-[0.5px] border-gray-200 focus:fill-red-700 focus:border-[#2A5AB3] rounded transition-colors group-hover:border-primary-brand-color outline-none peer text-sm pt-2 focus:text-[#2A5AB3]"
                  />
                  <div className="absolute inset-y-0 left-0 flex items-center px-2 color hover pl-4 focus:fill-red-700  focus:stroke-red-700">
                    <svg
                      id="Group_1279"
                      data-name="Group 1279"
                      xmlns="http://www.w3.org/2000/svg"
                      width="22.054"
                      height="22.208"
                      viewBox="0 0 22.054 22.208"
                    >
                      <path
                        id="Path_32"
                        data-name="Path 32"
                        d="M11.863,17.3H2.4a1.127,1.127,0,0,1-1.123-1.123v-7.9H16.948v3.742a6.219,6.219,0,0,1,.638-.044,6.219,6.219,0,0,1,.638.044V4.864a2.4,2.4,0,0,0-2.4-2.4H14.7V.638a.638.638,0,0,0-1.277,0V2.465H9.75V.638a.638.638,0,0,0-1.277,0V2.465H4.8V.638a.638.638,0,1,0-1.277,0V2.465H2.4A2.4,2.4,0,0,0,0,4.864V16.177a2.4,2.4,0,0,0,2.4,2.4h9.508a5.151,5.151,0,0,1-.066-.836A2.806,2.806,0,0,1,11.863,17.3ZM1.277,4.864A1.127,1.127,0,0,1,2.4,3.742H3.522v.88a.638.638,0,1,0,1.277,0v-.88H8.474v.88a.638.638,0,0,0,1.277,0v-.88h3.676v.88a.638.638,0,1,0,1.277,0v-.88h1.123a1.127,1.127,0,0,1,1.123,1.123V7H1.277Z"
                        fill="#6f7e90"
                      />
                      <path
                        id="Path_33"
                        data-name="Path 33"
                        d="M14.345,41.9a2.223,2.223,0,1,0,2.245,2.223A2.25,2.25,0,0,0,14.345,41.9Zm0,3.191a.958.958,0,0,1-.946-.968.947.947,0,1,1,1.893,0A.958.958,0,0,1,14.345,45.091Z"
                        transform="translate(-9.437 -32.678)"
                        fill="#6f7e90"
                      />
                      <path
                        id="Path_34"
                        data-name="Path 34"
                        d="M17.553,66.5H15.638a.638.638,0,0,0,0,1.277h1.915a.638.638,0,0,0,0-1.277Z"
                        transform="translate(-11.698 -51.863)"
                        fill="#6f7e90"
                      />
                      <path
                        id="Path_35"
                        data-name="Path 35"
                        d="M38.153,66.5H36.238a.638.638,0,0,0,0,1.277h1.915a.638.638,0,1,0,0-1.277Z"
                        transform="translate(-27.764 -51.863)"
                        fill="#6f7e90"
                      />
                      <path
                        id="Path_36"
                        data-name="Path 36"
                        d="M38.153,49.2H36.238a.638.638,0,0,0,0,1.277h1.915a.638.638,0,1,0,0-1.277Z"
                        transform="translate(-27.764 -38.371)"
                        fill="#6f7e90"
                      />
                      <path
                        id="Path_37"
                        data-name="Path 37"
                        d="M58.675,49.2H56.738a.638.638,0,0,0,0,1.277h1.915a.639.639,0,0,0,.638-.638A.62.62,0,0,0,58.675,49.2Z"
                        transform="translate(-43.752 -38.371)"
                        fill="#6f7e90"
                      />
                      <path
                        id="Path_38"
                        data-name="Path 38"
                        d="M64.068,60.3a4.468,4.468,0,1,0,4.468,4.468A4.471,4.471,0,0,0,64.068,60.3Zm0,7.659a3.191,3.191,0,1,1,3.191-3.191A3.194,3.194,0,0,1,64.068,67.959Z"
                        transform="translate(-46.482 -47.028)"
                        fill="#6f7e90"
                      />
                      <path
                        id="Path_39"
                        data-name="Path 39"
                        d="M73.252,74.046,71.8,75.5l-.44-.44a.638.638,0,0,0-.9.9l.88.88a.612.612,0,0,0,.462.176.71.71,0,0,0,.462-.176l1.915-1.915a.651.651,0,0,0,0-.9A.7.7,0,0,0,73.252,74.046Z"
                        transform="translate(-54.807 -57.605)"
                        fill="#6f7e90"
                      />
                    </svg>
                  </div>
                  <span className="absolute top-0 left-0 h-full px-12 flex items-center text-sm text-gray-500 transition-all peer-focus:h-5 peer-focus:text-primary-brand-color peer-valid:h-5 peer-valid:text-primary-brand-color peer-valid:text-xs">
                    Gidiş Tarihi
                  </span>
                </label>

                <label
                  htmlFor="text"
                  className="flex  relative w-full md:w-[400px] cursor-pointer focus:fill-red-700 focus:stroke-red-700"
                >
                  <input
                    inputMode="numeric"
                    type="text"
                    maxLength="25"
                    autoComplete="cc-number"
                    name="calendar"
                    id="calendar"
                    required
                    className="w-full md:w-[220px]  focus:stroke-red-700 h-[50px] px-12 border-[0.5px] border-gray-200 focus:fill-red-700 focus:border-[#2A5AB3] rounded transition-colors group-hover:border-primary-brand-color outline-none peer text-sm pt-2 focus:text-[#2A5AB3]"
                  />
                  <div className="absolute inset-y-0 left-0 flex items-center px-2 color hover pl-4 focus:fill-red-700  focus:stroke-red-700">
                    <img src="/images/Group 687.svg" />
                  </div>
                  <span className="absolute top-0 left-0 h-full px-12 flex items-center text-sm text-gray-500 transition-all peer-focus:h-5 peer-focus:text-primary-brand-color peer-valid:h-5 peer-valid:text-primary-brand-color peer-valid:text-xs">
                    Yolcu Sayısı
                  </span>
                </label>
                <div>
                  <button className="w-full md:w-[180px] h-[50px] bg-[#2A5AB3] text-white rounded-3xl mx-auto hover:scale-110 ">
                    Uçuş Ara
                  </button>
                </div>
              </div>
            </TabPanel>
            <TabPanel id="2" value="2">
              <div className="flex flex-col md:flex-row gap-x-2 gap-y-4 md:pt-2 w-full justify-between">
                <label
                  htmlFor="phone"
                  className="flex group relative md:w-[400px] w-full cursor-pointer focus:stroke-red-700"
                >
                  <input
                    inputMode="numeric"
                    type="tel"
                    maxLength="25"
                    autoComplete="cc-number"
                    name="phone"
                    id="phone"
                    required
                    className="md:w-[400px] w-full focus:stroke-red-700 h-[50px] px-12 border-[0.5px] border-gray-200 focus:fill-red-700 focus:border-[#2A5AB3] rounded transition-colors group-hover:border-primary-brand-color outline-none peer text-sm pt-2 focus:text-[#2A5AB3]"
                  />
                  <div className="absolute w-full inset-y-0 left-0 flex items-center px-2 color hover pl-4  focus:stroke-red-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16.052"
                      height="20"
                      viewBox="0 0 16.052 20"
                      className="focus:stroke-red-700"
                    >
                      <path
                        id="Path_40"
                        data-name="Path 40"
                        d="M24.776,26.97c-.853,0-3.128-2.269-4.442-3.908C18.7,21.024,16.75,17.9,16.75,14.614A7.851,7.851,0,0,1,24.776,6.97,7.851,7.851,0,0,1,32.8,14.614c0,3.271-1.981,6.4-3.644,8.451C27.836,24.7,25.529,26.97,24.776,26.97Zm0-18.851a6.67,6.67,0,0,0-6.819,6.494c0,5.094,5.5,10.388,6.8,11.15,1.216-.792,6.84-6,6.84-11.15A6.67,6.67,0,0,0,24.776,8.119Zm0,9.818a3.414,3.414,0,0,1-3.49-3.324,3.494,3.494,0,0,1,6.98,0A3.414,3.414,0,0,1,24.776,17.938Zm0-5.5a2.177,2.177,0,1,0,2.283,2.174A2.233,2.233,0,0,0,24.776,12.439Z"
                        transform="translate(-16.75 -6.97)"
                        fill="#6f7e90"
                      />
                    </svg>
                  </div>
                  <span className="absolute top-0 left-0 h-full px-12 flex items-center text-sm text-gray-500 transition-all peer-focus:h-5 peer-focus:text-primary-brand-color peer-valid:h-5 peer-valid:text-primary-brand-color peer-valid:text-xs">
                    Tur Adı veya Bölge Girin
                  </span>
                </label>

                <label
                  htmlFor="text"
                  className="flex group relative w-full md:w-[400px] cursor-pointer focus:fill-red-700 focus:stroke-red-700"
                >
                  <input
                    inputMode="numeric"
                    type="text"
                    maxLength="25"
                    autoComplete="cc-number"
                    name="calendar"
                    id="calendar"
                    required
                    className="w-full md:w-[280px]  focus:stroke-red-700 h-[50px] px-12 border-[0.5px] border-gray-200 focus:fill-red-700 focus:border-[#2A5AB3] rounded transition-colors group-hover:border-primary-brand-color outline-none peer text-sm pt-2 focus:text-[#2A5AB3]"
                  />
                  <div className="absolute inset-y-0 left-0 flex items-center px-2 color hover pl-4 focus:fill-red-700  focus:stroke-red-700">
                    <svg
                      id="Group_1279"
                      data-name="Group 1279"
                      xmlns="http://www.w3.org/2000/svg"
                      width="22.054"
                      height="22.208"
                      viewBox="0 0 22.054 22.208"
                    >
                      <path
                        id="Path_32"
                        data-name="Path 32"
                        d="M11.863,17.3H2.4a1.127,1.127,0,0,1-1.123-1.123v-7.9H16.948v3.742a6.219,6.219,0,0,1,.638-.044,6.219,6.219,0,0,1,.638.044V4.864a2.4,2.4,0,0,0-2.4-2.4H14.7V.638a.638.638,0,0,0-1.277,0V2.465H9.75V.638a.638.638,0,0,0-1.277,0V2.465H4.8V.638a.638.638,0,1,0-1.277,0V2.465H2.4A2.4,2.4,0,0,0,0,4.864V16.177a2.4,2.4,0,0,0,2.4,2.4h9.508a5.151,5.151,0,0,1-.066-.836A2.806,2.806,0,0,1,11.863,17.3ZM1.277,4.864A1.127,1.127,0,0,1,2.4,3.742H3.522v.88a.638.638,0,1,0,1.277,0v-.88H8.474v.88a.638.638,0,0,0,1.277,0v-.88h3.676v.88a.638.638,0,1,0,1.277,0v-.88h1.123a1.127,1.127,0,0,1,1.123,1.123V7H1.277Z"
                        fill="#6f7e90"
                      />
                      <path
                        id="Path_33"
                        data-name="Path 33"
                        d="M14.345,41.9a2.223,2.223,0,1,0,2.245,2.223A2.25,2.25,0,0,0,14.345,41.9Zm0,3.191a.958.958,0,0,1-.946-.968.947.947,0,1,1,1.893,0A.958.958,0,0,1,14.345,45.091Z"
                        transform="translate(-9.437 -32.678)"
                        fill="#6f7e90"
                      />
                      <path
                        id="Path_34"
                        data-name="Path 34"
                        d="M17.553,66.5H15.638a.638.638,0,0,0,0,1.277h1.915a.638.638,0,0,0,0-1.277Z"
                        transform="translate(-11.698 -51.863)"
                        fill="#6f7e90"
                      />
                      <path
                        id="Path_35"
                        data-name="Path 35"
                        d="M38.153,66.5H36.238a.638.638,0,0,0,0,1.277h1.915a.638.638,0,1,0,0-1.277Z"
                        transform="translate(-27.764 -51.863)"
                        fill="#6f7e90"
                      />
                      <path
                        id="Path_36"
                        data-name="Path 36"
                        d="M38.153,49.2H36.238a.638.638,0,0,0,0,1.277h1.915a.638.638,0,1,0,0-1.277Z"
                        transform="translate(-27.764 -38.371)"
                        fill="#6f7e90"
                      />
                      <path
                        id="Path_37"
                        data-name="Path 37"
                        d="M58.675,49.2H56.738a.638.638,0,0,0,0,1.277h1.915a.639.639,0,0,0,.638-.638A.62.62,0,0,0,58.675,49.2Z"
                        transform="translate(-43.752 -38.371)"
                        fill="#6f7e90"
                      />
                      <path
                        id="Path_38"
                        data-name="Path 38"
                        d="M64.068,60.3a4.468,4.468,0,1,0,4.468,4.468A4.471,4.471,0,0,0,64.068,60.3Zm0,7.659a3.191,3.191,0,1,1,3.191-3.191A3.194,3.194,0,0,1,64.068,67.959Z"
                        transform="translate(-46.482 -47.028)"
                        fill="#6f7e90"
                      />
                      <path
                        id="Path_39"
                        data-name="Path 39"
                        d="M73.252,74.046,71.8,75.5l-.44-.44a.638.638,0,0,0-.9.9l.88.88a.612.612,0,0,0,.462.176.71.71,0,0,0,.462-.176l1.915-1.915a.651.651,0,0,0,0-.9A.7.7,0,0,0,73.252,74.046Z"
                        transform="translate(-54.807 -57.605)"
                        fill="#6f7e90"
                      />
                    </svg>
                  </div>
                  <span className="absolute top-0 left-0 h-full px-12 flex items-center text-sm text-gray-500 transition-all peer-focus:h-5 peer-focus:text-primary-brand-color peer-valid:h-5 peer-valid:text-primary-brand-color peer-valid:text-xs">
                    Gitmek İstediğiniz Dönem
                  </span>
                </label>

                <label
                  htmlFor="text"
                  className="flex  relative w-full md:w-[400px] cursor-pointer focus:fill-red-700 focus:stroke-red-700"
                >
                  <input
                    inputMode="numeric"
                    type="text"
                    maxLength="25"
                    autoComplete="cc-number"
                    name="calendar"
                    id="calendar"
                    required
                    className="w-full md:w-[220px]  focus:stroke-red-700 h-[50px] px-12 border-[0.5px] border-gray-200 focus:fill-red-700 focus:border-[#2A5AB3] rounded transition-colors group-hover:border-primary-brand-color outline-none peer text-sm pt-2 focus:text-[#2A5AB3]"
                  />
                  <div className="absolute inset-y-0 left-0 flex items-center px-2 color hover pl-4 focus:fill-red-700  focus:stroke-red-700">
                    <img src="/images/Group 687.svg" />
                  </div>
                  <span className="absolute top-0 left-0 h-full px-12 flex items-center text-sm text-gray-500 transition-all peer-focus:h-5 peer-focus:text-primary-brand-color peer-valid:h-5 peer-valid:text-primary-brand-color peer-valid:text-xs">
                    Kişi Sayısı
                  </span>
                </label>

                <div>
                  <button className="w-full md:w-[180px] h-[50px] bg-[#2A5AB3] text-white rounded-3xl mx-auto hover:scale-110 ">
                    Tur Ara
                  </button>
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </div>
        <div className="flex flex-row items-center justify-center md:hidden w-full border-t-2 pt-8">
          <div>
            <a
              className="flex flex-col items-center w-[72px] gap-y-2"
              href="/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/images/Scroll Group 38.png"
                alt="otels-item"
                className="w-15 h-15 object-cover rounded-full"
              />
              <p className="text-[#3F536C] text-[12px] opacity-70 text-center">
                Erken Rezervasyon
              </p>
            </a>
          </div>
          <div>
            <a
              className="flex flex-col items-center w-[72px] gap-y-2"
              href="/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/images/Image 41.png"
                alt="otels-item"
                className="w-15 h-15 object-cover rounded-full"
              />
              <p className="text-[#3F536C] text-[12px] opacity-70 text-center">
                Termal Oteller
              </p>
            </a>
          </div>
          <div>
            <a
              className="flex flex-col items-center w-[72px] gap-y-2"
              href="/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/images/Scroll Group 41.png"
                alt="otels-item"
                className="w-15 h-15 object-cover rounded-full"
              />
              <p className="text-[#3F536C] text-[12px] opacity-70 text-center">
                Kıbrıs Otelleri
              </p>
            </a>
          </div>
          <div>
            <a
              className="flex flex-col items-center w-[72px] gap-y-2"
              href="/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/images/Scroll Group 42.png"
                alt="otels-item"
                className="w-15 h-15 object-cover rounded-full"
              />
              <p className="text-[#3F536C] text-[12px] opacity-70 text-center">
                Kış <br /> Otelleri
              </p>
            </a>
          </div>
          <div>
            <a
              className="flex flex-col items-center w-[72px] gap-y-2"
              href="/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/images/Image 54.png"
                alt="otels-item"
                className="w-15 h-15 object-cover rounded-full"
              />
              <p className="text-[#3F536C] text-[12px] opacity-70 text-center">
                1+1 Gece Otelleri
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
