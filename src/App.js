import logo from './logo.svg';
import './App.css';
import { Container, Typography, Button, Box } from '@mui/material';
import { LineChart, Gauge} from '@mui/x-charts';

function Header({name, content}) 
{
  return (
    <header className={name}>
      {content}
    </header>
  );
}

function HeaderContent()
{
  return (
    <>
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
    </>
  );
}

function CustomGauge({width1, height1, value1, valueMin1, valueMax1})
{
  return (
    <Gauge width={width1} height={height1} value={value1} valueMin={valueMin1} valueMax={valueMax1}/>
  );
}

function App(){
  return (
    <div className="App">
    <Container>
        <Box>
          <Typography variant="h2">Test</Typography>
          <Typography variant="h4">Test</Typography>
          <Button variant="outlined" color="primary">TestButton</Button>
        </Box>
        <Box>
        <LineChart
        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
        series={[
          {
            data: [2, 5.5, 2, 8.5, 1.5, 5],
          },
        ]}
        width={500}
        height={300}
      />
      <CustomGauge width1={100} height1={100} value1={50} valueMin1={10} valueMax1={60} />
      <Gauge width={100} height={100} value={50} valueMin={10} valueMax={60} />
      <Gauge width={100} height={100} value={72} valueMin={10} valueMax={100} />
      </Box>
      </Container>
      </div>
  );
}

export default App;
