import { Grid } from '@material-ui/core';
import { IconCalendar } from '../../Assets';
import './index.css';

const Contents = () => {
  return (
    <Grid
      className="contents-root"
    >
      <Grid 
        container
        className="row"
      >
        <Grid item xs={12} md className="">
          <p className="title">Dashboard</p>
        </Grid>
        <Grid item container xs={12} md={5} className="calendar-box">
          <Grid item xs className="flex-center-start">
            <img className="icon-calendar" src={IconCalendar} alt="" />
            <p>Period</p>
          </Grid>
          <Grid item xs={9} className="flex-center-end">
            <p style={{ margin: 0 }}>11 September 2018 - 14 September 2018</p>
            <p><span className="chevron down"> </span></p>
          </Grid>
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