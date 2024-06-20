import React from "react";
import { useTheme } from "next-themes";
import Chart from "react-apexcharts";
import { format } from "@/utils/currency";

const AverageDailySales = () => {
  const theme = useTheme();

  // REACT CHART CATEGORIES LABEL
  const chartCategories = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];

  // REACT CHART DATA SERIES
  const chartSeries = [{ name: "Tasks", data: [22, 30, 46, 50, 46, 30, 22] }];

  const chartOptions = {
    chart: {
      stacked: true,
      toolbar: { show: false },
      background: "transparent",
      marginBottom: 0,
      dropShadow: { enabled: false },
    },
    states: {
      active: { filter: { type: "none" } },
      hover: { filter: { type: "none" } },
    },
    plotOptions: {
      bar: {
        borderRadius: 5,
        distributed: true,
        columnWidth: "50%",
        borderRadiusApplication: "end",
      },
    },
    grid: { show: false },
    legend: { show: false },
    dataLabels: { enabled: false },
    theme: { mode: theme.theme as "dark" | "light" | undefined },
    stroke: { width: 3, curve: "smooth" },
    yaxis: { show: false },
    xaxis: {
      labels: { show: false },
      axisTicks: { show: false },
      axisBorder: { show: false },
      categories: chartCategories,
      crosshairs: {
        show: false,
        opacity: 1,
        fill: { color: "#0D0A08" },
        stroke: { color: "#0D0A08" },
      },
    },
    tooltip: {
      shared: false,
      x: { show: false },
      marker: { show: false },
      style: { fontSize: "14px" },
      y: {
        title: { formatter: () => "" },
        // @ts-ignore
        formatter: function (val: number, { dataPointIndex, w }) {
          return `${w.globals.categoryLabels[dataPointIndex]} : ${format(val)}`;
        },
      },
    },
    markers: {
      strokeWidth: 5,
      strokeOpacity: 0.2,
      strokeColors: "#0D0A08",
    },
    colors: ["#E11C48", "#999999"],
  };

  return (
    <div className="">
      <Chart
        type="bar"
        series={chartSeries}
        // @ts-ignore
        options={chartOptions}
        height="100%"
      />
    </div>
  );
};

export default AverageDailySales;
