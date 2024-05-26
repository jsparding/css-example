import React from "react";
import { useParams } from "react-router-dom";

export default function Wotjd36Detail() {
  const { wotjd36Id } = useParams();
  console.log(wotjd36Id);
  return <div> 재성이의 디테일</div>;
}
