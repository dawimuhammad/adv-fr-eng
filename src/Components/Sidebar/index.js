import { Grid } from '@material-ui/core';
import { IconBreadcrumbs, IconDashboard } from '../../Assets';
import './index.css';

const Sidebar = () => {
  return (
    <Grid
      className="sidebar-root"
    >
      <Grid className="sidebar-item">
        <a href="?">
          <img className="icon" src={IconBreadcrumbs} alt="Menu" />
        </a>
      </Grid>
      <Grid className="sidebar-item active">
        <a href="?">
          <div className="icon squared">
            <img className="dashboard" src={IconDashboard} alt="Menu" />
          </div>
        </a>
      </Grid>
    </Grid>
  )
};

export default Sidebar;