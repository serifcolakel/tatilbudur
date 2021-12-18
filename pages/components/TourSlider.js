import React from "react";
import Slider from "react-slick";
import slider from "react-slick/lib/slider";
export default function TourSlider() {
  const [nav1, setNav1] = React.useState(null);
  const [nav2, setNav2] = React.useState(null);
  let slider1 = [];
  let slider2 = [];

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <img
      className="scale-150"
      src="/images/arrow-left-solid.svg"
      alt="prevArrow"
      {...props}
    />
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <img src="/images/arrow-right-solid.svg" alt="nextArrow" {...props} />
  );
  // React.useEffect(() => {

  //   setNav1(slider1);
  //   setNav2(slider2);
  // }, [slider1, slider2]);

  return (
    <div className="md:w-[1180px]  md:flex-col w-full mx-auto md:rounded-3xl flex  overflow-x-clip ">
      <Slider
        arrows={false}
        slidesToShow={1}
        slidesToScroll={1}
        className="w-full h-[450px] "
      >
        <div className="mx-auto  md:w-full w-full md:pt-4 md:pb-4  flex flex-row items-center justify-center md:rounded-3xl relative ">
          <img
            src="/images/Scroll Group 26.png"
            alt="firsat-items"
            className="w-full md:h-[400px] h-[450px] object-cover md:rounded-3xl"
          />
          <div className="absolute left-4 md:left-20 md:bottom-1/3 bottom-14 text-[#FFFFFF] flex flex-col md:w-[336px] gap-y-4 w-full">
            <p className="text-[24px] font-bold ">
              Roma’yı Keşfetme <br className="md:hidden block" /> Mevsimi
            </p>
            <p className="text-[14px] font-medium ">
              Haydi, siz de Tatilbudur’un uygun fiyatlı yurt dışı turlarını
              incelemeye başlayın, yurt dışında daha fazla yeni yerler
              keşfetmenin keyfine varın!
            </p>
            <button className="w-[132px] h-10 text-[#115BB9] text-[12px] font-bold bg-[#ffffff] rounded-3xl hover:scale-125">
              Fırsatları Gör
            </button>
          </div>
          <div className="absolute top-10 right-6 md:right-10 flex items-center text-[#3F536C] text-[12px] font-medium ">
            <img
              src="/images/badge.png"
              alt="tour-badge"
              className="w-[115px] h-[115px] object-cover "
            />
            <p className="absolute top-8 right-7">
              200€’dan <br /> başlayan <br />
              fiyatlarla
            </p>
          </div>
        </div>

        <div className="mx-auto w-[375px] md:w-full md:p-4   flex flex-row items-center justify-center md:rounded-3xl relative ">
          <img
            src="https://ucdn.tatilbudur.net/tur/kuzey-isiklari-lapland-murmansk-turu-her-gece-kuzey-isiklari-avcilik-turlari-dahil/400x300/141884.jpg"
            alt="firsat-items"
            className="w-full md:h-[400px] h-[450px] object-cover md:rounded-3xl"
          />
          <div className="absolute left-4 md:left-20 md:bottom-1/3 bottom-14 text-[#FFFFFF] flex flex-col md:w-[336px] gap-y-4 w-full">
            <p className="text-[24px] font-bold ">
              Roma’yı Keşfetme <br className="md:hidden block" /> Mevsimi
            </p>
            <p className="text-[14px] font-medium ">
              Haydi, siz de Tatilbudur’un uygun fiyatlı yurt dışı turlarını
              incelemeye başlayın, yurt dışında daha fazla yeni yerler
              keşfetmenin keyfine varın!
            </p>
            <button className="w-[132px] h-10 text-[#115BB9] text-[12px] font-bold bg-[#ffffff] rounded-3xl hover:scale-125">
              Fırsatları Gör
            </button>
          </div>
          <div className="absolute top-10 right-6 md:right-10 flex items-center text-[#3F536C] text-[12px] font-medium ">
            <img
              src="/images/badge.png"
              alt="tour-badge"
              className="w-[115px] h-[115px] object-cover "
            />
            <p className="absolute top-8 right-7">
              200€’dan <br /> başlayan <br />
              fiyatlarla
            </p>
          </div>
        </div>

        <div className="mx-auto w-[375px] md:w-full md:p-4  flex flex-row items-center justify-center md:rounded-3xl relative">
          <img
            src="https://ucdn.tatilbudur.net/tur/orta-avrupa-turu-somestr-ozel-3-gece-4-gun/486x290/143739.jpg"
            alt="firsat-items"
            className="w-full md:h-[400px] h-[450px] object-cover md:rounded-3xl"
          />
          <div className="absolute left-4 md:left-20 md:bottom-1/3 bottom-14 text-[#FFFFFF] flex flex-col md:w-[336px] gap-y-4 w-full">
            <p className="text-[24px] font-bold ">
              Roma’yı Keşfetme <br className="md:hidden block" /> Mevsimi
            </p>
            <p className="text-[14px] font-medium ">
              Haydi, siz de Tatilbudur’un uygun fiyatlı yurt dışı turlarını
              incelemeye başlayın, yurt dışında daha fazla yeni yerler
              keşfetmenin keyfine varın!
            </p>
            <button className="w-[132px] h-10 text-[#115BB9] text-[12px] font-bold bg-[#ffffff] rounded-3xl hover:scale-125">
              Fırsatları Gör
            </button>
          </div>
          <div className="absolute top-10 right-6 md:right-10 flex items-center text-[#3F536C] text-[12px] font-medium ">
            <img
              src="/images/badge.png"
              alt="tour-badge"
              className="w-[115px] h-[115px] object-cover "
            />
            <p className="absolute top-8 right-7">
              200€’dan <br /> başlayan <br />
              fiyatlarla
            </p>
          </div>
        </div>

        <div className="mx-auto w-[375px] md:w-full md:p-4  flex flex-row items-center justify-center md:rounded-3xl relative">
          <img
            src="https://ucdn.tatilbudur.net/tur/almanya-polonya-turu-somestre-ozel/400x300/150462.jpg"
            alt="firsat-items"
            className="w-full md:h-[400px] h-[450px] object-cover md:rounded-3xl"
          />
          <div className="absolute left-4 md:left-20 md:bottom-1/3 bottom-14 text-[#FFFFFF] flex flex-col md:w-[336px] gap-y-4 w-full">
            <p className="text-[24px] font-bold ">
              Roma’yı Keşfetme <br className="md:hidden block" /> Mevsimi
            </p>
            <p className="text-[14px] font-medium ">
              Haydi, siz de Tatilbudur’un uygun fiyatlı yurt dışı turlarını
              incelemeye başlayın, yurt dışında daha fazla yeni yerler
              keşfetmenin keyfine varın!
            </p>
            <button className="w-[132px] h-10 text-[#115BB9] text-[12px] font-bold bg-[#ffffff] rounded-3xl hover:scale-125">
              Fırsatları Gör
            </button>
          </div>
          <div className="absolute top-10 right-6 md:right-10 flex items-center text-[#3F536C] text-[12px] font-medium ">
            <img
              src="/images/badge.png"
              alt="tour-badge"
              className="w-[115px] h-[115px] object-cover "
            />
            <p className="absolute top-8 right-7">
              200€’dan <br /> başlayan <br />
              fiyatlarla
            </p>
          </div>
        </div>

        <div className="mx-auto w-[375px] md:w-full md:p-4  flex flex-row items-center justify-center md:rounded-3xl relative">
          <img
            src="https://ucdn.tatilbudur.net/tur/budva-turu-air-montenegro-havayollari-ile-4-gece-promosyon-/400x300/141793.jpg"
            alt="firsat-items"
            className="w-full md:h-[400px] h-[450px] object-cover md:rounded-3xl"
          />
          <div className="absolute left-4 md:left-20 md:bottom-1/3 bottom-14 text-[#FFFFFF] flex flex-col md:w-[336px] gap-y-4 w-full">
            <p className="text-[24px] font-bold ">
              Roma’yı Keşfetme <br className="md:hidden block" /> Mevsimi
            </p>
            <p className="text-[14px] font-medium ">
              Haydi, siz de Tatilbudur’un uygun fiyatlı yurt dışı turlarını
              incelemeye başlayın, yurt dışında daha fazla yeni yerler
              keşfetmenin keyfine varın!
            </p>
            <button className="w-[132px] h-10 text-[#115BB9] text-[12px] font-bold bg-[#ffffff] rounded-3xl hover:scale-125">
              Fırsatları Gör
            </button>
          </div>
          <div className="absolute top-10 right-6 md:right-10 flex items-center text-[#3F536C] text-[12px] font-medium ">
            <img
              src="/images/badge.png"
              alt="tour-badge"
              className="w-[115px] h-[115px] object-cover "
            />
            <p className="absolute top-8 right-7">
              200€’dan <br /> başlayan <br />
              fiyatlarla
            </p>
          </div>
        </div>
      </Slider>

      <Slider
        slidesToShow={4}
        nextArrow={<SlickArrowRight />}
        prevArrow={<SlickArrowLeft />}
        slidesToScroll={1}
        focusOnSelect={true}
        className="md:flex md:px-8 md:w-10/12 md:mx-auto hidden  "
      >
        <div className=" h-[70px] pl-4  flex flex-row items-center justify-center rounded-xl border-2 relative ">
          <img
            src="/images/Scroll Group 26.png"
            alt="firsat-items"
            className="w-[50px] h-[50px] object-cover rounded-lg mt-2 hover:scale-105"
          />
          <div className="absolute bottom-1/4 left-20 pt-[3px] w-[95px] h-[40px] flex flex-col items-start justify-start hover:scale-105">
            <p className="text-[14px] font-semibold text-[#3F536C] ">
              Ülkelere Göre Turlar
            </p>
          </div>
        </div>
        <div className=" h-[70px] pl-4  flex flex-row items-center justify-center rounded-xl border-2 relative ">
          <img
            src="https://ucdn.tatilbudur.net/tur/kuzey-isiklari-lapland-murmansk-turu-her-gece-kuzey-isiklari-avcilik-turlari-dahil/400x300/141884.jpg"
            alt="firsat-items"
            className="w-[50px] h-[50px] object-cover rounded-lg mt-2 hover:scale-105"
          />
          <div className="absolute bottom-1/4 left-20 pt-[3px] w-[95px] h-[40px] hover:scale-105 flex flex-col items-start justify-start ">
            <p className="text-[14px] font-semibold text-[#3F536C] ">
              Ülkelere Göre Turlar
            </p>
          </div>
        </div>
        <div className=" h-[70px] pl-4  flex flex-row items-center justify-center rounded-xl border-2 relative ">
          <img
            src="https://ucdn.tatilbudur.net/tur/orta-avrupa-turu-somestr-ozel-3-gece-4-gun/486x290/143739.jpg"
            alt="firsat-items"
            className="w-[50px] h-[50px] object-cover rounded-lg mt-2"
          />
          <div className="absolute bottom-1/4 left-20 pt-[3px] w-[95px] h-[40px] flex flex-col items-start justify-start ">
            <p className="text-[14px] font-semibold text-[#3F536C] ">
              Ülkelere Göre Turlar
            </p>
          </div>
        </div>
        <div className=" h-[70px] pl-4  flex flex-row items-center justify-center rounded-xl border-2 relative ">
          <img
            src="https://ucdn.tatilbudur.net/tur/almanya-polonya-turu-somestre-ozel/400x300/150462.jpg"
            alt="firsat-items"
            className="w-[50px] h-[50px] object-cover rounded-lg mt-2"
          />
          <div className="absolute bottom-1/4 left-20 pt-[3px] w-[95px] h-[40px] flex flex-col items-start justify-start ">
            <p className="text-[14px] font-semibold text-[#3F536C] ">
              Ülkelere Göre Turlar
            </p>
          </div>
        </div>
        <div className=" h-[70px] pl-4  flex flex-row items-center justify-center rounded-xl border-2 relative ">
          <img
            src="https://ucdn.tatilbudur.net/tur/budva-turu-air-montenegro-havayollari-ile-4-gece-promosyon-/400x300/141793.jpg"
            alt="firsat-items"
            className="w-[50px] h-[50px] object-cover rounded-lg mt-2"
          />
          <div className="absolute bottom-1/4 left-20 pt-[3px] w-[95px] h-[40px] flex flex-col items-start justify-start ">
            <p className="text-[14px] font-semibold text-[#3F536C] ">
              Ülkelere Göre Turlar
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
}
