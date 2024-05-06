import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./GameBoard.css";
import { Box } from "@mui/material";
import { Grid } from "@mui/material";
import { Card } from "@mui/material";
import { Typography } from "@mui/material";
import { CardContent } from "@mui/material";

const tablesData = [
  {
    table: "Table 1",
    players: [
      { name: "Alice", score: 0 },
      { name: "Bob", score: 0 },
      { name: "Charlie", score: 0 },
      { name: "David", score: 0 },
    ],
  },
  {
    table: "Table 2",
    players: [
      { name: "Eva", score: 0 },
      { name: "Frank", score: 0 },
      { name: "Grace", score: 0 },
      { name: "Hannah", score: 0 },
    ],
  },
  {
    table: "Table 3",
    players: [
      { name: "Isaac", score: 0 },
      { name: "Jack", score: 0 },
      { name: "Kelly", score: 0 },
      { name: "Liam", score: 0 },
    ],
  },
  {
    table: "Table 4",
    players: [
      { name: "Mary", score: 0 },
      { name: "Nathan", score: 0 },
      { name: "Olivia", score: 0 },
      { name: "Peter", score: 0 },
    ],
  },
];
const GameBoard = () => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        borderRadius: "10px", // Adjust the border radius as needed
        padding: "5px 5px 15px 5px", // Adjust the padding as needed
        width: "100%", // Take full width of the parent container
      }}
    >
      <h3>GameBoard</h3>
      <Grid container spacing={0}>
        <Grid item xs={4} container justifyContent="center" alignItems="center">
          <h4>Round: </h4>
        </Grid>
        <Grid item xs={4} container justifyContent="center" alignItems="center">
          <h4>Previous round winner (player): </h4>
        </Grid>
        <Grid item xs={4} container justifyContent="center" alignItems="center">
          <h4>Previous round winner (table): </h4>
        </Grid>
      </Grid>
      <Grid container spacing={2} justifyContent="space-around">
        {tablesData.map((table, index) => (
          <Grid item key={index} xs={12} sm={6} md={3}>
            <Card
              sx={{
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)", // Adjust the shadow as needed
              }}
            >
              <CardContent>
                <h3>{table.table}</h3>
                {table.players.map((player, index) => (
                  <div key={index}>
                    <Typography variant="subtitle1">{player.name}</Typography>
                    <Typography variant="subtitle2">
                      Score: {player.score}
                    </Typography>
                  </div>
                ))}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

GameBoard.propTypes = {};

export default GameBoard;
