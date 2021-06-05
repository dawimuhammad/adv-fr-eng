import { Grid } from '@material-ui/core';
import { LogoAdvotics, IconProfile, IconLogout } from '../../Assets';
import './index.css';

const Header = () => {
  return (
    <Grid
      container
      className="header-root"
    >
      <Grid 
        item
        container
        xs={12} sm={6}
        direction="row"
        alignItems="flex-end"
      >
        <img className="logo-advotics big" src={LogoAdvotics} alt="Advotics" />
        <p className="poweredby">powered by</p>
        <img className="logo-advotics small" src={LogoAdvotics} alt="Advotics" />
      </Grid>

      <Grid 
        item 
        container 
        xs={12} sm={4} 
        direction="row"
        justify="flex-end"
        alignItems="center"
      >
        <Grid item className="">
          <p className="username">Username</p>
          <p className="company-name">Company Name</p>
        </Grid>
        <Grid item className="header-item">
          <img className="icon-profile" src={IconProfile} alt="Profile" />
        </Grid>
        <Grid item className="header-item">
          <img className="icon-logout" src={IconLogout} alt="Logout" />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Header;