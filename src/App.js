import { Grid } from '@material-ui/core';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import './App.css';

const App = () => {
  return (
    <Grid
      container
      className="root"
    >
      <Header />
      <Sidebar />
      {/* Contents */}
    </Grid>
  );
}

export default App;
