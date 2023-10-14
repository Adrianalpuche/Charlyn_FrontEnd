import React, { useState, useEffect } from "react";
import { ResponsivePie } from "@nivo/pie";
import data_Set from "../json/data_Set.json";

function Pie() {
  const [deviceData, SetDevice] = useState([]);

  useEffect(() => {
    SetDevice(data_Set.sensors);
  }, []);

  const upDevice = deviceData.filter((device) => device.status === "Up");
  const downDevice = deviceData.filter((device) => device.status === "Down");

  const pieData = [
    { id: "Up", label: "Up", value: upDevice.length },
    { id: "Down", label: "Down", value: downDevice.length },
  ];

  return (
    <div className="flex mt-10 mr-5 bg-white border-2 border-gray-100 ml rounded-3xl">
      <div className="flex flex-col items-center justify-center w-20 h-20 mr-2 bg-red-500">
        <span className="text-lg text-white">{downDevice.length}</span>
        <label className="text-xs text-gray-500">Down</label>
      </div>
      <div className="flex flex-col items-center justify-center w-20 h-20 bg-green-300">
        <span className="text-lg text-white">{upDevice.length}</span>
        <label className="text-xs text-gray-500">Up</label>
      </div>
      <div className="w-full h-96">
        <ResponsivePie
          data={pieData}
          margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
          innerRadius={0.5}
          padAngle={0.7}
          cornerRadius={3}
          colors={['#2FEC93', '#EC2146']}
          borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
          radialLabelsSkipAngle={10}
          radialLabelsTextXOffset={6}
          radialLabelsTextColor="#333333"
          radialLabelsLinkOffset={0}
          radialLabelsLinkDiagonalLength={16}
          radialLabelsLinkHorizontalLength={24}
          radialLabelsLinkStrokeWidth={1}
          radialLabelsLinkColor={{ from: "color" }}
          slicesLabelsSkipAngle={10}
          slicesLabelsTextColor="#333333"
        />
      </div>
    </div>
  );
}

export default Pie;
