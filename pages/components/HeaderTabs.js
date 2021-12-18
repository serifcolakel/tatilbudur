import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import TabPanelFirst from "./TabPanel";
import TabPanelSec from "./TabPanelSec";
import DateRangePickerItem from "./DateRangePicker";

export default function HeaderTabs() {
  const [value, setValue] = useState("1");

  return (
    <div className="w-full  md:block justify-center md:w-[1180px] md:h-[176px] md:border-2 text-[14px] rounded-xl md:pl-10 pl-4 pr-4">
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
            <img src="/images/ucak.svg" alt="otel-icon" className="w-3 h-5" />
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
          <TabPanelFirst
            text1="Otel, Şehir, Bölge veya Tema Adı"
            text2="Konaklama Tarihi"
            text3="Kişi Sayısı"
            button1="Otel Ara"
          />
          <TabPanelSec />
        </TabPanel>
        <TabPanel id="2" value="2">
          <div className="flex flex-col md:flex-row gap-x-2 gap-y-4 md:pt-2 w-full just ">
            <label
              htmlFor="phone"
              className="flex group relative md:w-[400px] w-full cursor-pointer "
            >
              <input
                inputMode="numeric"
                type="tel"
                maxLength="25"
                autoComplete="cc-number"
                name="phone"
                id="phone"
                required
                className="md:w-[400px] w-full  h-[56px] px-12 border-black border-opacity-30 border-[0.5px] rounded-md  focus:border-[#2A5AB3]  transition-colors group-hover:border-primary-brand-color outline-none peer text-sm pt-2 focus:text-[#2A5AB3]"
              />
              <div className="absolute w-full inset-y-0 left-0 flex items-center px-2 color hover pl-4  ">
                <img src="/images/Path 40.svg" alt="localation-icon" />
              </div>
              <span className="absolute top-0 left-0 h-full px-12 flex items-center text-sm text-gray-500 transition-all peer-focus:h-5 peer-focus:text-primary-brand-color peer-valid:h-5 peer-valid:text-primary-brand-color peer-valid:text-xs">
                Uçuş Ara
              </span>
            </label>

            {/* <label
              htmlFor="text"
              className="flex group relative w-full md:w-[400px] cursor-pointer  "
            >
              <input
                inputMode="numeric"
                type="text"
                maxLength="25"
                autoComplete="cc-number"
                name="calendar"
                id="calendar"
                required
                className="w-full md:w-[280px]   h-[56px] px-12 border-black border-opacity-30 border-[0.5px] rounded-md  focus:border-[#2A5AB3] rounded transition-colors group-hover:border-primary-brand-color outline-none peer text-sm pt-2 focus:text-[#2A5AB3]"
              />
              <div className="absolute inset-y-0 left-0 flex items-center px-2 color hover pl-4   ">
                <img src="/images/Group 1279.svg" alt="calender-icon" />
              </div>

              <span className="absolute top-0 left-0 h-full px-12 flex items-center text-sm text-gray-500 transition-all peer-focus:h-5 peer-focus:text-primary-brand-color peer-valid:h-5 peer-valid:text-primary-brand-color peer-valid:text-xs">
                Gidiş Tarihi
              </span>
            </label> */}

            <DateRangePickerItem />

            <label
              htmlFor="text"
              className="flex  relative w-full md:w-[400px] cursor-pointer  "
            >
              <input
                inputMode="numeric"
                type="text"
                maxLength="25"
                autoComplete="cc-number"
                name="calendar"
                id="calendar"
                required
                className="w-full md:w-[220px]   h-[56px] px-12 border-black border-opacity-30 border-[0.5px] rounded-md  focus:border-[#2A5AB3] rounded transition-colors group-hover:border-primary-brand-color outline-none peer text-sm pt-2 focus:text-[#2A5AB3]"
              />
              <div className="absolute inset-y-0 left-0 flex items-center px-2 color hover pl-4   ">
                <img src="/images/Group 687.svg" />
              </div>
              <span className="absolute top-0 left-0 h-full px-12 flex items-center text-sm text-gray-500 transition-all peer-focus:h-5 peer-focus:text-primary-brand-color peer-valid:h-5 peer-valid:text-primary-brand-color peer-valid:text-xs">
                Yolcu Sayısı
              </span>
            </label>
            <div>
              <button
                className="w-full md:w-[180px] h-[56px] bg-[#2A5AB3] text-white rounded-3xl mx-auto hover:scale-110 "
                onClick={() => {
                  alert("Şu anda arama yapılamamaktadır.");
                }}
              >
                Uçuş Ara
              </button>
            </div>
          </div>
        </TabPanel>
        <TabPanel id="2" value="2">
          <div className="flex flex-col md:flex-row gap-x-2 gap-y-4 md:pt-2 w-full justify-between">
            <label
              htmlFor="phone"
              className="flex group relative md:w-[400px] w-full cursor-pointer "
            >
              <input
                inputMode="numeric"
                type="tel"
                maxLength="25"
                autoComplete="cc-number"
                name="phone"
                id="phone"
                required
                className="md:w-[400px] w-full  h-[56px] px-12 border-black border-opacity-30 border-[0.5px] rounded-md  focus:border-[#2A5AB3] rounded transition-colors group-hover:border-primary-brand-color outline-none peer text-sm pt-2 focus:text-[#2A5AB3]"
              />
              <div className="absolute w-full inset-y-0 left-0 flex items-center px-2 color hover pl-4  ">
                <img src="/images/Path 40.svg" alt="localation-icon" />
              </div>
              <span className="absolute top-0 left-0 h-full px-12 flex items-center text-sm text-gray-500 transition-all peer-focus:h-5 peer-focus:text-primary-brand-color peer-valid:h-5 peer-valid:text-primary-brand-color peer-valid:text-xs">
                Tur Adı veya Bölge Girin
              </span>
            </label>

            <label
              htmlFor="text"
              className="flex group relative w-full md:w-[400px] cursor-pointer  "
            >
              <input
                inputMode="numeric"
                type="text"
                maxLength="25"
                autoComplete="cc-number"
                name="calendar"
                id="calendar"
                required
                className="w-full md:w-[280px]   h-[56px] px-12 border-black border-opacity-30 border-[0.5px] rounded-md  focus:border-[#2A5AB3] rounded transition-colors group-hover:border-primary-brand-color outline-none peer text-sm pt-2 focus:text-[#2A5AB3]"
              />
              <div className="absolute inset-y-0 left-0 flex items-center px-2 color hover pl-4   ">
                <img src="/images/Group 1279.svg" alt="calender-icon" />
              </div>
              <span className="absolute top-0 left-0 h-full px-12 flex items-center text-sm text-gray-500 transition-all peer-focus:h-5 peer-focus:text-primary-brand-color peer-valid:h-5 peer-valid:text-primary-brand-color peer-valid:text-xs">
                Gitmek İstediğiniz Dönem
              </span>
            </label>

            <label
              htmlFor="text"
              className="flex  relative w-full md:w-[400px] cursor-pointer  "
            >
              <input
                inputMode="numeric"
                type="text"
                maxLength="25"
                autoComplete="cc-number"
                name="calendar"
                id="calendar"
                required
                className="w-full md:w-[220px]   h-[56px] px-12 border-black border-opacity-30 border-[0.5px] rounded-md  focus:border-[#2A5AB3] rounded transition-colors group-hover:border-primary-brand-color outline-none peer text-sm pt-2 focus:text-[#2A5AB3]"
              />
              <div className="absolute inset-y-0 left-0 flex items-center px-2 color hover pl-4   ">
                <img src="/images/Group 687.svg" />
              </div>
              <span className="absolute top-0 left-0 h-full px-12 flex items-center text-sm text-gray-500 transition-all peer-focus:h-5 peer-focus:text-primary-brand-color peer-valid:h-5 peer-valid:text-primary-brand-color peer-valid:text-xs">
                Kişi Sayısı
              </span>
            </label>

            <div>
              <button
                className="w-full md:w-[180px] h-[56px] bg-[#2A5AB3] text-white rounded-3xl mx-auto hover:scale-110 "
                onClick={() => {
                  alert("Şu anda arama yapılamamaktadır.");
                }}
              >
                Tur Ara
              </button>
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}
