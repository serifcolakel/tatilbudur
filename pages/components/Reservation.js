import React from "react";
import Slider from "react-slick";
import { BsMoon, BsCalendarWeek } from "react-icons/bs";
import { FaSkating } from "react-icons/fa";

export default function Reservation() {
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
  // md:w-[780px] mx-auto border-2 rounded-xl h-[340px]
  return (
    <div className="w-full md:w-[1180px] flex flex-col md:pt-6">
      <div className="w-full flex md:flex-row flex-col justify-between md:h-[340px] ">
        <div className="relative w-full md:w-[780px] h-auto md:h-[340px] rounded-xl from-red-500 to-slate-100 z-50">
          <Slider className="p-8 md:p-0 " {...settings}>
            <div id="show_bg_2">
              <img
                src="https://ucdn.tatilbudur.net/Banner/850x300/Banner_431148.jpg"
                alt="slick-item-1"
                className=" object-cover w-full h-[200px]  md:w-[780px] md:h-[340px] from-red-500 to-slate-100 rounded-xl z-20 "
              />
            </div>
            <div id="show_bg_2">
              <img
                src="https://ucdn.tatilbudur.net/Banner/850x300/Banner_429195.jpg"
                alt="slick-item-2"
                className="object-cover w-full h-[200px] md:w-[780px] md:h-[340px] rounded-xl z-20"
              />
            </div>
            <div id="show_bg_2">
              <img
                src="https://ucdn.tatilbudur.net/Banner/850x300/Banner_431146.jpg"
                alt="slick-item-3"
                className="object-cover w-full h-[200px] md:w-[780px] md:h-[340px] rounded-xl z-20"
              />
            </div>
            <div id="show_bg_2">
              <img
                src="https://ucdn.tatilbudur.net/Banner/850x300/Banner_431145.jpg"
                alt="slick-item-4"
                className=" object-cover w-full h-[200px] md:w-[780px] md:h-[340px] rounded-xl z-20"
              />
            </div>
          </Slider>
          <div className="absolute top-[90px] md:top-1/3 left-10 z-20">
            <p className="text-2xl text-white font-extrabold pb-4">
              Erken Rezervasyon <br />
              Festivali
            </p>
            <button className="w-[153px] h-[40px] bg-[#FF9D00] rounded-3xl text-white">
              Fırsatları gör
            </button>
          </div>
        </div>
        <div className="hidden md:flex md:flex-col md:justify-between md:items-center md:w-[380px] ">
          <div className="w-full md:flex flex-row md:items-center md:justify-between md:h-[160px] pl-6 border-[0.5px] rounded-2xl">
            <div>
              <p className="text-[#3F536C] font-semibold opacity-80 tracking-tighter pb-4">
                Yılbaşına Özel <br />
                Kültür Turlarını <br />
                Keşfedin!
              </p>
              <button className="w-[112px] h-[30px] bg-[#3F536C] rounded-3xl text-white text-[12px]">
                Fırsatları Gör
              </button>
            </div>
            <div className="relative -right-40 -bottom-8">
              <img src="/images/Group 1369.svg" />
            </div>
            <div>
              <img
                src="/images/shutterstock_1317409001.png"
                className="h-[160px] w-[190px] object-cover rounded-r-2xl"
              />
            </div>
          </div>
          <div className="w-full md:flex flex-row md:items-center md:justify-between md:h-[160px] pl-6 border-[0.5px] rounded-2xl">
            <div>
              <p className="text-[#3F536C] font-semibold opacity-80 tracking-tighter pb-4">
                Kış Tatili <br />
                için Hazırlanın!
              </p>
              <button className="w-[112px] h-[30px] bg-[#3F536C] rounded-3xl text-white text-[12px]">
                Fırsatları Gör
              </button>
            </div>
            <div>
              <img
                src="/images/clarisse-meyer-wHUFmZRMpLc-unsplash.png"
                className="h-[160px] w-[190px] object-cover rounded-r-2xl"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:flex md:flex-row flex-col justify-between items-center md:pt-6 pl-4 pr-4 md:pl-0 md:pr-0 md:pb-0 pb-4">
        <div className="w-full md:w-[380px] h-[100px] border-2 rounded-lg flex flex-row items-center justify-between pl-6 pr-8">
          <div>
            <p className="text-[#3F536C] font-medium opacity-90 text-[14px]">
              Şimdi Al,<strong className="font-extrabold "> 4 Ay Sonra</strong>
              <br /> Ödemeye Başla
            </p>
            <p className="text-[10px] text-[#3F536C] ">
              Maximum karta özel 4 ay erteleme
            </p>
          </div>
          <div className="relative object-cover">
            <BsCalendarWeek className="w-10 h-10 text-[#6F7E8F]" />
            <div className="absolute -top-3 -right-2 rounded-full text-center bg-white p-1">
              <p className="text-lg text-[#6F7E8F] font-extrabold">+4</p>
            </div>
          </div>
        </div>
        <div className="hidden w-full md:w-[380px] h-[100px] border-2 rounded-lg md:flex flex-row items-center justify-between pl-6  pr-8">
          <p className="text-[#3F536C] font-medium opacity-90 text-[14px]">
            2 Gece ve Üstü Konaklamalarda
            <br />
            <strong className="font-extrabold "> +1 Gece Ücretsiz</strong>
          </p>

          <div className="relative object-cover">
            <BsMoon className="w-10 h-10 text-[#6F7E8F]" />
            <div className="absolute bottom-6 left-1/2">
              <p className="text-2xl text-[#6F7E8F] font-extrabold">+1</p>
            </div>
            <div className="absolute top-6 right-9">
              <p className="text-[15px] text-[#6F7E8F] font-extrabold">+</p>
            </div>
            <div className="absolute top-2 right-2">
              <p className="text-[15px] text-[#6F7E8F] font-extrabold">+</p>
            </div>
          </div>
        </div>
        <div className="hidden w-full md:w-[380px] h-[100px] border-2 rounded-lg md:flex flex-row items-center justify-between pl-6  pr-4">
          <p className="text-[#3F536C] font-medium opacity-90  text-[14px]">
            Kayak Otellerinde
            <br />
            <strong className="font-extrabold "> %45’e Varan </strong>
            Erken Rezervasyon <br />
            Fırsatı!
          </p>
          <FaSkating className="w-10 h-10 text-[#6F7E8F]" />
        </div>
      </div>

      <p className="hidden md:flex text-[10px] text-[#3F536C] md:pl-6 pt-2 md:pb-8">
        Maximum karta özel 4 ay erteleme
      </p>

      <div className="pl-4 pr-4 md:pl-0 md:pr-0">
        <div className="flex  h-[130px]  flex-row items-start bg-[#FFE267] bg-opacity-20 md:h-[60px] rounded-xl pl-4 pr-4 gap-x-5 pt-4">
          <img src="/images/user.svg" className="w-7 h-7 mt-2 md:mt-0" />
          <div className="flex md:flex-row flex-col w-full justify-between gap-x-8 md:items-center items-start ">
            <div className="flex md:flex-row flex-col text-[12px] md:text-[14px]   gap-x-6">
              <p className="text-[#3F536C] font-extrabold">
                Üyelere özel indirimli fiyatlar
              </p>
              <p className="text-[#3F536C] font-medium">
                Giriş yaptığınızda{" "}
                <span className="border-b-[1px] border-black">
                  daha düşük fiyatlar
                </span>{" "}
                görürsünüz!
              </p>
            </div>
            <div >
              <button className="pt-3 pb-3 flex items-center justify-center w-[106px] h-[30px] text-[14px] text-[#3f536c] font-semibold  gap-x-4 border border-[#6F7E8F4D] rounded-full">
                Giriş yapın
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
