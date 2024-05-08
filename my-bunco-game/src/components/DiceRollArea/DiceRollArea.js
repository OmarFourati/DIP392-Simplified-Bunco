import React, { useState } from "react";
import PropTypes from "prop-types";
import "./DiceRollArea.css";
import { Box, CircularProgress } from "@mui/material";
import { Grid } from "@mui/material";

import dices_1 from "../../assets/dice_1.png";
import dices_2 from "../../assets/dice_2.png";
import dices_3 from "../../assets/dice_3.png";
import dices_4 from "../../assets/dice_4.png";
import dices_5 from "../../assets/dice_5.png";
import dices_6 from "../../assets/dice_6.png";

const dices = [dices_1, dices_2, dices_3, dices_4, dices_5, dices_6];
const dice_values = [1, 2, 3, 4, 5, 6];
let overall_player_score = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

const DiceRollArea = ({
  selectedDifficulty,
  updateIAPlayerScore,
  updateRound,
  sendScore,
}) => {
  const [chosenDices, setChosenDices] = useState([]);
  const [chosenDicesValues, setChosenDicesValues] = useState([]);
  const [roundNumber, setRoundNumber] = useState(1);
  const [scoredPoints, setScoredPoints] = useState(0);
  const [IAPlayerScore, setIAPlayerScore] = useState([]);

  // useEffect(() => {
  //   getRandomDiceImages();
  // }, []);

  function getRandomDiceImages() {
    const difficulty = selectedDifficulty;
    const round = roundNumber;
    const tempChosenDices = [];
    const dice_value_rdm = [];
    for (let i = 0; i < 3; i++) {
      let randDiceIndex = Math.floor(Math.random() * dices.length);
      const chance = Math.random(); // Random chance between 0 and 1
      if (difficulty === "easy") {
        // Always choose a random dice number for easy difficulty
        randDiceIndex = Math.floor(Math.random() * dices.length);
      } else if (difficulty === "medium") {
        // Reduce the probability for medium difficulty
        if (chance < 0.9) {
          randDiceIndex = Math.floor(Math.random() * dices.length);
        } else {
          // Choose a dice number that's not equal to the round number
          do {
            randDiceIndex = Math.floor(Math.random() * dices.length);
          } while (dice_values[randDiceIndex] === round);
        }
      } else if (difficulty === "hard") {
        // Reduce the probability for hard difficulty
        if (chance < 0.8) {
          randDiceIndex = Math.floor(Math.random() * dices.length);
        } else {
          // Choose a dice number that's not equal to the round number
          do {
            randDiceIndex = Math.floor(Math.random() * dices.length);
          } while (dice_values[randDiceIndex] === round);
        }
      }
      tempChosenDices.push(dices[randDiceIndex]);
      dice_value_rdm.push(dice_values[randDiceIndex]);
    }
    setChosenDices(tempChosenDices);
    setChosenDicesValues(dice_value_rdm);
    const points = calculatePoints(dice_value_rdm, roundNumber);
    setScoredPoints((prevScoredPoints) => prevScoredPoints + points); // Update the scored points
    calculate_player_scores();
    if (
      scoredPoints === 21 ||
      overall_player_score.some((score) => score >= 21)
    ) {
      handleNextRound();
    }
  }
  sendScore(scoredPoints);
  // console.log(scoredPoints);
  // console.log(overall_player_score);

  function calculate_player_scores() {
    let track_other_player_score = [];
    let otherPlayerScore = [];
    const round = roundNumber;
    for (let index = 0; index < 16; index++) {
      const dice_value_rdm = [];
      for (let i = 0; i < 3; i++) {
        let randDiceIndex = Math.floor(Math.random() * dices.length);
        dice_value_rdm.push(dice_values[randDiceIndex]);
      }
      otherPlayerScore.push(calculatePoints(dice_value_rdm, round));
      track_other_player_score.push(calculatePoints(dice_value_rdm, round));
    }
    setIAPlayerScore(otherPlayerScore);

    // keep track of scores
    for (let index = 0; index < track_other_player_score.length; index++) {
      overall_player_score[index] += track_other_player_score[index];
    }
  }
  updateIAPlayerScore(IAPlayerScore);
  console.log(roundNumber);
  function handleNextRound() {
    if (roundNumber < 7) {
      setRoundNumber(roundNumber + 1); // Increment round number if less than 6
      setScoredPoints(0);
      overall_player_score = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    }
    console.log(roundNumber);
  }
  updateRound(roundNumber);

  function calculatePoints(diceValues, roundNumber) {
    const [dice1, dice2, dice3] = diceValues;
    let points = 0;

    // Check for bunco first (all three dice match the round number)
    if (
      dice1 === roundNumber &&
      dice2 === roundNumber &&
      dice3 === roundNumber
    ) {
      points = 21; // Award 21 points for bunco and stop further checks
    } else {
      // Check for other scoring conditions if no bunco
      if (dice1 === dice2 && dice2 === dice3 && dice1 !== roundNumber) {
        points = 5; // Award 5 points for three matching dice (not round number)
      } else {
        // Check for individual matching dice (optional)
        // You can uncomment this block to award 1 point for each matching die
        if (dice1 === roundNumber) points++;
        if (dice2 === roundNumber) points++;
        if (dice3 === roundNumber) points++;
      }
    }
    return points;
  }
  return (
    <Box
      sx={{
        backgroundColor: "white",
        borderRadius: "10px", // Adjust the border radius as needed
        padding: "0px 3px 10px 3px", // Adjust the padding as needed
        width: "100%", // Take full width of the parent container
      }}
    >
      <Grid container spacing={0}>
        <Grid item xs={6}>
          <h3 style={{ paddingLeft: "5px" }}>Dice Roll Area</h3>
          <div className="dices-buttons-container">
            {/* Render the dice images based on chosenDices */}
            {chosenDices.map((dice, index) => (
              <img className="dice-img" src={dice} alt={""} key={index} />
            ))}
            <Grid item xs={6}>
              <button
                onClick={getRandomDiceImages}
                className="button-roll-area"
                style={{ margin: "0 auto" }}
              >
                Roll Dice
              </button>
            </Grid>
          </div>
        </Grid>
        <Grid item xs={6}>
          <h3>Scored Points: </h3>
          <Box
            sx={{
              width: "100px",
              height: "50px",
              borderRadius: "10px",
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

DiceRollArea.propTypes = {
  selectedDifficulty: PropTypes.string,
};

export default DiceRollArea;
