import { Grid } from '@material-ui/core';
import { IconHelp } from '../../../Assets';
import './index.css'

const GreenBox = () => {
  return (
    <Grid
        container 
        className="greenbox" 
        direction="row" 
        justify="space-between"
      >
        <p className="subtitle" style={{ fontWeight: "600", color: "#ffffff" }}>MARKET INSIGHTS</p>
        <div className="flex-center-center">
          <img className="icon-help" src={IconHelp} alt="" />
          <a className="a-help" href="?">Click Here for Help</a>
          <p><span className="chevron white"> </span></p>
        </div>
    </Grid>
  )
};

export default GreenBox;