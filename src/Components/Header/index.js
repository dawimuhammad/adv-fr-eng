import { Grid } from '@material-ui/core';
import { LogoAdvotics, IconProfile, IconLogout } from '../../Assets';
import './index.css';

const Header = () => {
  return (
    <Grid
      container
      className="header-root"
      direction="row"
    >
      <Grid 
        item
        container
        xs={12} sm={3}
        direction="row"
        alignItems="flex-end"
        className="header-item"
      >
        <img className="logo-advotics big" src={LogoAdvotics} alt="Advotics" />
        <span style={{ color: "#5B5B5B", fontSize: "11px" }}>powered by</span>
        <img className="logo-advotics small" src={LogoAdvotics} alt="Advotics" />
      </Grid>

      <Grid 
        item 
        container 
        xs={12} sm={3} 
        className="header-item"
        direction="row"
        justify="flex-end"
        alignItems="center"
        spacing={2}
      >
        <Grid item>
          <p style={{ fontSize: "14px", color: "#727272", fontWeight: "600" }}>Username</p>
          <p style={{ fontSize: "10px", color: "#727272", fontWeight: "300" }}>Company Name</p>
        </Grid>
        <Grid item>
          <img className="icon-profile" src={IconProfile} alt="Profile" />
        </Grid>
        <Grid item>
          <img className="icon-logout" src={IconLogout} alt="Logout" />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Header;