import React from "react";
//styled and animation
import styled from "styled-components";
import { motion } from "framer-motion";
//Redux
import { useSelector } from "react-redux";

function GmaeDetails() {
  const { game, screen } = useSelector((state) => state.detail);

  return <div></div>;
}

export default GmaeDetails;
