import { useState, useEffect } from "react";
import getProductsApi from "../Components/getProductsApi";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ImageListItem from "@mui/material/ImageListItem";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";

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
            <Card sx={{ minWidth: 275, height: 300 }}>
              <CardContent>
                <Box
                  component="img"
                  sx={{
                    height: 100,
                    width: 100,
                    maxHeight: { xs: 233, md: 167 },
                    maxWidth: { xs: 350, md: 250 },
                  }}
                  alt={product.title}
                  src={product.image}
                />
                <Typography>{product.category}</Typography>
                <Typography variant="h5" component="div">
                  {product.title.slice(0, 20)}
                </Typography>
                <Typography>{product.description.slice(0, 42)}</Typography>
                <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                  <Typography>Price : {"$" + product.price}</Typography>
                  <Typography>
                    <Rating
                      name="half-rating-read"
                      defaultValue={product.rating.rate}
                      precision={0.5}
                      readOnly
                    />
                  </Typography>
                </Box>
                <Typography sx={{ marginTop: 2 }}>
                  <Button variant="contained">Click Here</Button>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ProductList;
