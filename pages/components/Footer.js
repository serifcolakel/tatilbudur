import React from "react";

export default function Footer() {
  return (
    <div className=" md:h-[537px] w-full md:rounded-3xl bg-[#F8F4F0] flex mt-6 sixth:justify-items-end relative">
      <div className="w-full flex flex-col md:p-0 pl-8 pr-8 items-center h-full">
        <div className=" md:w-[1180px] flex flex-row w-full pt-8 pb-4  md:pt-12 md:text-[22px] text-[16px] font-semibold border-b-2 md:border-b-0 mb-2">
          <img
            src="/images/footer-logo.svg"
            alt="tatilbudur-footer-logo"
            className="pr-12"
          />
          <div className="flex flex-row justify-center items-center text-center pr-8 gap-x-[1px] ">
            <p className="text-[#2A5AB3] ">#daha</p>
            <p className="text-[#709CEF] ">fazla</p>
            <p className="text-[#FF7F15] ">tatil</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-x-8 md:w-[1180px] text-[#3F536C] text-[14px] font-bold md:divide-y-0 divide-y-2 gap-y-4">
          <div className="flex flex-row justify-between md:justify-start  md:flex-col  gap-y-2 pr-10  md:pt-4 pt-8 md:pb-0  pb-4">
            <div className="flex flex-col justify-between">
              {" "}
              <a href="#otelara" className="flex flex-row gap-x-4">
                <img
                  src="/images/Group 716.svg"
                  alt="footer-icon-1"
                  className="pr-1"
                />
                <p>Otel Ara</p>
              </a>
              <a href="#ucusara" className="flex flex-row gap-x-4">
                <img
                  src="/images/Group 715.svg"
                  alt="footer-icon-1"
                  className="pr-"
                />
                <p>Uçuş Ara</p>
              </a>
              <a href="#turara" className="flex flex-row gap-x-4">
                <img
                  src="/images/Group 724.svg"
                  alt="footer-icon-1"
                  className="pr-[2px] "
                />
                <p>Tur Ara</p>
              </a>
              <a href="#kampanya" className="flex flex-row gap-x-4">
                <img src="/images/kampanyalar.svg" alt="footer-icon-1" />
                <p className="-ml-1">Kampanyalar</p>
              </a>
            </div>
            <img
              src="/images/etbis.png"
              className="md:hidden block w-[93px] h-[108px] object-cover ml-4 "
              alt="etbis-qr-code"
            />
          </div>
          <div className="flex flex-col items-start gap-y-2 md:pt-4 pt-8 md:pb-0  pb-4">
            <h4 className="text-[#3F536C]  text-[14px]  font-semibold">
              Öne Çıkan Kategoriler
            </h4>
            <div className="flex flex-row items-start justify-between md:gap-x-20 gap-x-4 w-full text-[#6F7E8F] text-[12px] font-normal ">
              <div className="flex flex-col gap-y-2  ">
                <a href="#" className="flex flex-row ">
                  Erken Rezervasyon
                </a>
                <a href="#" className="flex flex-row ">
                  Termal Oteller
                </a>
                <a href="#" className="flex flex-row ">
                  Otelleri Kış Otelleri
                </a>
                <a href="#" className="flex flex-row ">
                  1+1 Gece Otelleri
                </a>
                <a href="#" className="flex flex-row ">
                  Yılbaşı otelleri
                </a>
                <a href="#" className="flex flex-row ">
                  Hafta sonu otelleri
                </a>
              </div>
              <div className="flex flex-col gap-y-2 ">
                <a href="#" className="flex flex-row">
                  İzmir otelleri
                </a>
                <a href="#" className="flex flex-row">
                  Kıbrıs otelleri
                </a>
                <a href="#" className="flex flex-row">
                  İstanbul otelleri
                </a>
                <a href="#" className="flex flex-row">
                  Ankara otelleri
                </a>
                <a href="#" className="flex flex-row">
                  Termal oteller
                </a>
                <a href="#" className="flex flex-row">
                  Yurtdışı oteller
                </a>
              </div>
              <div className="flex flex-col gap-y-2 pr-2">
                <a href="#" className="flex flex-row">
                  Yurtdışı turları
                </a>
                <a href="#" className="flex flex-row">
                  Yurt dışı turları
                </a>
                <a href="#" className="flex flex-row">
                  Kayak otelleri
                </a>
                <a href="#" className="flex flex-row">
                  Haftasonu turları
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-y-2 md:pt-4 pt-8 md:pb-0 pb-4">
            <h4 className="text-[#3F536C] text-[14px] font-semibold">
              Rezervasyon
            </h4>
            <div className="flex flex-row items-start justify-between gap-x-10 w-full text-[#6F7E8F] text-[12px] font-normal ">
              <div className="flex flex-col gap-y-2 ">
                <a href="#" className="flex flex-row">
                  Rezervasyon Kontrol
                </a>
                <a href="#" className="flex flex-row">
                  Nasıl Rezervasyon Yapılır?
                </a>
                <a href="#" className="flex flex-row">
                  Grup Rezervasyon Talebi
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-y-2 md:pt-4 pt-8 md:pb-0 pb-4">
            <h4 className="text-[#3F536C] text-[14px] font-semibold">
              TatilBudur
            </h4>
            <div className="flex flex-row items-start justify-between gap-x-10 w-full text-[#6F7E8F] text-[12px] font-normal ">
              <div className="flex flex-col gap-y-2 ">
                <a href="#" className="flex flex-row">
                  Hakkımızda
                </a>
                <a href="#" className="flex flex-row">
                  İletişim
                </a>
                <a href="#" className="flex flex-row">
                  İnsan Kaynakları
                </a>
                <a href="#" className="flex flex-row">
                  Müşteri İlişkileri
                </a>
                <a href="#" className="flex flex-row">
                  Şubelerimiz
                </a>
                <a href="#" className="flex flex-row">
                  Şube Başvuru Formu
                </a>
                <a href="#" className="flex flex-row">
                  Banka Hesaplarımız
                </a>
                <a href="#" className="flex flex-row">
                  Kütahya Çizelgesi
                </a>
                <a href="#" className="flex flex-row">
                  Sıkça Sorulan Sorular
                </a>
              </div>
            </div>
          </div>
          <img
            src="/images/etbis.png"
            className="hidden md:block w-[93px] h-[108px] object-cover ml-4 "
            alt="etbis-qr-code"
          />
          <div className="md:hidden flex w-full pt-8 pb-4 ">
            <div className="flex flex-col w-full  items-start justify-start gap-y-8  text-[#3F536C]">
              <div className="flex flex-col w-full items-start justify-start gap-y-8">
                <p className=" text-[16px] font-extrabold ">Bizi Takip Edin</p>
                <div className="flex flex-row items-center justify-between w-full p-4">
                  <a href="#" target="_blank" rel="instagram">
                    <img src="/images/insta.svg" alt="instagram-icon" />
                  </a>
                  <a href="#" target="_blank" rel="facebook">
                    <img src="/images/facebook.svg" alt="facebook-icon" />
                  </a>
                  <a href="#" target="_blank" rel="vimeo">
                    <img src="/images/vimeo.svg" alt="vimeo-icon" />
                  </a>
                  <a href="#" target="_blank" rel="twitter">
                    <img src="/images/twitter.svg" alt="twitter-icon" />
                  </a>
                  <a href="#" target="_blank" rel="linkedin">
                    <img src="/images/linkedin.svg" alt="linkedin-icon" />
                  </a>
                  <a href="#" target="_blank" rel="youtube">
                    <img src="/images/youtube.svg" alt="youtube-icon" />
                  </a>
                </div>

                <a
                  href="#"
                  target="_blank"
                  rel="blog"
                  className="flex flex-row gap-x-4 text-center items-center"
                >
                  <img src="/images/blog.svg" alt="blog-icon" />
                  <p className="text-[14px] ">blog.tatilbudur.com</p>
                </a>
              </div>
              <div className=" flex flex-col gap-y-8 items-start justfiy-start">
                <a
                  href="#"
                  target="_blank"
                  rel="blog"
                  className="flex flex-row gap-x-4 text-center items-center"
                >
                  <p className="text-[16px] font-bold ">Çağrı Merkezi</p>
                  <img src="/images/cagrimerkezi.svg" alt="cagrimerkezi-icon" />
                </a>

                <div className="">
                  <p className="text-[12px] font-bold ">Bizi Arayın</p>
                  <p className="text-[20px] font-bold ">0 850 333 3 333</p>
                  <p className="text-[12px] font-medium opacity-50 ">VEYA</p>
                  <a
                    href="#"
                    target="_blank"
                    rel="blog"
                    className="flex flex-row gap-x-2 text-center items-center"
                  >
                    <p className="text-[12px] font-bold">Biz sizi arayalım</p>
                    <img
                      src="/images/cagrimerkezi.svg"
                      alt="cagrimerkezi-icon"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:flex w-full md:w-[1180px] pt-12 md:pt-6 pb-4 ">
          <div className="flex flex-col md:flex-row items-center justify-center gap-x-8 md:w-[1000px] text-[#3F536C]">
            <p className=" text-[16px] font-extrabold ">Bizi Takip Edin</p>
            <div className="flex flex-row gap-x-6 items-center">
              <a href="#" target="_blank" rel="instagram">
                <img src="/images/insta.svg" alt="instagram-icon" />
              </a>
              <a href="#" target="_blank" rel="facebook">
                <img src="/images/facebook.svg" alt="facebook-icon" />
              </a>
              <a href="#" target="_blank" rel="vimeo">
                <img src="/images/vimeo.svg" alt="vimeo-icon" />
              </a>
              <a href="#" target="_blank" rel="twitter">
                <img src="/images/twitter.svg" alt="twitter-icon" />
              </a>
              <a href="#" target="_blank" rel="linkedin">
                <img src="/images/linkedin.svg" alt="linkedin-icon" />
              </a>
              <a href="#" target="_blank" rel="youtube">
                <img src="/images/youtube.svg" alt="youtube-icon" />
              </a>
            </div>

            <a
              href="#"
              target="_blank"
              rel="blog"
              className="flex flex-row gap-x-4 text-center items-center"
            >
              <img src="/images/blog.svg" alt="blog-icon" />
              <p className="text-[14px] ">blog.tatilbudur.com</p>
            </a>

            <div className="w-[365px] h-[86px] flex flex-row divide-x-2 gap-x-8 items-center justfiy-center">
              <a
                href="#"
                target="_blank"
                rel="blog"
                className="flex flex-row gap-x-4 text-center items-center"
              >
                <p className="text-[16px] font-bold ">Çağrı Merkezi</p>
                <img src="/images/cagrimerkezi.svg" alt="cagrimerkezi-icon" />
              </a>

              <div className="pl-8">
                <p className="text-[12px] font-bold ">Bizi Arayın</p>
                <p className="text-[20px] font-bold ">0 850 333 3 333</p>
                <p className="text-[12px] font-medium opacity-50 ">VEYA</p>
                <a
                  href="#"
                  target="_blank"
                  rel="blog"
                  className="flex flex-row gap-x-2 text-center items-center"
                >
                  <p className="text-[12px] font-bold">Biz sizi arayalım</p>
                  <img src="/images/cagrimerkezi.svg" alt="cagrimerkezi-icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:flex  md:gap-x-8 md:w-[1180px] text-[#3F536C] text-[14px] font-bold  items-end">
          <p className="text-[#3F536C] text-[12px] font-normal ">
            Afişe edilen tüm fiyatlar, ilgili üründe kontenjan olması durumunda
            geçerli olup seçeceğiniz döneme göre fiyatlar değişkenlik
            gösterebilir.
          </p>
        </div>
        <img
          className="absolute bottom-0 right-4 md:right-28"
          src="/images/cagrimerkezi-model.png"
          alt="cagrimerkezi-model"
        />
      </div>
    </div>
  );
}
