import { Grid } from '@material-ui/core';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Contents from './Components/Contents';
import './App.css';

const App = () => {
  return (
    <Grid
      container
      className="root"
    >
      <Header />
      <Grid className="main-container-root">
        <Sidebar />
        <Contents />
      </Grid>
    </Grid>
  );
}

export default App;
