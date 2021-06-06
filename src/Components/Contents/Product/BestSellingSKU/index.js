import { Grid } from '@material-ui/core';
import { IconMore } from '../../../../Assets';
import ProductContainer from '../ProductContainer/product-container.js';

let bestSellingLists = [
  { name: "Bebelac 3", price: "21.000", totalsell: "591" },
  { name: "Bebelac 2", price: "25.000", totalsell: "425" },
  { name: "Bebelac 1", price: "24.000", totalsell: "1241" },
  { name: "Bebelac 4", price: "22.000", totalsell: "431" },
  { name: "Bebelac 5", price: "23.000", totalsell: "6212" }
];

const BestSellingSKU = () => {
  const mainProduct = (bestSellingLists.length) ? (bestSellingLists[0]) : {};
  const secondaryProducts = bestSellingLists.slice(1);

  return (
    <Grid
      container
      className="product-container"
    >
      <Grid
        item
        container
        direction="row"
        justify="space-between"
      >
        <p className="title-container">BEST SELLING SKU</p>
        <img className="icon-more" src={IconMore} alt="more" />
      </Grid>

      <ProductContainer main={true} product={mainProduct} />

      {
        secondaryProducts.map((product, index) => {          
          return(
            <ProductContainer key={index} product={product} main={false} />
          )
        })
      }
    </Grid>
  )
};

export default BestSellingSKU;