import React, { forwardRef, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { AiFillCloseCircle } from "react-icons/ai";

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
    className="flex flex-row  items-center md:pb-2 gap-x-4 md:gap-x-0 md:justify-between w-full px-4 md:w-[280px] text-gray-500  h-[56px] border-[0.5px] border-gray-200  focus:border-[#2A5AB3] group-hover:border-primary-brand-color outline-none peer text-sm pt-3 focus:text-[#2A5AB3]"
    onClick={onClick}
    ref={ref}
  >
    <img src="/images/Group 1279.svg" alt="calender-icon" />
    <p>Konaklama Tarihi</p>
    <p>{value}</p>
  </div>
));
export default function TabPanelSec() {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);
  const [state, setState] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [person, setPerson] = useState(0);
  const [child, setChild] = useState(0);
  const [personModal, setPersonModal] = useState(false);
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
  return (
    <div className="md:flex hidden flex-col md:flex-row gap-x-2 gap-y-4 md:pt-2 w-full justify-between relative">
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
          className="md:w-[400px] font-bold w-full  h-[56px] px-12 border-[0.5px] border-gray-200  focus:border-[#2A5AB3] rounded transition-colors group-hover:border-primary-brand-color outline-none peer text-sm pt-2 focus:text-[#2A5AB3]"
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
          <div className="flex flex-row justify-between items-center w-full pt-2">
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
        className="w-full md:w-[280px] text-gray-500  h-[56px]  border-[0.5px] border-gray-200  !focus:border-[#2A5AB3] group-hover:border-primary-brand-color outline-none peer text-sm pt-2 focus:text-[#2A5AB3]"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        customInput={<ExampleCustomInput />}
      />

      <label htmlFor="text" className="flex  relative w-full md:w-[220px]   ">
        <input
          inputMode="numeric"
          type="button"
          maxLength="3"
          autoComplete="cc-number"
          name="calendar"
          id="calendar"
          required
          className="w-full md:w-[220px] text-gray-500   h-[56px] px-12 border-[0.5px] border-gray-200  focus:border-[#2A5AB3]  transition-colors group-hover:border-primary-brand-color outline-none peer text-sm pt-2 focus:text-[#2A5AB3]"
        />
        <div className="absolute inset-y-0 left-0 flex items-center px-2 color hover pl-4   ">
          <img src="/images/Group 687.svg" alt="tab-icon" />
        </div>
        <span
          onClick={() => {
            setPersonModal(!personModal);
          }}
          className="absolute top-0 left-0 h-full px-12 flex items-center text-sm  transition-all peer-focus:h-5 peer-focus:text-primary-brand-color peer-valid:h-5 peer-valid:text-primary-brand-color peer-valid:text-xs"
        >
          Kişi Sayısı
        </span>
        {personModal && (
          <div className="absolute top-[50px] left-0 w-full md:w-[220px] bg-white shadow-xl z-50 h-[300px] text-[#3F536C] pl-4 pt-8 pr-4 rounded-b-lg flex flex-col gap-y-6 overflow-auto">
            <div className="flex flex-row justify-between items-center">
              <p className="text-[12px] ">Yetişkin</p>
              <div className="flex flex-row  items-center justify-between w-[102px] ">
                <button
                  className="text-[14px] border-2 rounded-full pl-2 pr-2"
                  disabled={person <= 0 ? true : false}
                  onClick={() => {
                    setPerson(person - 1);
                  }}
                >
                  -
                </button>
                <p className="text-[14px] ">{person}</p>
                <button
                  className="text-[14px] border-2 rounded-full pl-2 pr-2"
                  onClick={() => {
                    setPerson(person + 1);
                  }}
                >
                  +
                </button>
              </div>
            </div>
            <div className="flex flex-row justify-between items-center">
              <p className="text-[12px] ">Çocuk</p>
              <div className="flex flex-row  items-center justify-between w-[102px] ">
                <button
                  className="text-[14px] border-2 rounded-full pl-2 pr-2"
                  disabled={child <= 0 ? true : false}
                  onClick={() => {
                    setChild(child - 1);
                  }}
                >
                  -
                </button>
                <p className="text-[14px] ">{child}</p>
                <button
                  className="ext-[14px] border-2 rounded-full pl-2 pr-2"
                  onClick={() => {
                    setChild(child + 1);
                  }}
                >
                  +
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-y-4">
              <p className="text-[10px] ">LÜTFEN ÇOCUKLARIN YAŞINI SEÇİNİZ</p>
              <div className="grid grid-cols-2 gap-2">
                {Array.from(Array(child), (e, i) => {
                  return (
                    <select
                      key={i}
                      className="text-[14px] border-2 rounded-xl pl-2 pr-2 h-[40px] "
                    >
                      <option>Çocuk {i}</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                      <option>9</option>
                      <option>10</option>
                      <option>11</option>
                      <option>12</option>
                      <option>13</option>
                    </select>
                  );
                })}
              </div>
            </div>
            <div className="border-t-2 pt-4">
              <button
                onClick={() => {
                  alert(
                    "Şu anda veritabanına erişemiyoruz.Teknik aksaklıktan dolayı özür dileriz."
                  );
                }}
                className="w-full rounded-xl h-10 bg-[#3659AD] text-white text-[14px] font-medium hover:text-[#3659AD] hover:bg-white hover:border-2 hover:border-[#3659AD] "
              >
                Uygula
              </button>
            </div>
          </div>
        )}
      </label>

      <div>
        <button
          className="w-full md:w-[180px] h-[56px] bg-[#2A5AB3] text-white rounded-3xl mx-auto hover:scale-110"
          onClick={() => {
            alert(
              "Şu anda veritabanına erişemiyoruz.Teknik aksaklıktan dolayı özür dileriz."
            );
          }}
        >
          Otel Ara
        </button>
      </div>
    </div>
  );
}
