import React from "react";
import Card from "../components/ui/cars/Card";
import { Car } from "@lib/types/types";

type Props = {};


  

const car: Car = {
  name: "Sports Car",
  type: "Mercedes E63s",
  color: "silver",
  motor: {
    serialNumber: 1234,
    hp: 650,
  },
};

export default function page({}: Props) {
  return (
    <div>
      <h1>Cars</h1>
      <Card car={car} />
    </div>
  );
}
