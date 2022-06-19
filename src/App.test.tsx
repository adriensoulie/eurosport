import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

function getMatchDate(date: string) {
  let year = date.substring(0, 4);
  let month = date.substring(5, 7);
  let day = date.substring(8, 10);
  return day + "/" + month + "/" + year;
}

function weightLoss(weight: number) {
  return weight / 1000;
}

function heightConvert(height: number) {
  return height / 100;
}

test("it should format the date as DD/MM/YYYY", () => {
  let date = "2022-06-19T14:09:28Z";
  let testresult = getMatchDate(date);
  expect(testresult).toBe("19/06/2022");
});

test("it should convert weight in grams to kilos", () => {
  let weight = 59000;
  let weightresult = weightLoss(weight);
  expect(weightresult).toBe(59);
});

test("it should convert height in cm to meter", () => {
  let height = 175;
  let heightresult = heightConvert(height);
  expect(heightresult).toBe(1.75);
});
