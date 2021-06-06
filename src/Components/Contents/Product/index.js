import { Grid } from '@material-ui/core';
import BestSellingSKU from './BestSellingSKU';
import './index.css';
import TopCompetitor from './TopCompetitor';

const Product = () => {
  return (
    <Grid 
        container
        direction="row"
        className="product-root"
        justify="flex-start"
        alignItems="center"
        spacing={2}
        style={{ marginTop: "8px" }}
      >
        <Grid item xs={3}>
          <BestSellingSKU />
        </Grid>
        <Grid item xs={3}>
          <TopCompetitor />
        </Grid>
      </Grid>
  )
};

export default Product;