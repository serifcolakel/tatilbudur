import React, { forwardRef, useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AiFillCloseCircle } from "react-icons/ai";
import "react-datepicker/dist/react-datepicker-cssmodules.css";

const data = [
  {
    id: 1,
    title: "Bodrum",
    city: "Muğla",
    country: "Türkiye",
  },
  {
    id: 2,
    title: "Bodrum İçmeler",
    city: "Muğla",
    country: "Türkiye",
  },
  {
    id: 3,
    title: "Bodrum Merkez",
    city: "Muğla",
    country: "Türkiye",
  },
  {
    id: 4,
    title: "Akkan Beach Otel Bodrum",
    city: "Muğla",
    country: "Türkiye",
  },
  {
    id: 5,
    title: "Mandarin Oriental Bodrum",
    city: "Muğla",
    country: "Türkiye",
  },
  {
    id: 6,
    title: "Other Place Bodrum",
    city: "Muğla",
    country: "Türkiye",
  },
  {
    id: 7,
    title: "Luxus",
    city: "Muğla",
    country: "Türkiye",
  },
];
const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
  <div
    className="flex flex-row items-start gap-x-4 md:gap-x-0 md:justify-between w-full px-4 md:w-[280px] text-gray-500  h-[50px] border-[0.5px] border-gray-200  focus:border-[#2A5AB3] group-hover:border-primary-brand-color outline-none peer text-sm pt-3 focus:text-[#2A5AB3]"
    onClick={onClick}
    ref={ref}
  >
    <img src="/images/Group 1279.svg" alt="calender-icon" />
    <p>Konaklama Tarihi</p>
    <p>{value}</p>
  </div>
));
export default function HeaderTabs() {
  const [value, setValue] = useState("1");
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);
  const [state, setState] = useState(false);
  const [startDate, setStartDate] = useState(new Date());

  const isTyping = search.replace(/\s+/, "").length > 0;
  useEffect(() => {
    if (isTyping) {
      setResult(
        data.filter((item) =>
          item.title.toLowerCase().includes(search.toLowerCase())
        )
      );
    } else {
      setResult([]);
    }
  }, [search]);
  useEffect(() => {
    console.log("value", value);
  }, [value]);
  return (
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
          <div className="flex flex-col md:flex-row gap-x-2 gap-y-4 md:pt-2 w-full justify-between relative">
            <label
              htmlFor="phone"
              className=" md:flex group  md:w-[400px] w-full relative cursor-pointer z-20  "
            >
              <input
                inputMode="text"
                type="tel"
                maxLength="25"
                autoComplete="cc-number"
                name="phone"
                id="phone"
                required
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                onClick={() => {
                  setState(!state);
                }}
                className="md:w-[400px] font-bold w-full  h-[50px] px-12 border-[0.5px] border-gray-200  focus:border-[#2A5AB3] rounded transition-colors group-hover:border-primary-brand-color outline-none peer text-sm pt-2 focus:text-[#2A5AB3]"
              />

              <div className="absolute w-full inset-y-0 left-0 flex items-center px-2 color hover pl-4  ">
                <img src="/images/Path 40.svg" alt="localation-icon" />
              </div>
              <span className="absolute top-0 left-0 h-full px-12 flex items-center text-sm text-gray-500 transition-all peer-focus:h-5 peer-focus:text-primary-brand-color peer-valid:h-5 peer-valid:text-primary-brand-color peer-valid:text-xs">
                Otel, Şehir, Bölge veya Tema Adı
              </span>
            </label>

            {search.length > 0 && state && isTyping && (
              <div className="flex flex-col gap-y-4 items-start  md:p-4 p-8 justify-start fixed md:absolute -top-4 left-0 md:left-auto md:top-auto md:pt-0 pt-[220px] w-full md:w-[400px] md:h-[390px] h-[700px] overflow-scroll shadow-xl bg-white mt-[50px] text-[#6F7E90] z-40">
                <div className="flex flex-row justify-between items-center w-full">
                  <p className="text-[10px] font-medium ">Bölgeler</p>
                  <div
                    className="hover:cursor-pointer hover:scale-150 scale-110"
                    onClick={() => {
                      setState(!state);
                    }}
                  >
                    <AiFillCloseCircle />
                  </div>
                </div>
                {result.map((item) => (
                  <div
                    onClick={() => {
                      setSearch(item.title);
                      setState(!state);
                    }}
                    key={item.id}
                    className=" flex md:w-full md:h-[40px] items-center hover:cursor-pointer hover:bg-slate-300 hover:text-white hover:rounded-xl  justify-start flex-row gap-x-4 gap-y-4 p-4"
                  >
                    <img src="/images/pin.svg" alt="localation-icon" />
                    <div>
                      <p className="font-bold">{item.title}</p>
                      <p className="text-[10px] ">
                        {item.city}, {item.country}
                      </p>
                    </div>
                  </div>
                ))}
                {result.length === 0 && (
                  <p className="text-red-600">
                    <strong> {search}</strong> ile ilgili sonuç bulunamadı.
                  </p>
                )}
              </div>
            )}
            <DatePicker
              className="w-full md:w-[280px] text-gray-500  h-[50px]  border-[0.5px] border-gray-200  !focus:border-[#2A5AB3] group-hover:border-primary-brand-color outline-none peer text-sm pt-2 focus:text-[#2A5AB3]"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              customInput={<ExampleCustomInput />}
            ></DatePicker>

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
                className="w-full md:w-[220px]   h-[50px] px-12 border-[0.5px] border-gray-200  focus:border-[#2A5AB3] rounded transition-colors group-hover:border-primary-brand-color outline-none peer text-sm pt-2 focus:text-[#2A5AB3]"
              />
              <div className="absolute inset-y-0 left-0 flex items-center px-2 color hover pl-4   ">
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
                className="md:w-[400px] w-full  h-[50px] px-12 border-[0.5px] border-gray-200  focus:border-[#2A5AB3] rounded transition-colors group-hover:border-primary-brand-color outline-none peer text-sm pt-2 focus:text-[#2A5AB3]"
              />
              <div className="absolute w-full inset-y-0 left-0 flex items-center px-2 color hover pl-4  ">
                <img src="/images/Path 40.svg" alt="localation-icon" />
              </div>
              <span className="absolute top-0 left-0 h-full px-12 flex items-center text-sm text-gray-500 transition-all peer-focus:h-5 peer-focus:text-primary-brand-color peer-valid:h-5 peer-valid:text-primary-brand-color peer-valid:text-xs">
                Uçuş Ara
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
                className="w-full md:w-[280px]   h-[50px] px-12 border-[0.5px] border-gray-200  focus:border-[#2A5AB3] rounded transition-colors group-hover:border-primary-brand-color outline-none peer text-sm pt-2 focus:text-[#2A5AB3]"
              />
              <div className="absolute inset-y-0 left-0 flex items-center px-2 color hover pl-4   ">
                <img src="/images/Group 1279.svg" alt="calender-icon" />
              </div>

              <span className="absolute top-0 left-0 h-full px-12 flex items-center text-sm text-gray-500 transition-all peer-focus:h-5 peer-focus:text-primary-brand-color peer-valid:h-5 peer-valid:text-primary-brand-color peer-valid:text-xs">
                Gidiş Tarihi
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
                className="w-full md:w-[220px]   h-[50px] px-12 border-[0.5px] border-gray-200  focus:border-[#2A5AB3] rounded transition-colors group-hover:border-primary-brand-color outline-none peer text-sm pt-2 focus:text-[#2A5AB3]"
              />
              <div className="absolute inset-y-0 left-0 flex items-center px-2 color hover pl-4   ">
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
                className="md:w-[400px] w-full  h-[50px] px-12 border-[0.5px] border-gray-200  focus:border-[#2A5AB3] rounded transition-colors group-hover:border-primary-brand-color outline-none peer text-sm pt-2 focus:text-[#2A5AB3]"
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
                className="w-full md:w-[280px]   h-[50px] px-12 border-[0.5px] border-gray-200  focus:border-[#2A5AB3] rounded transition-colors group-hover:border-primary-brand-color outline-none peer text-sm pt-2 focus:text-[#2A5AB3]"
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
                className="w-full md:w-[220px]   h-[50px] px-12 border-[0.5px] border-gray-200  focus:border-[#2A5AB3] rounded transition-colors group-hover:border-primary-brand-color outline-none peer text-sm pt-2 focus:text-[#2A5AB3]"
              />
              <div className="absolute inset-y-0 left-0 flex items-center px-2 color hover pl-4   ">
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
  );
}
