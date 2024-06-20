import { ApexOptions } from "apexcharts";
import { format } from "util";

// chart options
export const baseChartOptions = (theme: ApexTheme): ApexOptions => ({
  chart: {
    stacked: true,
    toolbar: { show: false },
    background: "transparent",

    // dropShadow: { enabled: false },
  },

  states: {
    active: { filter: { type: "none" } },
    hover: { filter: { type: "none" } },
  },

  grid: { show: false },
  legend: { show: false },
  dataLabels: { enabled: false },
  theme: { mode: theme as unknown as "dark" | "light" | undefined },
  stroke: { width: 3, curve: "smooth" },

  yaxis: { show: false },

  xaxis: {
    labels: { show: false },
    axisTicks: { show: false },
    axisBorder: { show: false },
    crosshairs: {
      show: false,
      opacity: 1,
      fill: { color: "#1F62FF" },
      stroke: { color: "#1F62FF" },
    },
  },

  tooltip: {
    shared: false,
    x: { show: false },
    marker: { show: false },
    style: { fontSize: "14px" },
    y: {
      title: { formatter: () => "" },
      formatter: function (val: number, { dataPointIndex, w }) {
        return `${w.globals.categoryLabels[dataPointIndex]} : ${format(val)}`;
      },
    },
  },

  markers: {
    strokeWidth: 5,
    strokeOpacity: 0.2,
    strokeColors: "#1F62FF",
  },
});
