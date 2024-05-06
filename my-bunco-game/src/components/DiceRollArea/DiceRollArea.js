import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./DiceRollArea.css";
import { Box } from "@mui/material";
import { Grid } from "@mui/material";

import dices_1 from "../../assets/dice_1.png";
import dices_2 from "../../assets/dice_2.png";
import dices_3 from "../../assets/dice_3.png";
import dices_4 from "../../assets/dice_4.png";
import dices_5 from "../../assets/dice_5.png";
import dices_6 from "../../assets/dice_6.png";

const dices = [dices_1, dices_2, dices_3, dices_4, dices_5, dices_6];
const dice_values = [1, 2, 3, 4, 5, 6];

const DiceRollArea = () => {
  const [chosenDices, setChosenDices] = useState([]);
  const [chosenDicesValues, setChosenDicesValues] = useState([]);
  const [roundNumber, setRoundNumber] = useState(1);
  const [scoredPoints, setScoredPoints] = useState(0);

  useEffect(() => {
    getRandomDiceImages();
  }, []);

  function getRandomDiceImages() {
    const tempChosenDices = [];
    const dice_value_rdm = [];
    for (let i = 0; i < 3; i++) {
      const randDiceIndex = Math.floor(Math.random() * dices.length);
      tempChosenDices.push(dices[randDiceIndex]);
      dice_value_rdm.push(dice_values[randDiceIndex]);
    }
    setChosenDices(tempChosenDices);
    setChosenDicesValues(dice_value_rdm);
    const points = calculatePoints(dice_value_rdm, roundNumber);
    setScoredPoints((prevScoredPoints) => prevScoredPoints + points); // Update the scored points
  }

  function handleNextRound() {
    if (roundNumber < 6) {
      setRoundNumber(roundNumber + 1); // Increment round number if less than 6
    } else {
      // Handle case when maximum rounds reached
      alert("Maximum rounds reached!");
    }
  }

  function calculatePoints(diceValues, roundNumber) {
    const [dice1, dice2, dice3] = diceValues;
    let points = 0;

    // Award 1 point for each die rolled that matches the current round number
    if (dice1 === roundNumber) points++;
    if (dice2 === roundNumber) points++;
    if (dice3 === roundNumber) points++;

    // Award 5 points if all three dice match each other but not the current round number
    if (dice1 === dice2 && dice2 === dice3 && dice1 !== roundNumber) {
      points += 5;
    }

    // Award 21 points if all three dice match the current round number (a "bunco"),
    // but limit total points to 21
    if (
      dice1 === roundNumber &&
      dice2 === roundNumber &&
      dice3 === roundNumber
    ) {
      points += 21;
    }
    return points;
  }

  return (
    <Box
      sx={{
        backgroundColor: "white",
        borderRadius: "10px", // Adjust the border radius as needed
        padding: "0px 5px 10px 5px", // Adjust the padding as needed
        width: "100%", // Take full width of the parent container
      }}
    >
      <Grid container spacing={0}>
        <Grid item xs={6}>
          <h3>Dice Roll Area</h3>
          <div className="dices-buttons-container">
            {/* Render the dice images based on chosenDices */}
            {chosenDices.map((dice, index) => (
              <img className="dice-img" src={dice} alt={""} key={index} />
            ))}
            <button onClick={getRandomDiceImages} className="button-roll-area">
              Roll Dice
            </button>
            <button onClick={handleNextRound} className="button-roll-area">
              Next Round
            </button>
          </div>
        </Grid>
        <Grid item xs={6}>
          <h3>Scored Points: </h3>
          <Box
            sx={{
              width: "100px",
              height: "50px",
              borderRadius: "5px",
              border: "",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "bold",
              fontSize: "1.5rem",
            }}
          >
            {/* Here, you can dynamically render the score */}
            {scoredPoints}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

DiceRollArea.propTypes = {};

export default DiceRollArea;
