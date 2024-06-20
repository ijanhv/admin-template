import { format } from "@/utils/currency";
import { useTheme } from "next-themes";
import React from "react";
import Chart from "react-apexcharts";

const Revenue = () => {
  const theme = useTheme();
  const chartSeries = [
    {
      name: "Sales",
      data: [8000, 4000, 4500, 17000, 18000, 40000, 20000, 26000, 10000, 20000],
    },
  ];

  // REACT CHART CATEGORIES LABEL
  const chartCategories = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const chartOptions = {
    grid: {
      show: true,
      strokeDashArray: 3,
      borderColor: "rgba(0,0,0,0.1)",
    },
    chart: {
      stacked: true,
      show: true,
      strokeDashArray: 3,
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

    legend: { show: false },
    dataLabels: { enabled: false },
    theme: { mode: theme.theme as "dark" | "light" | undefined },
    stroke: { width: 3, curve: "smooth" },
    yaxis: {
      min: 0,
      show: true,
      max: 50000,
      tickAmount: 5,
      labels: {
        formatter: (value: any) => format(value),
        style: { colors: "#999999" },
      },
    },
    xaxis: {
      axisTicks: { show: false },
      axisBorder: { show: false },
      categories: chartCategories,
      crosshairs: {
        show: true, // Set to true to display crosshairs on hover
        width: 1,
        stroke: {
          color: "#e11b48",
        },
      },
      labels: {
        show: true,
        style: {
          colors: "#999999",
          fontSize: "12px",
          fontFamily: "Inter, sans-serif",
          fontWeight: 400,
          cssClass: "apexcharts-xaxis-label",
        },
      },
    },

    tooltip: {
      enabled: true, // Ensure the tooltip is enabled
      shared: false,
      x: { show: false },
      // marker: { show: false },
      style: { fontSize: "14px", backgroundColor: "transparent" },
      y: {
        title: { formatter: () => "" },
        //   @ts-ignore
        formatter: function (val: number, { dataPointIndex, w }) {
          return `${w.globals.categoryLabels[dataPointIndex]} : ${format(val)}`;
        },
      },
    },
    markers: {
      strokeWidth: 5,
      strokeOpacity: 0.2,
      strokeColors: "#e11b48",
    },
    colors: ["#e11b48", "#999999"],
  };

  return (
    <div>
      <Chart
        type="area"
        height={300}
        series={chartSeries}
        //   @ts-ignore
        options={chartOptions}
      />
    </div>
  );
};

export default Revenue;
