import './Wetterapi.css'
import React, { useEffect, useState } from "react";
const WetterImage = 'https://wetter.mgaz.de/assets/css/climacons/sun_cloud_bright_snow_drizzle.png'


function Wetterapi() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    /* network requests */
    fetch(
      "https://api.weatherapi.com/v1/current.json?key=67b6ed11553c415494074006231601&q=Macau"
    )
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        setData(data);
      }).finally(() => setLoading(false));
  }, []);

  if (loading) return;

  return (
    <div>
      <h1>Wetterapi:</h1>
      <a href="https://ch.wetter.com/">
            <img src={WetterImage} alt=""className="wetter"  />
            <div className='back'></div>
        </a>
      <h2><p className='p-wetter'>Country:</p> {data.location.country}</h2>
      <h2><p className='p-wetter'>City:</p>{data.location.name}</h2>
      <h2><p className='p-wetter'>Weather:</p>{data.current.temp_c} °C</h2>
      <h2><p className='p-wetter'>Time:</p>{data.location.localtime}</h2>
      <h2><p className='p-wetter'>Day/Night:</p>{data.current.is_day}</h2>

    </div>
  );
}

export default Wetterapi;
