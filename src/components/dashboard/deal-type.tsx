import { useTheme } from "next-themes";
import React from "react";
import Chart from "react-apexcharts";

const DealType = () => {
  const theme = useTheme();

  // REACT CHART OPTIONS
  const chartOptions = {
    labels: ["Pending", "Won", "Loss"],
    stroke: { colors: [theme.theme === "dark" ? "#1F2938" : "#fff"] },
    colors: ["#17B786", "#C42041", "#6A7381"],

    legend: {
      show: true,
      position: "bottom",
      itemMargin: { horizontal: 7 },
      fontSize: "14px",
    },
    dataLabels: { enabled: false },
    plotOptions: {
      pie: {
        expandOnClick: false,

        donut: {
          size: "75%",
          labels: {
            show: true,
            name: { offsetY: 0 },
            total: {
              show: true,
              showAlways: true,
              label: "Total",
              fontSize: "12px",
              fontWeight: 500,
              color: theme.theme === "dark" ? "#fff" : "#1F2938",
              formatter: function (w: any) {
                return (
                  w.globals.seriesTotals.reduce(
                    (a: number, b: number) => a + b
                  ) + "%"
                );
              },
            },
            value: {
              show: true,
              offsetY: 4,
              fontSize: "18px",
              fontWeight: 500,
              formatter: (val: any) => val,
            },
          },
        },
      },
    },

    tooltip: {
      y: {
        formatter: (val: any) => String(val),
        title: { formatter: (series: any) => series },
      },
    },
  };
  return (
    <div className="space-y-3 border border-gray-100 dark:border-neutral-800 w-full h-full p-5 rounded-lg">
      <h3 className="text-lg font-semibold">Deal Type</h3>
      <Chart
        height={240}
        type="donut"
        // @ts-ignore
        options={chartOptions}
        series={[40, 20, 20]}
      />
    </div>
  );
};

export default DealType;
