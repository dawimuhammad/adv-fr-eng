import { Grid } from '@material-ui/core';
import './index.css';

const Contents = () => {
  return (
    <Grid
      className="contents-root"
    >
      <Grid 
        xs
        item 
        container 
      >
        <Grid item sm={12} md className="border green">
          <p className="title">Dashboard</p>
        </Grid>
        <Grid item sm={12} md className="border blue">
          <p>ICON CALENDAR</p>
          <p>Period</p>
          <p>11 September 2018 - 14 September 2018</p>
          <p>ICON DOWN CHEVRON</p>
        </Grid>

      </Grid>

      <Grid
        xs 
        item 
        container 
        className="border" 
        direction="row" 
        justify="space-between"
      >
        <Grid item sm={2} className="border green">
          <p>MARKET INSIGHT</p>
        </Grid>
        <Grid item sm={3} className="border blue">
          <p>ICON LAMP TADAA!</p>
          <p>Click Here for Help</p>
          <p>ICON CHEVRON UP</p>
        </Grid>

      </Grid>
    </Grid>
  )
};

export default Contents;