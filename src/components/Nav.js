import React, { useState } from "react";
//styled and animation
import styled from "styled-components";
import { motion } from "framer-motion";
import { fetchGame } from "../actions/gamesAction";
import { useDispatch } from "react-redux";

function Nav() {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");
  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(fetchGame(textInput));
    setTextInput("");
  };
  const claerSearched = () => {
    dispatch({
      type: "CLEAR_SEARCHED",
    });
  };
  return (
    <StyledNav>
      <h1 onClick={claerSearched}>info-game</h1>
      <form className="search">
        <input value={textInput} onChange={inputHandler} type="text" />
        <button onClick={submitHandler} type="submit">
          Search
        </button>
      </form>
    </StyledNav>
  );
}
const StyledNav = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;
  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
  }
  button {
    font-size: 1.5rem;
    cursor: pointer;
    border: none;
    padding: 0.5rem 2rem;
    background: #ff7676;
    color: white;
  }
  h1 {
    cursor: pointer;
  }
`;
export default Nav;
