import Products from "~/components/pages/PageProducts/components/Products";
import Box from "@mui/material/Box";

export default function PageProducts() {
  return (
    <Box py={3}>
      <h1>! OUR PRODUCTS LIST: </h1>
      <Products />
    </Box>
  );
}
