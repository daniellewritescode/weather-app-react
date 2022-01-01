import React from "react";
import "./style.css";

export default function CurrentTime(time) {
let monthsofYear = ["January","February","March","April","May","June","July","August","September","October","November","December"]
let daysofWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
let now = new Date();
let currentMonth = monthsofYear[now.getMonth()];
let currentDay = daysofWeek[now.getDay()];
let currentHours = now.getHours();
let currentMinutes = now.getMinutes();
let currentDate = now.getDate();
let currentYear = now.getFullYear();
if (currentMinutes < 10) {currentMinutes = `0${currentMinutes}`;}
let currentTimeCalc = (`${currentDay}, ${currentMonth} ${currentDate}, ${currentYear} ${currentHours}:${currentMinutes} ET`);

  return <div>{currentTimeCalc}</div>;
}
