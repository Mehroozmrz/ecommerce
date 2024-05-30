import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Paper, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";

export default function Category() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []); // The empty dependency array ensures this effect runs only once after the initial render

  return (
    <div style={{ marginTop: 10 }}>
      <h1 style={{ alignItems: "center", textAlign: "center" }}>Categories</h1>
      <Grid
        container
        spacing={1}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            padding: 3,
            width: 128,
            height: 128,
          },
        }}
      >
        {data.map((item) => (
          <Grid item xs={3} key={item}>
            <Link
              style={{ textDecoration: "none" }}
              to={`/Products/${item?.slug}`}
            >
              <Paper
                elevation={3}
                style={{
                  height: "100%",
                  padding: 3,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography>{item?.name}</Typography>
              </Paper>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
