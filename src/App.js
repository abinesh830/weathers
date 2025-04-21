import './App.css';
import { useEffect, useState, useCallback } from 'react';
import img1 from './images/483530.png';
import img2 from './images/humidity.jpg';
import img4 from './images/wind2.png';

function App() {
  const [input, setinput] = useState('');
  const [data, setdata] = useState();

  const receiver = useCallback(async () => {
    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=bd0dcce2d25a05cea40398c527fd3107&units=metric`
    );
    let result = await response.json();
    setdata(result);
    console.log(result);
  }, [input]); // only re-create when `input` changes

  useEffect(() => {
    if (input.length > 2) {
      receiver();
    }
  }, [input, receiver]); // receiver is now stable

  return (
    <div className="App">
      <div className="head">
        <h1>
          <i className="fa-solid fa-cloud"></i> Weather Analyzer
        </h1>
      </div>

      <div className="weather">
        {input.length > 2 ? (
          <div>
            <h2>
              CITY{' '}
              <span style={{ float: 'right' }}>{data?.name}</span>
            </h2>

            <p>
              TEMPERATURE{' '}
              <i className="fa-solid fa-sun" style={{ color: 'yellow' }}></i>
              {data?.main?.temp}
              <img src={img1} alt="" width={50} />
            </p>

            <p>
              HUMIDITY{' '}
              <i className="fa-solid fa-droplet" style={{ color: 'skyblue' }}></i>
              {data?.main?.humidity}% <img src={img2} alt="" width={50} />
            </p>

            <p>
              WIND SPEED{' '}
              <i className="fa-solid fa-wind" style={{ color: 'black' }}></i>
              {data?.wind?.speed} KM/H <img src={img4} alt="" width={50} />
            </p>
          </div>
        ) : (
          <div>
            <h1>
              Enter your city to know the weather <br />
              உங்கள் நகரத்தின் வானிலையை அறிய உங்கள் நகரத்தை உள்ளிடவும்
            </h1>
          </div>
        )}

        <input
          type="search"
          placeholder="Enter city name"
          value={input}
          onChange={(e) => setinput(e.target.value)}
          required
        />
      </div>
    </div>
  );
}

export default App;
