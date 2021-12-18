import React from "react";
import Slider from "react-slick";

export default function SliderTour() {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    autoplaySpeed: 3000,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
  };
  return (
    <Slider className="pl-14 pr-14" {...settings}>
      <div className="w-full h-[305px] border-[1px] border-[#3F536C] border-opacity-30 bg-white rounded-xl ">
        <img
          src="/images/Mask Group 49.png"
          alt="firsat-items"
          className="w-full h-[150px] rounded-t-xl"
        />
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
      <div className="w-full h-[305px] border-[1px] border-[#3F536C] border-opacity-30 bg-white rounded-xl ">
        <img
          src="/images/test2.png"
          alt="firsat-items"
          className="w-full h-[150px] rounded-t-xl"
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
      <div className="w-full h-[305px] border-[1px] border-[#3F536C] border-opacity-30 bg-white rounded-xl ">
        <img
          src="/images/test1.png"
          alt="firsat-items"
          className="w-full h-[150px] rounded-t-xl"
        />

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
        <img
          src="/images/test.png"
          alt="firsat-items"
          className="w-full h-[150px] rounded-t-xl"
        />

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
    </Slider>
  );
}
