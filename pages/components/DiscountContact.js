import React from 'react'

export default function DiscountContact() {
    return (
        <div className="md:w-full md:h-[250px] w-11/12 h-[410px] bg-[#FEC610] flex flex-row  justify-between rounded-3xl overflow-clip">
            <div className="hidden md:flex md:w-[467px] md:h-[250px] ">
                <img src="/images/model.png" alt="modal" className="object-cover h-full rounded-2xl md:pl-4" />
            </div>
            <div className='flex flex-col md:items-start md:justify-start md:w-5/6   md:pl-20 '>
                <p className="text-[#3F536C] md:text-[24px] text-[20px] font-bold p-4">Üyelere özel indirimlere ve harika fiyatlara erişim <br className='md:hidden block' />sağlayın</p>
                <div className="flex md:flex-row flex-col gap-y-2 gap-x-8">
                    <div className="flex flex-col gap-y-4 pl-4 pr-4">
                        <label
                            htmlFor="email"
                            className="flex group relative w-full cursor-pointer focus:stroke-red-700 "
                        >
                            <input
                                inputMode="email"
                                type="email"
                                maxLength="25"
                                autoComplete="cc-number"
                                name="email"
                                id="email"
                                required
                                className="md:w-[335px] bg-[#FEC610] w-full focus:stroke-red-700 h-[50px] px-12 border-[0.5px] border-[#2A5AB3] focus:fill-red-700 focus:border-[#2A5AB3] rounded transition-colors group-hover:border-primary-brand-color outline-none peer text-sm pt-2 focus:text-[#2A5AB3]"
                            />
                            <div className="absolute w-full inset-y-0 left-0 flex items-center px-2 color hover pl-4  focus:stroke-red-700">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16.052" height="12.841" viewBox="0 0 16.052 12.841">
                                    <path id="mail" d="M17.447,6H4.605a1.6,1.6,0,0,0-1.6,1.605L3,17.236a1.61,1.61,0,0,0,1.605,1.605H17.447a1.61,1.61,0,0,0,1.605-1.605V7.605A1.61,1.61,0,0,0,17.447,6Zm0,11.236H4.605V9.21l6.421,4.013L17.447,9.21Zm-6.421-5.618L4.605,7.605H17.447Z" transform="translate(-3 -6)" fill="#2a5ab3" />
                                </svg>

                            </div>
                            <span className="absolute top-0 left-0 h-full px-12 flex items-center text-sm text-gray-500 transition-all peer-focus:h-5 peer-focus:text-primary-brand-color peer-valid:h-5 peer-valid:text-primary-brand-color peer-valid:text-xs">
                                E-Posta Adresiniz
                            </span>
                        </label>

                        <div className="flex gap-x-2 bg-[#FEC610]">

                            <input className="h-5 w-5 checked:bg-[#FEC610] rounded-sm" type="checkbox" value="" id="flexCheckChecked" />
                            <label className=" text-[#4E5C64] text-[14px] inline-block" htmlFor="flexCheckChecked">
                                <strong> %50’ye varan</strong> Fırsat ve Kampanyalardan <br /> haberdar olmak istiyorum
                            </label>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between w-full overflow-hidden ">
                        <button className="md:mt-0 mt-8 z-10 absolute w-[162px] md:w-[116px] h-[50px] text-[#4E5C64] text-[14px] bg-white rounded-3xl font-bold md:ml-0 ml-4 -mb-4">Gönder</button>
                        <div className="md:hidden relative bottom-[50px] left-[100px] pt-8 h-full z-0 overflow-x-hidden">
                            <img src="/images/shutterstock_1464020855.png" alt="model-reverse" className="scale-y-125  object-cover rounded-3xl ml-4" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
