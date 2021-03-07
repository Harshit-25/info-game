import React from "react";
//styled and animation
import styled from "styled-components";
import { motion } from "framer-motion";
//Redux
import { useDispatch } from "react-redux";
import { loadGameDetail } from "../actions/gameDetailAction";
import { smallImage } from "../util";

function Game({ name, released, image, id }) {
  const dispatch = useDispatch();
  const loadGameHandler = () => {
    dispatch(loadGameDetail(id));
  };
  return (
    <StyledGame onClick={loadGameHandler}>
      <h3>{name}</h3>
      <p>{released}</p>
      <img src={smallImage(image, 640)} alt={name} />
    </StyledGame>
  );
}
const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  img {
    width: 100%;
    height: 35vh;
    object-fit: cover;
  }
`;

export default Game;
