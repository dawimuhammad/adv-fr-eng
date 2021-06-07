import { Grid } from '@material-ui/core';
import { IconMore } from '../../../../Assets';
import SelectPeriodAvg from './MonthSelection';
import ProductCharts from './product-charts';

const AveragePurchaseValue = () => {
  return (
    <Grid
      container
      className="product-container average-purchase-value"
      style={{ paddingTop: '6px' }}
    >
      <Grid
        item
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <p className="title-container">AVERAGE PURCHASE VALUE</p>
        <div className="flex-center-center">
          <SelectPeriodAvg />
          <img className="icon-more" src={IconMore} alt="more" />
        </div>
      </Grid>

      <Grid
        item
        container
        style={{ marginTop: "18px" }}
      >
        <ProductCharts />
      </Grid>

      <Grid
        item
        container
        style={{ marginTop: "18px" }}
      >
        <Grid item className="flex-center-start">
          <div className="legends green" />
          <p style={{ marginLeft: "7px", marginRight: "15px" }}>Nett</p>
        </Grid>
        <Grid item className="flex-center-start">
          <div className="legends dark-green" />
          <p style={{ marginLeft: "7px", marginRight: "15px"  }}>Gross</p>
        </Grid>
        <Grid item className="flex-center-start">
          <div className="legends light-green" />
          <p style={{ marginLeft: "7px", marginRight: "15px"  }}>Average Purchase Value</p>
        </Grid>
        <Grid item className="flex-center-start">
          <div className="legends ash" />
          <p style={{ marginLeft: "7px", marginRight: "15px"  }}>Unit per Transaction</p>
        </Grid>
      </Grid>
    </Grid>
  )
};

export default AveragePurchaseValue;