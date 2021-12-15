import React, { useEffect } from "react";

export default function Article() {
  const [show, setShow] = React.useState([false, false, false]);

  return (
    <div className="md:flex md:flex-col md:w-[1180px] pt-8 hidden md:gap-y-4 ">
      <p className="text-[#3F536C] text-[16px] font-semibold">
        Daha Fazla Tatil, TatilBudur!
      </p>
      <p className="text-[#3F536C] text-[14px] font-light pb-4">
        1997 yılından bu yana binlerce kişiye otel, tur, uçak ve organizasyon
        hizmetleri sunan markamız, her geçen gün daha da büyüyerek hayalinizdeki
        tatili uygun fiyatlarla gerçeğe çevirme fırsatı sunuyor.
      </p>

      <p className="text-[#3F536C] text-[16px] font-semibold">
        En Uygun Tatil Fırsatları
      </p>
      <p className="text-[#3F536C] text-[14px] font-light pb-4">
        Tatilbudur.com ile unutulmaz bir tatil deneyimine hazır mısınız? Hem
        yurt içinde hem de yurt dışında birbirinden farklı konaklama seçenekleri
        ve zengin içerikli turlarıyla bütçenizi sarsmayacak tatil fırsatlarını
        sizlerle buluşturan acentemiz, otel ve tur hizmetleriyle kaliteli
        hizmetin yeni adresi olma yolunda ilerliyor.
      </p>

      <div className="flex flex-col items-start  gap-y-4">
        <p className="text-[#3F536C] text-[16px] font-semibold">
          Tatil Fiyatları
        </p>
        <p
          className={
            show[0]
              ? "text-[#3F536C] text-[14px] font-light pb-4"
              : "text-[#3F536C] text-[14px] font-light pb-4 h-[44px] overflow-clip "
          }
        >
          Tatilbudur.com’da birçok farklı ve değişik uygun fiyatlı tatil
          önerileri sizler için bir araya geliyor. Yapacağınız tek şey hayal
          ettiğiniz tatili seçmek. Yüzlerce farklı <br />
          <span
            className={
              show[0] ? "text-[#3F536C]" : "text-[#3F536C] text-opacity-30"
            }
          >
            lokasyonda her zaman istediğiniz tatile uygun fiyat garantisiyle
            çıkabilir, seyahat planınızı sorunsuzca planlayabilirsiniz. Size en
            uygun tatil seçeneklerini <br /> inceleyerek dilediğiniz tatile bir
            adım daha yaklaşabilirsiniz. Uygun fiyatlı otel ve tur
            seçenekleriyle tatil severlerin en çok tercih ettiği online seyahat
            acentelerinden birisi olan web sitemizde çok sayıda tatil fırsatı
            bulabilirsiniz. Dilerseniz muhteşem bir balayı tatili yapın veya
            kültür turlarıyla bilgi hazinenize yeni yerler ekleyin. Dilerseniz
            de farklı ülkeleri keşfedin. Size en uygun avantajlı tatil
            fırsatlarını web sitemizde bulabilir, peşin fiyatına taksit
            imkanlarından yararlanabilirsiniz.
          </span>
        </p>
        <button
          className="text-[#115BB9] text-[14px] font-bold "
          onClick={() => {
            setShow([!show[0], false, false]);
          }}
        >
          {show[0] ? "Daralt" : "Devamını Oku"}
        </button>
      </div>
      <div className="flex flex-col items-start  gap-y-4">
        <p className="text-[#3F536C] text-[16px] font-semibold">
          Türkiye’de En Güzel Tatil Yerleri
        </p>
        <p
          className={
            show[1]
              ? "text-[#3F536C] text-[14px] font-light pb-4"
              : "text-[#3F536C] text-[14px] font-light pb-4 h-[44px] overflow-clip "
          }
        >
          Herkesin en sevdiği rotalardan birisi olan Ege ve Akdeniz bölgesinde
          birçok farklı içeriklere sahip tur düzenleniyor. Likya Turları, Karya
          Turları, Kuzey Ege Turları, <br />
          <span
            className={
              show[1] ? "text-[#3F536C]" : "text-[#3F536C] text-opacity-30"
            }
          >
            Salda ve Göller Yöresi Turları, Ege-Akdeniz Turları ve Karadeniz
            Turlarıyla çok sayıda yeni lokasyonu keşfedebilirsiniz. Karadeniz
            Turlarıyla; Ordu’yu, Trabzon’u,
            <br /> Rize’yi, Artvin’i ve Batum’u ziyaret edebilirsiniz. Üstelik
            Gap ve Doğu Anadolu turları diğer kültür turları kadar ilgi görüyor.
            Kültür, gastronomi ve tarihi birikime doyacağınız Gap turlarını da
            inceleyebilirsiniz. Talebe göre sıklıkla düzenlenen tatil turları,
            birbirinden zengin içerikleriyle sizleri bekliyor. Tatilbudur.com’un
            sömestir, yılbaşı, 23 Nisan, 19 Mayıs, Ramazan Bayramı, Şeker
            Bayramı gibi özel günlerde mevcut olan kültür turlarına daha uygun
            fiyatlarla rezervasyon yaptırabilir ve taksit imkanlarından
            faydalanabilirsiniz. Web sitemizde aynı zamanda günübirlik ve hafta
            sonu turları da bulunuyor. Hızlı geçen haftanın sonunda keyifli bir
            mola verip, farklı ve eğlenceli hafta sonu geçirebilirsiniz.
          </span>
        </p>
        <button
          className="text-[#115BB9] text-[14px] font-bold "
          onClick={() => {
            setShow([false, !show[1], false]);
          }}
        >
          {show[1] ? "Daralt" : "Devamını Oku"}
        </button>
      </div>
      <div className="flex flex-col items-start  gap-y-4">
        <p className="text-[#3F536C] text-[16px] font-semibold">
          Dünyanın En Güzel Tatil Yerleri
        </p>
        <p
          className={
            show[2]
              ? "text-[#3F536C] text-[14px] font-light pb-4"
              : "text-[#3F536C] text-[14px] font-light pb-4 h-[44px] overflow-clip "
          }
        >
          Eğer tatilinizi yurt dışında geçirmeye karar verdiyseniz
          Tatilbudur.com’un geniş içeriğe sahip tur ve gezi programları, vize
          işlemleri, transfer imkanı, vizesiz ve <br />
          <span
            className={
              show[2] ? "text-[#3F536C]" : "text-[#3F536C] text-opacity-30"
            }
          >
            uygun fiyatlı yurt dışı tur seçenekleri, kalıpların dışına çıkmış
            farklı tatil rotaları, otobüsle veya uçakla ulaşım olanakları,
            profesyonel rehberleri ve daha fazla <br /> ayrıcalıkla muhteşem bir
            yurt dışı tatili yapabilirsiniz. Dünyanın en güzel rotalarını
            keşfetme planlarınız varsa Asya kıtasından Avrupa kıtasına kadar
            uzanan yurt dışı tur seçenekleriyle benzersiz maceralara siz de
            atılabilirsiniz.
          </span>
        </p>
        <button
          className="text-[#115BB9] text-[14px] font-bold "
          onClick={() => {
            setShow([false, false, !show[2]]);
          }}
        >
          {show[2] ? "Daralt" : "Devamını Oku"}
        </button>
      </div>
    </div>
  );
}
