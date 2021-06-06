import { Grid } from '@material-ui/core';
import { ImageProduct1 } from '../../../../Assets';
import './index.css';

const ProductContainer = ({ main, product }) => {
  const { name, price, totalsell } = product;
  const className = main ? "product main flex-center-center" : "product secondary flex-center-center";

  return (
    <Grid
        container
        direction="row"
        className={className}
      >
        <Grid item className="flex-center-center">
          <img className="thumbnail" src={ ImageProduct1 } alt="" />
        </Grid>
        <Grid item container xs direction="column" style={{ padding: "0 16px" }}>
          <p className="title">{ name ? name : "[Nama Product]" }</p>
          <Grid
            item
            container
            direction="row"
            justify="space-between"
            style={{ marginTop: "8px" }}
          >
            <span><p className="details">Rp { price ? price : "-" }</p></span>
            <span><p className="details">{ totalsell ? totalsell : "-" }</p></span>
          </Grid>
        </Grid>
      </Grid>
  )
};

export default ProductContainer;