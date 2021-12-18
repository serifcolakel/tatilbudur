import React from "react";
const otelsTurkey = [
  {
    id: 1,
    name: "Antalya Otelleri",
    url: "/antalya-otelleri",
    count: "145 Hotel",
  },
  {
    id: 2,
    name: "Balıkesir Otelleri",
    url: "/balikesir-otelleri",
    count: "245 Hotel",
  },
  {
    id: 3,
    name: "Bodrum Otelleri",
    url: "/bodrum-otelleri",
    count: "125 Hotel",
  },
  { id: 4, name: "Bursa Otelleri", url: "/bursa-otelleri", count: "124 Hotel" },
  {
    id: 5,
    name: "Çanakkale Otelleri",
    url: "/canakkale-otelleri",
    count: "15 Hotel",
  },
  {
    id: 6,
    name: "Çanakkale Otelleri",
    url: "/canakkale-otelleri",
    count: "145 Hotel",
  },
  {
    id: 7,
    name: "Denizli Otelleri",
    url: "/denizli-otelleri",
    count: "125 Hotel",
  },
];
export default function MegaMenu() {
  const [isOpen, setIsOpen] = React.useState([
    true,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  return (
    <div className="absolute w-[996px] z-50 -left-[320px] rounded-3xl bg-white top-8 h-[445px]  flex flex-row shadow-2xl ">
      <div className="flex flex-col items-center justify-center w-1/3 gap-y-2">
        <div
          className="flex flex-row items-center w-[219px] h-[50px] gap-x-4 p-4  rounded-lg border-[0.5px] hover:bg-[#CFD4DA] hover:bg-opacity-20 hover:cursor-pointer "
          onClick={() => {
            setIsOpen([!isOpen[0], false, false, false, false, false, false]);
          }}
        >
          <img
            src="/images/Scroll Group 38.png"
            alt="otels-item"
            className="w-9 h-9 object-cover rounded-full"
          />
          <p className="text-[#3F536C] text-[12px] opacity-70 text-center">
            Yurt İçi Otelleri
          </p>
          {isOpen[0] && <b>{">"}</b>}
        </div>
        <div
          className="flex flex-row items-center w-[219px] h-[50px] gap-x-4 p-4  rounded-lg border-[0.5px] hover:bg-[#CFD4DA] hover:bg-opacity-20 hover:cursor-pointer "
          onClick={() => {
            setIsOpen([false, !isOpen[1], false, false, false, false, false]);
          }}
        >
          <img
            src="/images/Image 41.png"
            alt="otels-item"
            className="w-9 h-9 object-cover rounded-full"
          />
          <p className="text-[#3F536C] text-[12px] opacity-70 text-center">
            Termal Oteller
          </p>
          {isOpen[1] && <b>{">"}</b>}
        </div>
        <div
          className="flex flex-row items-center w-[219px] h-[50px] gap-x-4 p-4  rounded-lg border-[0.5px] hover:bg-[#CFD4DA] hover:bg-opacity-20 hover:cursor-pointer "
          onClick={() => {
            setIsOpen([false, false, !isOpen[2], false, false, false, false]);
          }}
        >
          <img
            src="/images/Scroll Group 41.png"
            alt="otels-item"
            className="w-9 h-9 object-cover rounded-full"
          />
          <p className="text-[#3F536C] text-[12px] opacity-70 text-center">
            Kıbrıs Otelleri
          </p>
          {isOpen[2] && <b>{">"}</b>}
        </div>
        <div
          className="flex flex-row items-center w-[219px] h-[50px] gap-x-4 p-4  rounded-lg border-[0.5px] hover:bg-[#CFD4DA] hover:bg-opacity-20 hover:cursor-pointer "
          onClick={() => {
            setIsOpen([false, false, false, !isOpen[3], false, false, false]);
          }}
        >
          <img
            src="/images/Scroll Group 42.png"
            alt="otels-item"
            className="w-9 h-9 object-cover rounded-full"
          />
          <p className="text-[#3F536C] text-[12px] opacity-70 text-center">
            Şehir Otelleri
          </p>
          {isOpen[3] && <b>{">"}</b>}
        </div>
        <div
          className="flex flex-row items-center w-[219px] h-[50px] gap-x-4 p-4  rounded-lg border-[0.5px] hover:bg-[#CFD4DA] hover:bg-opacity-20 hover:cursor-pointer "
          onClick={() => {
            setIsOpen([false, false, false, false, !isOpen[4], false, false]);
          }}
        >
          <img
            src="/images/Image 54.png"
            alt="otels-item"
            className="w-9 h-9 object-cover rounded-full"
          />
          <p className="text-[#3F536C] text-[12px] opacity-70 text-center">
            Kayak Otelleri
          </p>
          {isOpen[4] && <b>{">"}</b>}
        </div>
        <div
          className="flex flex-row items-center w-[219px] h-[50px] gap-x-4 p-4  rounded-lg border-[0.5px] hover:bg-[#CFD4DA] hover:bg-opacity-20 hover:cursor-pointer "
          onClick={() => {
            setIsOpen([false, false, false, false, false, !isOpen[5], false]);
          }}
        >
          <img
            src="/images/Image 54.png"
            alt="otels-item"
            className="w-9 h-9 object-cover rounded-full"
          />
          <p className="text-[#3F536C] text-[12px] opacity-70 text-center">
            Şehir Otelleri
          </p>
          {isOpen[5] && <b>{">"}</b>}
        </div>
        <div
          className="flex flex-row items-center w-[219px] h-[50px] gap-x-4 p-4  rounded-lg border-[0.5px] hover:bg-[#CFD4DA] hover:bg-opacity-20 hover:cursor-pointer "
          onClick={() => {
            setIsOpen([false, false, false, false, false, false, !isOpen[6]]);
          }}
        >
          <img
            src="/images/Image 54.png"
            alt="otels-item"
            className="w-9 h-9 object-cover rounded-full"
          />
          <p className="text-[#3F536C] text-[12px] opacity-70 text-center">
            Weekend Otells
          </p>
          {isOpen[6] && <b>{">"}</b>}
        </div>
      </div>

      <div className="w-9/12 bg-[#F0F0F0] bg-opacity-30  pr-14 pl-8 pt-8 pb-8">
        {isOpen[0] && (
          <div className="flex flex-row items-center justify-between w-full">
            <div className="pl-4 flex flex-col  gap-y-6">
              {otelsTurkey.map((otel) => (
                <div className="flex flex-row gap-x-12" key={otel.id}>
                  <a
                    href={otel.url}
                    className="text-[#3F536C] font-extrabold opacity-80 text-[14px] w-[150px] hover:scale-105"
                  >
                    {otel.name}
                  </a>
                  <p className="text-[#3F536C] opacity-50 font-extrabold text-[12px] w-[60px] ">
                    {otel.count}
                  </p>
                </div>
              ))}
              <button className="text-[#2A5AB3] text-[14px] hover:scale-105 ">
                Tümünü Gör
              </button>
            </div>
            <div className="flex flex-col w-[280px] items-end justify-center gap-y-4">
              <div className="relative">
                <img
                  src="/images/otel (1).png"
                  alt="otels-item"
                  className="w-full h-[150px] object-cover rounded-xl shadow-2xl"
                />
                <img
                  src="/images/pandemic.svg"
                  alt="pandemic-item"
                  className="absolute left-4 bottom-16 "
                />
                <p className="absolute left-4 bottom-4 font-extrabold text-[16px] text-white">
                  Pandemi Döneminde <br /> Güvenli Tatil
                </p>
              </div>
              <div className="relative">
                <img
                  src="/images/Scroll Group 10.png"
                  alt="Scroll Group-item"
                  className="w-full h-[150px] object-cover rounded-xl"
                />
                <img
                  src="/images/kayak.svg"
                  alt="kayak-item"
                  className="absolute left-14 bottom-20 "
                />
                <p className="absolute left-4 bottom-3 font-extrabold text-[16px] text-white">
                  Popüler Kayak Otelleri
                </p>
              </div>
              <button className="w-full h-10 bg-[#F9D5C2] bg-opacity-20 text-[14px] text-[#ED4F21] flex flex-row items-center justify-center gap-x-2 border-[#F9D5C2] border-[1px] hover:scale-105">
                <img
                  src="/images/transfer.png"
                  alt="ulasım-logo"
                  className="object-cover"
                />
                Ulaşım & Transfer Hizmetleri
              </button>
            </div>
          </div>
        )}
        {isOpen[1] && <div>Üzerinde çalışıyorum</div>}
        {isOpen[2] && <div>Üzerinde çalışıyorum</div>}
        {isOpen[3] && <div>Üzerinde çalışıyorum</div>}
        {isOpen[4] && <div>Üzerinde çalışıyorum</div>}
        {isOpen[5] && <div>Üzerinde çalışıyorum</div>}
        {isOpen[6] && <div>Üzerinde çalışıyorum</div>}
      </div>
    </div>
  );
}
