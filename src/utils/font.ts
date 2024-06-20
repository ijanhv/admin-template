/* eslint-disable camelcase */
/* eslint-disable new-cap */
import { Open_Sans, Quicksand, Montserrat, Poppins } from "next/font/google";
import { Jost } from "next/font/google";

export const quickSand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quick",
  weight: ["300", "400", "500", "600", "700"],
});

export const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});
