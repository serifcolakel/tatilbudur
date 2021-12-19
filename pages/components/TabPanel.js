import React, { useState } from "react";
import DateRangePickerItem from "./DateRangePicker";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import SearchResponsive from "./SearchResponsive";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  height: "100%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export default function TabPanelFirst(props) {
  const [person, setPerson] = useState(0);
  const [child, setChild] = useState(0);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { text1, text2, text3, button1 } = props;
  return (
    <div className="md:hidden flex flex-col  gap-x-2 gap-y-2  w-full just ">
      <SearchResponsive />
      <DateRangePickerItem />

      <button
        className="w-full h-[56px] flex flex-row pl-4 items-center justify-start gap-x-4 border-black border-opacity-30 border-[0.5px] rounded-md"
        onClick={handleOpen}
      >
        <img src="/images/Group 687.svg" alt="bed-icon" />
        <span className="text-sm text-gray-500">{text3}</span>
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <label
            htmlFor="text"
            className="flex flex-col w-full md:w-[220px]   "
          >
            <div className="flex flex-row w-full h-[56px] border-[1px] rounded-lg justify-between items-center pl-4 pr-4">
              <img src="/images/Group 687.svg" alt="tab-icon" />
              <p className="text-sm">
                {person} Yetişkin {child} Çocuk{" "}
              </p>
              <span className=" text-sm  transition-all peer-focus:h-5 peer-focus:text-primary-brand-color peer-valid:h-5 peer-valid:text-primary-brand-color peer-valid:text-xs">
                Kişi Sayısı
              </span>
              <div onClick={handleClose}>x</div>
            </div>

            <div className=" top-[56px] left-0 w-full md:w-[220px] bg-white shadow-xl z-50 md:h-[300px] text-[#3F536C] pl-4 pt-8 pr-4 rounded-b-lg flex flex-col gap-y-6 overflow-auto">
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
              <div
                className="border-t-2 pt-4 pb-4"
                onClick={() => {
                  alert(
                    "Şu anda veritabanına erişemiyoruz.Teknik aksaklıktan dolayı özür dileriz."
                  );
                }}
              >
                <button className="w-full rounded-xl h-10 bg-[#3659AD] text-white text-[14px] font-medium hover:text-[#3659AD] hover:bg-white hover:border-2 hover:border-[#3659AD] ">
                  Uygula
                </button>
              </div>
            </div>
          </label>
        </Box>
      </Modal>
      <div>
        <button
          className="w-full  h-[56px] bg-[#2A5AB3] text-white rounded-3xl mx-auto hover:scale-105 "
          onClick={() => {
            alert(
              "Şu anda veritabanına erişemiyoruz.Teknik aksaklıktan dolayı özür dileriz."
            );
          }}
        >
          {button1}
        </button>
      </div>
    </div>
  );
}
