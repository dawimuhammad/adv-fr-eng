import { Grid } from '@material-ui/core';
import Header from './Components/Header';
import './App.css';

const App = () => {
  return (
    <Grid
      container
      className="root"
    >
      <Header />
      {/* Contents */}
    </Grid>
  );
}

export default App;
