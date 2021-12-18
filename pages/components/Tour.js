import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Test from "./TourSlider";
export default function Tour() {
  const [value, setValue] = React.useState("1");

  return (
    <div className="md:w-[1360px] md:h-[730px] h-[544px] mb-4 md:mb-0 w-full bg-[#EDF4FD] text-bghome md:rounded-3xl flex flex-col items-center justify-start overflow-clip">
      <div className="md:w-[1180px] w-full md:pt-16 pt-4 overflow-clip">
        <h1 className="hidden md:flex text-[24px] font-bold md:pb-4">
          Her Zevke Uygun Turları Keşfet{" "}
        </h1>
        <h1 className="md:hidden text-center text-[24px] font-bold ">Tour</h1>

        <Tabs value={value} className="md:block pt-4 md:pt-0">
          <TabList className="flex flex-row justify-between md:flex-col ">
            <div className="flex flex-row object-cover md:gap-x-6 text-center md:text-start md:pt-3 md:pb-3 ">
              <Tab
                id="1"
                className={
                  value === "1"
                    ? "flex flex-row gap-x-2 border-b-2 border-b-[#115BB9]  hover:cursor-pointer  text-[#3F536C] text-[14px] font-semibold "
                    : "flex flex-row gap-x-2 hover:cursor-pointer  text-[#3F536C] text-[14px] opacity-70 font-medium  "
                }
                onClick={() => {
                  setValue("1");
                }}
              >
                <p>Yurt dışı Turları</p>
              </Tab>
              <Tab
                id="2"
                className={
                  value === "2"
                    ? "flex flex-row gap-x-2 border-b-2 border-b-[#115BB9]  hover:cursor-pointer  text-[#3F536C] text-[14px] font-semibold"
                    : "flex flex-row gap-x-2 hover:cursor-pointer  text-[#3F536C] text-[14px] opacity-70 font-medium "
                }
                onClick={() => {
                  setValue("2");
                }}
              >
                Gemi Turları
              </Tab>
              <Tab
                id="3"
                className={
                  value === "3"
                    ? "flex flex-row gap-x-2 border-b-2 border-b-[#115BB9]  hover:cursor-pointer  text-[#3F536C] text-[14px] font-semibold"
                    : "flex flex-row gap-x-2 hover:cursor-pointer  text-[#3F536C] text-[14px] opacity-70 font-medium "
                }
                onClick={() => {
                  setValue("3");
                }}
              >
                Kültür Turları
              </Tab>
              <Tab
                id="4"
                className={
                  value === "4"
                    ? "flex flex-row gap-x-2 border-b-2 border-b-[#115BB9]  hover:cursor-pointer  text-[#3F536C] text-[14px] font-semibold"
                    : "flex flex-row gap-x-2 hover:cursor-pointer  text-[#3F536C] text-[14px] opacity-70 font-medium "
                }
                onClick={() => {
                  setValue("4");
                }}
              >
                Haftasonu Turları
              </Tab>
              <Tab
                id="5"
                className={
                  value === "5"
                    ? "flex flex-row gap-x-2 border-b-2 border-b-[#115BB9]  hover:cursor-pointer  text-[#3F536C] text-[14px] font-semibold"
                    : "flex flex-row gap-x-2 hover:cursor-pointer  text-[#3F536C] text-[14px] opacity-70 font-medium "
                }
                onClick={() => {
                  setValue("5");
                }}
              >
                Mavi Turlar
              </Tab>
            </div>
          </TabList>

          <TabPanel
            id="1"
            value="1"
            className="flex mx-auto items-center justify-center"
          >
            <Test />
          </TabPanel>
          <TabPanel id="2" value="2">
            2
          </TabPanel>
          <TabPanel id="3" value="3">
            3
          </TabPanel>
          <TabPanel id="4" value="4">
            4
          </TabPanel>
          <TabPanel id="4" value="4">
            5
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}
