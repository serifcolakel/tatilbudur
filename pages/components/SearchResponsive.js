import React, { useEffect, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";

const data = [
  {
    id: 1,
    title: "Bodrum",
    city: "Muğla",
    country: "Türkiye",
  },
  {
    id: 2,
    title: "Bodrum İçmeler",
    city: "Muğla",
    country: "Türkiye",
  },
  {
    id: 3,
    title: "Bodrum Merkez",
    city: "Muğla",
    country: "Türkiye",
  },
  {
    id: 4,
    title: "Akkan Beach Otel Bodrum",
    city: "Muğla",
    country: "Türkiye",
  },
  {
    id: 5,
    title: "Mandarin Oriental Bodrum",
    city: "Muğla",
    country: "Türkiye",
  },
  {
    id: 6,
    title: "Other Place Bodrum",
    city: "Muğla",
    country: "Türkiye",
  },
  {
    id: 7,
    title: "Luxus",
    city: "Muğla",
    country: "Türkiye",
  },
];
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
const RedditTextField = styled((props) => (
  <TextField InputProps={{ disableUnderline: true }} {...props} />
))(({ theme }) => ({
  "& .MuiFilledInput-root": {
    overflow: "auto",
    color: "#2A5AB3",
    font: "bold",

    backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
}));
export default function SearchResponsive() {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);
  const [state, setState] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const isTyping = search.replace(/\s+/, "").length > 0;
  useEffect(() => {
    if (isTyping) {
      setResult(
        data.filter((item) =>
          item.title.toLowerCase().includes(search.toLowerCase())
        )
      );
    } else {
      setResult([]);
    }
  }, [search]);
  return (
    <div>
      <button
        className="w-full h-[56px] flex flex-row pl-4 items-center justify-start gap-x-4 border-black border-opacity-30 border-[0.5px] rounded-md"
        onClick={handleOpen}
      >
        <img src="/images/Path 40.svg" alt="localation-icon" />
        <span className="text-sm text-gray-500">
          Otel, Şehir, Bölge veya Tema Adı
        </span>
      </button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex  flex-col md:flex-row gap-x-2 gap-y-4 md:pt-2 w-full justify-between relative">
            <Paper
              component="form"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "start",
                ":focus": {
                  border: "1px solid #2A5AB3",
                },
              }}
            >
              <IconButton sx={{ p: "10px" }} aria-label="menu">
                <img
                  src="/images/Path 40.svg"
                  alt="localation-icon"
                  className="pl-2"
                />
              </IconButton>
              <RedditTextField
                onChange={(e) => {
                  setSearch(e.target.value);
                  setState(true);
                }}
                label="Otel, Şehir, Bölge veya Tema Adı"
                value={search}
                id="reddit-input"
                variant="filled"
                className="text-[#2A5AB3] "
              />
              <AiFillCloseCircle className="w-6 h-6 " onClick={handleClose} />
            </Paper>
            {search.length <= 0 && (
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
            {search.length > 0 && state && isTyping && (
              <div className="flex flex-col   w-full shadow-xl bg-white mt-[50px] text-[#6F7E90] h-full">
                <div className="flex flex-row justify-between items-center w-full pt-2">
                  <p className="text-[10px] font-medium ">Bölgeler</p>
                  <div
                    className="hover:cursor-pointer hover:scale-150 scale-110"
                    onClick={() => {
                      setState(!state);
                    }}
                  >
                    <AiFillCloseCircle />
                  </div>
                </div>
                {result.map((item) => (
                  <div
                    onClick={() => {
                      setSearch(item.title);
                      setState(!state);
                    }}
                    key={item.id}
                    className=" flex md:w-full md:h-[40px] items-center hover:cursor-pointer hover:bg-slate-300 hover:text-white hover:rounded-xl  justify-start flex-row gap-x-4 gap-y-4 p-4"
                  >
                    <img src="/images/pin.svg" alt="localation-icon" />
                    <div>
                      <p className="font-bold">{item.title}</p>
                      <p className="text-[10px] ">
                        {item.city}, {item.country}
                      </p>
                    </div>
                  </div>
                ))}
                {result.length === 0 && (
                  <p className="text-red-600">
                    <strong> {search}</strong> ile ilgili sonuç bulunamadı.
                  </p>
                )}
              </div>
            )}
          </div>
        </Box>
      </Modal>
    </div>
  );
}
