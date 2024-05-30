import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

function Products() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { categoryName } = useParams();

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/category/${categoryName}`)
      .then((response) => {
        setData(response.data.products);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []); // The empty dependency array ensures this effect runs only once after the initial render

  return (
    <div style={{ padding: 10 }}>
      <Grid
        container
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent:'center',
          gap:3,
          "& > :not(style)": {},
        }}
      >
         {data.map(item => (
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="300"
            image={item?.thumbnail}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item?.title} 
            </Typography>
            <Typography gutterBottom variant="body2" color="text.secondary"  >
              {item?.category} 
            </Typography>
            <Typography variant="body2" color="text.secondary">
             {item?.description}
            </Typography>
          </CardContent>
          <CardActions>
          <Typography variant="h5" >
          ₹{item.price}
            </Typography>
           
            <Typography variant="h5" style={{textAlign:'end',width:'100%'}} >
          {item.brand}
            </Typography>
           
          </CardActions>
        </Card>))}
      </Grid>
    </div>
  );
}

export default Products;
