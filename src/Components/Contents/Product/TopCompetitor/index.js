import { Grid } from '@material-ui/core';
import { IconMore } from '../../../../Assets';
import ProductContainer from '../ProductContainer/product-container.js';

let topCompetitorLists = [
  { name: "Danone Nature A", price: "71.300", totalsell: "391" },
  { name: "Danone Nature B", price: "54.340", totalsell: "235" },
  { name: "Danone Nature C", price: "22.560", totalsell: "1241" },
  { name: "Danone Nature D", price: "11.450", totalsell: "4541" },
  { name: "Danone Nature E", price: "32.540", totalsell: "6542" }
];

const TopCompetitor = () => {
  const mainProduct = (topCompetitorLists.length) ? (topCompetitorLists[0]) : {};
  const secondaryProducts = topCompetitorLists.slice(1);

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
        <p className="title-container">TOP COMPETITOR</p>
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

export default TopCompetitor;