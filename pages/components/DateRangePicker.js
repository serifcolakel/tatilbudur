import React from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateRangePicker from "@mui/lab/DateRangePicker";
export default function DateRangePickerItem() {
  const [value1, setValue1] = React.useState([null, null]);
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Stack>
          <DateRangePicker
            startText="Konaklama Başlangıç"
            endText="Konaklama Bitiş11"
            value={value1}
            onChange={(newValue) => {
              setValue1(newValue);
            }}
            renderInput={(startProps, endProps) => (
              <React.Fragment>
                <div className="flex flex-col md:flex-row md:gap-x-2 gap-y-4 w-full pb-2 md:pb-0 ">
                  <TextField
                    {...startProps}
                    className="md:w-[140px]  !h-[50px]  !border-gray-200 "
                  />
                  <TextField
                    {...endProps}
                    className="md:w-[140px]  !h-[50px]  !border-gray-200 "
                  />
                </div>
              </React.Fragment>
            )}
          />
        </Stack>
      </LocalizationProvider>
    </div>
  );
}
