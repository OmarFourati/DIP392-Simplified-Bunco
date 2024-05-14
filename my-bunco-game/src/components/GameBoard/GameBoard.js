import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./GameBoard.css";
import { Box } from "@mui/material";
import { Grid } from "@mui/material";
import { Card } from "@mui/material";
import { Typography } from "@mui/material";
import { CardContent } from "@mui/material";
import { Modal } from "@mui/material";
import Emoji from "react-emojis";

let tablesData = [
  {
    table: "Table 1",
    players: [
      { name: "Omar", score: 0 },
      { name: "Magnus", score: 0 },
      { name: "Youssef", score: 0 },
      { name: "Sysou", score: 0 },
    ],
  },
  {
    table: "Table 2",
    players: [
      { name: "Omar", score: 0 },
      { name: "Maximilian", score: 0 },
      { name: "Helena", score: 0 },
      { name: "Hanna", score: 0 },
    ],
  },
  {
    table: "Table 3",
    players: [
      { name: "Esther", score: 0 },
      { name: "Ezzy", score: 0 },
      { name: "Leonie", score: 0 },
      { name: "Vincent", score: 0 },
    ],
  },
  {
    table: "Table 4",
    players: [
      { name: "Cay", score: 0 },
      { name: "Laurin", score: 0 },
      { name: "Jakob", score: 0 },
      { name: "Ali", score: 0 },
    ],
  },
];

const tableWinners = [];
const playerWinners = [];
const GameBoard = ({
  scores,
  round,
  score,
  setFinalWinnerPlayer,
  setFinalWinnerTable,
  username,
}) => {
  const [updatedTablesData, setUpdatedTablesData] = useState(tablesData);
  const [roundWinnerPlayer, setRoundWinnerPlayer] = useState("");
  const [roundWinnerTable, setRoundWinnerTable] = useState("");
  const [finalWinnerP, setFinalWinnerP] = useState([]);
  const [finalWinnerT, setFinalWinnerT] = useState([]);
  const [nextRoundModalOpen, setNextRoundModalOpen] = useState(false);
  const [finalResultsModalOpen, setFinalResultsModalOpen] = useState(false);

  useEffect(() => {
    // Calculate the accumulated scores
    const accumulatedScores = scores.reduce(
      (acc, score, index) => {
        const tableIndex = Math.floor(index / 4);
        const playerIndex = index % 4;
        acc[tableIndex][playerIndex].score += score;
        return acc;
      },
      [...tablesData.map((table) => table.players)]
    );

    const winner = checkWinner(accumulatedScores);
    setUpdatedTablesData((prevData) =>
      prevData.map((table, index) => ({
        ...table,
        players: table.players.map((player, playerIndex) => ({
          ...player,
          name:
            index === 0 && playerIndex === 0 ? (
              <span
                style={{
                  color: "#db3a34",
                  fontWeight: "bold",
                }}
              >
                {username} (You)
              </span>
            ) : (
              player.name
            ),
          score:
            index === 0 && playerIndex === 0
              ? score
              : accumulatedScores[index][playerIndex].score,
        })),
      }))
    );
    if (winner) {
      setRoundWinnerPlayer(winner.player.name);
      setRoundWinnerTable(winner.tableName);
      playerWinners.push(winner.player.name);
      tableWinners.push(winner.tableName);
    }
  }, [round, scores]);

  const checkWinner = (accumulatedScores) => {
    for (const [tableIndex, table] of accumulatedScores.entries()) {
      for (const [playerIndex, player] of table.entries()) {
        if (player.score >= 21 || score >= 21) {
          // Set array intial values
          if (round === 7) {
            setFinalWinnerPlayer(playerWinners);
            setFinalWinnerTable(tableWinners);
            setFinalResultsModalOpen(true);
          } else {
            setNextRoundModalOpen(true);
          }

          accumulatedScores.forEach((table) => {
            table.forEach((player) => {
              player.score = 0;
            });
          });
          return {
            player: player,
            tableName: tablesData[tableIndex].table,
          }; // Return the winner object
        }
      }
    }
    return null; // No winner found
  };
  const handleCloseWinnerModal = () => {
    setNextRoundModalOpen(false);
  };

  const handleCloseFinalResultModal = () => {
    setFinalResultsModalOpen(false);
  };

  return (
    <Box
      sx={{
        backgroundColor: "white",
        borderRadius: "10px", // Adjust the border radius as needed
        padding: "5px 3px 15px 3px", // Adjust the padding as needed
        width: "100%", // Take full width of the parent container
      }}
    >
      <h3 style={{ paddingLeft: "5px" }}>GameBoard</h3>
      <Grid container spacing={0}>
        <Grid item xs={4} container justifyContent="center" alignItems="center">
          <h4>Round: {round}</h4>
        </Grid>
        <Grid item xs={4} container justifyContent="center" alignItems="center">
          <h4>Previous round winner (player): {roundWinnerPlayer}</h4>
        </Grid>
        <Grid item xs={4} container justifyContent="center" alignItems="center">
          <h4>Previous round winner (table): {roundWinnerTable}</h4>
        </Grid>
      </Grid>
      <Grid container spacing={2} justifyContent="space-around">
        {updatedTablesData.map((table, index) => (
          <Grid item key={index} xs={12} sm={6} md={3}>
            <Card
              sx={{
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)", // Adjust the shadow as needed
                borderRadius: "10px",
              }}
            >
              <CardContent>
                <h3>{table.table}</h3>
                <Grid container spacing={2} alignItems="center">
                  <Grid item xs={12}></Grid>
                  {table.players.map((player, index) => (
                    <Grid item xs={12} key={index}>
                      <Grid container spacing={2} alignItems="center">
                        <Grid item xs={6}>
                          <Typography variant="subtitle1">
                            {player.name}
                          </Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography variant="subtitle2">
                            Score: {player.score}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Modal
        open={finalResultsModalOpen}
        onClose={handleCloseFinalResultModal}
        aria-labelledby="winner-modal-title"
        aria-describedby="winner-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            width: 200,
            color: "white",
            bgcolor: "rgb(8, 76, 97)",
            borderRadius: "10px",
            boxShadow: 24,
            p: 4,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
          }}
        >
          <Emoji emoji="confetti-ball" size="20" />
          <h3>Final Round is over! Congratulations to the winners!</h3>
          <button
            className="close-modal-button"
            onClick={handleCloseFinalResultModal}
          >
            Show Final Results
          </button>
        </Box>
      </Modal>
      <Modal
        open={nextRoundModalOpen}
        onClose={handleCloseWinnerModal}
        aria-labelledby="winner-modal-title"
        aria-describedby="winner-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            width: 200,
            color: "white",
            bgcolor: "rgb(8, 76, 97)",
            borderRadius: "10px",
            boxShadow: 24,
            p: 4,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
          }}
        >
          <h3>Round {round - 1} over!</h3>

          <h3>Winner: </h3>
          <h4 id="winner-modal-description">
            <Emoji emoji="confetti-ball" size="20" />
            Player: {roundWinnerPlayer}
            <Emoji emoji="confetti-ball" size="20" />
          </h4>
          <h4>
            <Emoji emoji="confetti-ball" size="20" />
            Table: {roundWinnerTable}
            <Emoji emoji="confetti-ball" size="20" />
          </h4>
        </Box>
      </Modal>
    </Box>
  );
};

GameBoard.propTypes = {
  scores: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default GameBoard;
