import { useState } from "react";

const dayOfWeek = [
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
  "Domingo",
];

export default function TimePicker() {
  const hoursOfDay = [];

  for (let i = 0; i < 24; i++) {
    hoursOfDay.push(i.toString().padStart(2, "0") + ":00");
    hoursOfDay.push(i.toString().padStart(2, "0") + ":30");
  }
  return hoursOfDay;
}
