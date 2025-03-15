import React from "react";
import Card from "../components/ui/cars/Card";
import { Car } from "@lib/types/types";
import CarList from "../components/ui/cars/CarList";

type Props = {};

const cars: Car[] = [
  {
    name: "Sports Car",
    type: "Mercedes E63s",
    color: "silver",
    motor: {
      serialNumber: 1234,
      hp: 650,
    },
  },
  {
    name: "Luxury Sedan",
    type: "BMW M5",
    color: "black",
    motor: {
      serialNumber: 5678,
      hp: 625,
    },
  },
  {
    name: "Muscle Car",
    type: "Dodge Challenger SRT Hellcat",
    color: "red",
    motor: {
      serialNumber: 9101,
      hp: 717,
    },
  },
  {
    name: "Electric Car",
    type: "Tesla Model S Plaid",
    color: "blue",
    motor: {
      serialNumber: 1121,
      hp: 1020,
    },
  },
  {
    name: "Supercar",
    type: "Lamborghini Huracán Performante",
    color: "yellow",
    motor: {
      serialNumber: 3141,
      hp: 640,
    },
  },
];

export default function page({}: Props) {
  return (
    <div>
      <h1>Cars</h1>
      <CarList cars={cars} />
    </div>
  );
}
