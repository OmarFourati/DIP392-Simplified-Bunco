import React from "react";
import "./FinalScoreTable.css";
import { Grid } from "@mui/material";
import { Box } from "@mui/material";
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";

const FinalScoreTable = ({ finalWinnerPlayer, finalWinnerTable }) => {
  // Function to count occurrences of each table
  const countTableWins = () => {
    const tableCounts = new Map();
    finalWinnerTable.forEach((table) => {
      tableCounts.set(table, (tableCounts.get(table) || 0) + 1);
    });
    return tableCounts;
  };

  // Function to count occurrences of each player
  const countPlayerWins = () => {
    const playerCounts = new Map();
    finalWinnerPlayer.forEach((player) => {
      playerCounts.set(player, (playerCounts.get(player) || 0) + 1);
    });
    return playerCounts;
  };

  const maxTableWins = Math.max(...countTableWins().values());
  const maxPlayerWins = Math.max(...countPlayerWins().values());

  console.log(finalWinnerPlayer);
  console.log(finalWinnerTable);
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
        <Grid item xs={12}>
          <h3 style={{ paddingLeft: "5px" }}>Final Scores</h3>
        </Grid>
      </Grid>
      <Grid container spacing={2} justifyContent={"space-around"}>
        <Grid item xs={6}>
          <Card
            sx={{
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)", // Adjust the shadow as needed
              borderRadius: "10px",
            }}
          >
            <CardContent>
              <h3>Tables</h3>
              {finalWinnerTable?.length === 6 && (
                <div>
                  {/* Count occurrences of each table */}
                  {Array.from(countTableWins()).map(([table, count], index) => (
                    <div
                      key={index}
                      className={count === maxTableWins ? "highlight" : ""}
                    >
                      {table} - Wins: {count}
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card
            sx={{
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)", // Adjust the shadow as needed
              borderRadius: "10px",
            }}
          >
            <CardContent>
              <h3>Players</h3>
              {finalWinnerPlayer?.length === 6 && (
                <div>
                  {/* Count occurrences of each player */}
                  {Array.from(countPlayerWins()).map(
                    ([player, count], index) => (
                      <div
                        key={index}
                        className={count === maxPlayerWins ? "highlight" : ""}
                      >
                        {player} - Wins: {count}
                      </div>
                    )
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

FinalScoreTable.propTypes = {};

export default FinalScoreTable;
