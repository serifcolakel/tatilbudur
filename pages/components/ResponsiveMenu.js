import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { RiCloseFill, RiQuestionnaireFill } from "react-icons/ri";
import { FaUser, FaHotel, FaLastfmSquare } from "react-icons/fa";
import {
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
  MdCampaign,
} from "react-icons/md";
import {
  BsFillTelephoneOutboundFill,
  BsFillChatDotsFill,
  BsFillPhoneVibrateFill,
} from "react-icons/bs";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  height: "100%",
  bgcolor: "background.paper",
  border: "1px solid #3F536C",
  boxShadow: 24,
  p: 4,
};
export default function ResponsiveMenu() {
  const [open, setOpen] = React.useState(false);
  const [state, setState] = React.useState([false, false, false, false]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <div className="md:hidden flex flex-row items-center justify-between mx-auto p-8 w-full h-[70px]">
        <div
          className="flex flex-row items-center gap-x-3 text-[10px] font-extrabold text-[#3F536C]"
          onClick={handleOpen}
        >
          <img src="/images/menu.svg" alt="menu-logo" />
          <p>MENU</p>
        </div>
        <div className="pr-8">
          <img src="/images/Group 849.svg" />
        </div>
        <div>
          <img src="/images/user.svg" />
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex flex-col  text-[#3F536C] gap-y-2 ">
            <div className="flex flex-row  items-center justify-between">
              <FaUser />
              <RiCloseFill onClick={handleClose} className="w-8 h-8" />
            </div>
            <p className="text-[14px] ">
              Giriş yaptığınızda daha düşük fiyatlar görürsünüz!
            </p>
            <button className="w-[194px] h-[36px] text-[14px] font-medium  rounded-full bg-[#2A5AB3] text-white ">
              Üye Olun / Giriş Yapın
            </button>
            <div className="flex flex-col justify-center divide-y-[1px] divide-[#CFD4DA]">
              <div className="flex flex-row items-center justify-between py-4">
                <div className="flex flex-row gap-x-4 items-center">
                  <FaHotel />
                  <p className="text-base  ">Oteller</p>
                </div>
                <MdKeyboardArrowUp
                  className={!state[0] ? "hidden" : "w-6 h-6 text-[#CFD4DA] "}
                  onClick={() => {
                    setState([!state[0], false, false, false]);
                  }}
                />
                <MdKeyboardArrowDown
                  className={!state[0] ? "w-6 h-6 text-[#CFD4DA] " : "hidden"}
                  onClick={() => {
                    setState([!state[0], false, false, false]);
                  }}
                />
              </div>
              {state[0] && (
                <div className="flex flex-col items-center justify-center ml-10 gap-y-2 py-8 bg-[#CFD4DA] bg-opacity-20 rounded-xl ">
                  <div className="flex flex-row items-center w-[219px] h-[50px] gap-x-4 p-4  rounded-lg border-[0.5px] hover:bg-[#CFD4DA] hover:bg-opacity-20 hover:cursor-pointer ">
                    <img
                      src="/images/Scroll Group 38.png"
                      alt="otels-item"
                      className="w-9 h-9 object-cover rounded-full"
                    />
                    <p className="text-[#3F536C] text-[12px] opacity-70 text-center">
                      Yurt İçi Otelleri
                    </p>
                  </div>
                  <div className="flex flex-row items-center w-[219px] h-[50px] gap-x-4 p-4  rounded-lg border-[0.5px] hover:bg-[#CFD4DA] hover:bg-opacity-20 hover:cursor-pointer ">
                    <img
                      src="/images/Image 41.png"
                      alt="otels-item"
                      className="w-9 h-9 object-cover rounded-full"
                    />
                    <p className="text-[#3F536C] text-[12px] opacity-70 text-center">
                      Termal Oteller
                    </p>
                  </div>
                  <div className="flex flex-row items-center w-[219px] h-[50px] gap-x-4 p-4  rounded-lg border-[0.5px] hover:bg-[#CFD4DA] hover:bg-opacity-20 hover:cursor-pointer ">
                    <img
                      src="/images/Scroll Group 41.png"
                      alt="otels-item"
                      className="w-9 h-9 object-cover rounded-full"
                    />
                    <p className="text-[#3F536C] text-[12px] opacity-70 text-center">
                      Kıbrıs Otelleri
                    </p>
                  </div>
                  <div className="flex flex-row items-center w-[219px] h-[50px] gap-x-4 p-4  rounded-lg border-[0.5px] hover:bg-[#CFD4DA] hover:bg-opacity-20 hover:cursor-pointer ">
                    <img
                      src="/images/Scroll Group 42.png"
                      alt="otels-item"
                      className="w-9 h-9 object-cover rounded-full"
                    />
                    <p className="text-[#3F536C] text-[12px] opacity-70 text-center">
                      Şehir Otelleri
                    </p>
                  </div>
                  <div className="flex flex-row items-center w-[219px] h-[50px] gap-x-4 p-4  rounded-lg border-[0.5px] hover:bg-[#CFD4DA] hover:bg-opacity-20 hover:cursor-pointer ">
                    <img
                      src="/images/Image 54.png"
                      alt="otels-item"
                      className="w-9 h-9 object-cover rounded-full"
                    />
                    <p className="text-[#3F536C] text-[12px] opacity-70 text-center">
                      Kayak Otelleri
                    </p>
                  </div>
                  <div className="flex flex-row items-center w-[219px] h-[50px] gap-x-4 p-4  rounded-lg border-[0.5px] hover:bg-[#CFD4DA] hover:bg-opacity-20 hover:cursor-pointer ">
                    <img
                      src="/images/Image 54.png"
                      alt="otels-item"
                      className="w-9 h-9 object-cover rounded-full"
                    />
                    <p className="text-[#3F536C] text-[12px] opacity-70 text-center">
                      Şehir Otelleri
                    </p>
                  </div>
                  <div className="flex flex-row items-center w-[219px] h-[50px] gap-x-4 p-4  rounded-lg border-[0.5px] hover:bg-[#CFD4DA] hover:bg-opacity-20 hover:cursor-pointer ">
                    <img
                      src="/images/Image 54.png"
                      alt="otels-item"
                      className="w-9 h-9 object-cover rounded-full"
                    />
                    <p className="text-[#3F536C] text-[12px] opacity-70 text-center">
                      Weekend Otells
                    </p>
                  </div>
                </div>
              )}

              <div className="flex flex-row items-center justify-between py-4">
                <div className="flex flex-row gap-x-4 items-center">
                  <img src="/images/Path 40.svg" alt="localation-icon" />
                  <p className="text-base">Uçuşlar</p>
                </div>
                <MdKeyboardArrowUp
                  className={!state[1] ? "hidden" : "w-6 h-6 text-[#CFD4DA] "}
                  onClick={() => {
                    setState([false, !state[1], false, false]);
                  }}
                />
                <MdKeyboardArrowDown
                  className={!state[1] ? "w-6 h-6 text-[#CFD4DA] " : "hidden"}
                  onClick={() => {
                    setState([false, !state[1], false, false]);
                  }}
                />
              </div>
              {state[1] && "Üzerinde çalışıyorum."}
              <div className="flex flex-row items-center justify-between py-4">
                <div className="flex flex-row gap-x-4 items-center">
                  <FaHotel />
                  <p className="text-base">Turlar</p>
                </div>
                <MdKeyboardArrowUp
                  className={!state[2] ? "hidden" : "w-6 h-6 text-[#CFD4DA] "}
                  onClick={() => {
                    setState([false, false, !state[2], false]);
                  }}
                />
                <MdKeyboardArrowDown
                  className={!state[2] ? "w-6 h-6 text-[#CFD4DA] " : "hidden"}
                  onClick={() => {
                    setState([false, false, !state[2], false]);
                  }}
                />
              </div>
              {state[2] && (
                <div className="flex flex-col items-center justify-center ml-10 gap-y-2 py-8 bg-[#CFD4DA] bg-opacity-20 rounded-xl ">
                  <div className="flex flex-row items-center w-[219px] h-[50px] gap-x-4 p-4  rounded-lg border-[0.5px] hover:bg-[#CFD4DA] hover:bg-opacity-20 hover:cursor-pointer ">
                    <img
                      src="/images/Scroll Group 38.png"
                      alt="otels-item"
                      className="w-9 h-9 object-cover rounded-full"
                    />
                    <p className="text-[#3F536C] text-[12px] opacity-70 text-center">
                      Kültür Turları
                    </p>
                  </div>
                  <div className="flex flex-row items-center w-[219px] h-[50px] gap-x-4 p-4  rounded-lg border-[0.5px] hover:bg-[#CFD4DA] hover:bg-opacity-20 hover:cursor-pointer ">
                    <img
                      src="/images/Image 41.png"
                      alt="otels-item"
                      className="w-9 h-9 object-cover rounded-full"
                    />
                    <p className="text-[#3F536C] text-[12px] opacity-70 text-center">
                      Yurtdışı Turları
                    </p>
                  </div>
                  <div className="flex flex-row items-center w-[219px] h-[50px] gap-x-4 p-4  rounded-lg border-[0.5px] hover:bg-[#CFD4DA] hover:bg-opacity-20 hover:cursor-pointer ">
                    <img
                      src="/images/Scroll Group 41.png"
                      alt="otels-item"
                      className="w-9 h-9 object-cover rounded-full"
                    />
                    <p className="text-[#3F536C] text-[12px] opacity-70 text-center">
                      Yurtdışı Tur Temalar
                    </p>
                  </div>
                  <div className="flex flex-row items-center w-[219px] h-[50px] gap-x-4 p-4  rounded-lg border-[0.5px] hover:bg-[#CFD4DA] hover:bg-opacity-20 hover:cursor-pointer ">
                    <img
                      src="/images/Scroll Group 42.png"
                      alt="otels-item"
                      className="w-9 h-9 object-cover rounded-full"
                    />
                    <p className="text-[#3F536C] text-[12px] opacity-70 text-center">
                      Gemi Turları
                    </p>
                  </div>
                </div>
              )}
              <div className="flex flex-row items-center justify-between py-4">
                <div className="flex flex-row gap-x-4 items-center">
                  <MdCampaign />
                  <p className="text-base">Kampanyalar</p>
                </div>
                <MdKeyboardArrowUp
                  className={!state[3] ? "hidden" : "w-6 h-6 text-[#CFD4DA] "}
                  onClick={() => {
                    setState([false, false, false, !state[3]]);
                  }}
                />
                <MdKeyboardArrowDown
                  className={!state[3] ? "w-6 h-6 text-[#CFD4DA] " : "hidden"}
                  onClick={() => {
                    setState([false, false, false, !state[3]]);
                  }}
                />
              </div>
              {state[3] && "Üzerinde çalışıyorum... "}
            </div>
            <div className="flex flex-col gap-y-4 pb-6 border-b-[1px] border-[#CFD4DA">
              <p className="text-[12px] opacity-50 pb-6 border-t-[1px] border-[#CFD4DA] pt-6">
                YARDIM{" "}
              </p>
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row gap-x-4 items-center">
                  <BsFillTelephoneOutboundFill />
                  <p className="text-base  ">Müşteri İlişkileri </p>
                </div>
                <p className="text-[14px]">0 850 333 3 333</p>
              </div>
              <div className="flex flex-row gap-x-4 items-center">
                <BsFillChatDotsFill />
                <p className="text-base  ">Canlı Yardım</p>
              </div>
              <div className="flex flex-row gap-x-4 items-center">
                <RiQuestionnaireFill />
                <p className="text-base  ">Sıkça Sorulan Sorular </p>
              </div>
            </div>
            <div className="flex flex-row gap-x-4 items-center">
              <BsFillPhoneVibrateFill />
              <p className="text-base  ">Uygulamayı İndirin </p>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
}
