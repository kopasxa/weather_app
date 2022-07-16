import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import Weather from './components/Weather';
import { Spinner, Container } from 'react-bootstrap';

function App() {
  const [lat, setLat] = useState(50.431759);
  const [long, setLong] = useState(30.517023);
  const [currentData, setcurrentData] = useState();
  const [forecastData, setforecastData] = useState();

  useEffect(() => {
    const fetchRun = async () => {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });

      await fetch(`${process.env.REACT_APP_API_URL}/weather?lat=${lat}&lon=${long}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then(result => {
          setcurrentData(result)
      });

      await fetch(`${process.env.REACT_APP_API_URL}/onecall?lat=${lat}&lon=${long}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then(result => {
          setforecastData(result)
      });
    }

    fetchRun()
  }, [lat, long]);

  return (
    <Container className='mx-auto d-flex justify-content-center pt-5' id='app'>
      {
        currentData !== undefined && forecastData !== undefined
          ? <Weather data={currentData} forecast_data={forecastData}/>
          : <Spinner animation="border" role="status" className='customSpinner'><span className="visually-hidden">Loading...</span></Spinner>
      }
    </Container>
  );
}

export default App;
