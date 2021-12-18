import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import SliderTour from "./SliderTour";
export default function SelectLabels() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="flex flex-col w-full mt-8 gap-y-2">
      <FormControl fullWidth className="bg-white">
        <InputLabel id="demo-simple-select-helper-label">Seç</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={value}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem
            id="1"
            value={"1"}
            onClick={() => {
              setValue("1");
            }}
          >
            <p className="text-[#3F536C] text-[14px] opacity-50 font-semibold ">
              Son Gezdiğiniz Oteller
            </p>
          </MenuItem>

          <MenuItem
            id="2"
            value={"2"}
            onClick={() => {
              setValue("2");
            }}
          >
            <p className="text-[#3F536C] text-[14px] opacity-50 font-semibold ">
              En Çok Aranan Oteller
            </p>
          </MenuItem>
          <MenuItem
            id="3"
            value={"3"}
            onClick={() => {
              setValue("3");
            }}
          >
            <p className="text-[#3F536C] text-[14px] opacity-50 font-semibold ">
              Tükenmek Üzere Olan Oteller
            </p>
          </MenuItem>
        </Select>
      </FormControl>
      <div>
        {value === "1" ? <SliderTour /> : null}
        {value === "2" ? <SliderTour /> : null}
        {value === "3" ? <SliderTour /> : null}
      </div>
    </div>
  );
}
