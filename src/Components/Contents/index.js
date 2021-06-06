import { Grid } from '@material-ui/core';
import Insights from './Insight';
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
        <Grid item xs={12} sm className="">
          <p className="title">Dashboard</p>
        </Grid>
        <Grid item container xs={12} sm={12} md className="calendar-box">
          <Grid item xs className="flex-center-start">
            <img className="icon-calendar" src={IconCalendar} alt="" />
            <p style={{ margin: "0 16px" }}>Period</p>
          </Grid>
          <Grid item xs={9} className="flex-center-end">
            <p style={{ margin: "0 16px" }}>11 September 2018 - 14 September 2018</p>
            <div className="chevron-area">
              <p><span className="chevron down"> </span></p>
            </div>
          </Grid>
        </Grid>
      </Grid>

      <Insights />
    </Grid>
  )
};

export default Contents;