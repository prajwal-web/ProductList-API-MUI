import { useState, useEffect } from "react";
import getProductsApi from "../Components/getProductsApi";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid"; // Import Grid from MUI

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductsApi().then((data) => {
      setProducts(data);
      console.log(data);
    });
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography>{product.category}</Typography>
                <Typography variant="h5" component="div">
                  {product.title}
                </Typography>
                <Typography>{product.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ProductList;
