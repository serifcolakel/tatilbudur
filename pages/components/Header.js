import React from "react";
import HeaderTabs from "./HeaderTabs";
import HeaderTop from "./HeaderTop";

export default function Header() {
  return (
    <div className="gap-y-10 ">
      <div className="flex flex-col items-center justify-center gap-y-8 ">
        <HeaderTop />
        <HeaderTabs />
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
