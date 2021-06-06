import { useState } from 'react';
import { Grid } from '@material-ui/core';
import GreenBox from '../GreenBox';
import { ImageInsight1 } from '../../../Assets';
import './index.css'

const Insight = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <Grid
      container
      direction="column"
      className="insight-root"
    >
      <GreenBox toggle={toggle} setToggle={setToggle} />
      {

        (toggle) ? (
          <Grid 
            item
            container
            direction="row"
            className="insight-item-container"
            >
            <img className="insight-item" src={ImageInsight1} alt="" />
            <img className="insight-item" src={ImageInsight1} alt="" />
            <img className="insight-item" src={ImageInsight1} alt="" />
          </Grid>
        ) : (
          <></>
        )
      }
    </Grid>
  )
};

export default Insight;
