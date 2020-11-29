import { useState } from 'react'

const api = {
  key: "097ba1ee9633f9de2e34218aa7e5d569",
  base: "http://api.openweathermap.org/data/2.5/"
}

function App() {
  const [query, setQuery] = useState('')
  const [weather, setWeather] = useState('')

  const search = e => {
    if (e.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result)
        setQuery('')
      })
    }
  }

  const dateBuilder = (d) => {
    let months = [
      "January", "February", "March", "April", "May", "June", "July",
      "August", "September", "October", "November", "December"
    ]
    let days = [
      "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday",
      "Saturday"
    ]
    let day = days[d.getDay()]
    let date = d.getDate()
    let month = months[d.getMonth()]
    let year = d.getFullYear()
    return `${day} ${date} ${month} ${year}`
  }

  return (
    <div className="App">
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}>
          </input>
        </div>
        {weather ? (
          <div>
            <div className="location-box">
            <div className="location">{weather.name}, {weather.sys.country}</div>
            <div className="date">{dateBuilder(new Date())}</div>
        </div>
        <div className="weather-box">
          <div className="temp">
            {Math.round(weather.main.temp)}°C
          </div>
          <div className="weather">
            {weather.weather[0].main}
          </div>
          <div className="info">
            <div className="info-value">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                <path fill="rgb(16, 19, 25)" d="M4.61 16.88c0-1.15.36-2.17 1.08-3.07a4.76 4.76 0 0 1 2.74-1.73c.31-1.37 1.02-2.49 2.11-3.37s2.35-1.32 3.76-1.32c1.38 0 2.61.43 3.69 1.28s1.78 1.95 2.1 3.29h.33a4.97 4.97 0 0 1 4.3 2.44 4.94 4.94 0 0 1-4.1 7.45H9.41a4.87 4.87 0 0 1-3.4-1.53 4.75 4.75 0 0 1-1.4-3.44zm1.71 0c0 .87.3 1.62.9 2.26s1.33.98 2.19 1.03H20.6a3.1 3.1 0 0 0 2.19-1.03 3.17 3.17 0 0 0-.07-4.53 3.19 3.19 0 0 0-2.32-.96h-1.6c-.11 0-.17-.06-.17-.18l-.07-.57a4.09 4.09 0 0 0-1.4-2.72 4.17 4.17 0 0 0-2.86-1.1 4.1 4.1 0 0 0-2.85 1.1 4.05 4.05 0 0 0-1.37 2.72l-.08.57c0 .12-.07.18-.2.18h-.53a3.3 3.3 0 0 0-2.95 3.23z"/>
              </svg>
              <p>{weather.clouds.all}%</p>
            </div>
            <div className="info-value">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
                <path fill="rgb(16, 19, 25)" d="M3.1 16.97c0 .24.09.45.28.62.16.19.37.28.63.28H18.7c.29 0 .53.1.73.3.2.2.3.45.3.74s-.1.53-.3.72c-.2.19-.44.29-.74.29a1 1 0 0 1-.73-.29.76.76 0 0 0-.6-.26c-.25 0-.46.09-.64.26s-.27.38-.27.61c0 .25.09.46.28.63a2.8 2.8 0 0 0 3.97.02c.56-.54.83-1.19.83-1.97s-.28-1.44-.84-2a2.74 2.74 0 0 0-2-.84H4.01a.9.9 0 0 0-.64.26.83.83 0 0 0-.27.63zm0-3.28c0 .23.09.43.28.61.17.18.38.26.63.26h20.04c.78 0 1.45-.27 2.01-.82.56-.54.84-1.2.84-1.97s-.28-1.44-.84-1.99-1.23-.83-2.01-.83c-.77 0-1.42.27-1.95.8a.85.85 0 0 0-.27.67c0 .26.09.47.26.63.17.16.38.24.63.24.24 0 .45-.08.63-.24a.9.9 0 0 1 .7-.31c.29 0 .53.1.73.3.2.2.3.44.3.73s-.1.53-.3.72c-.2.19-.44.29-.73.29H4.01a.9.9 0 0 0-.91.91z"/>
              </svg>
              <p>{weather.wind.speed}m/s</p>
            </div>
            <div className="info-value">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
              <path fill="rgb(16, 19, 25)" d="M7.56 17.19c0-.88.24-1.89.72-3.03s1.1-2.25 1.86-3.31a36.4 36.4 0 0 1 4.06-4.67l.75-.72c.25.26.53.5.83.72.41.42 1.04 1.11 1.88 2.09s1.57 1.85 2.17 2.65c.71 1.01 1.32 2.1 1.81 3.25s.74 2.16.74 3.03a7.44 7.44 0 0 1-2.15 5.22 7.4 7.4 0 0 1-5.28 2.17c-1 0-1.95-.19-2.86-.57a7.23 7.23 0 0 1-4.53-6.83zm2.26-2.93c0 .83.17 1.49.52 1.99.35.49.88.74 1.59.74.72 0 1.25-.25 1.61-.74.35-.49.53-1.15.54-1.99a3.49 3.49 0 0 0-.54-2c-.35-.49-.89-.74-1.61-.74-.71 0-1.24.25-1.59.74-.35.5-.52 1.16-.52 2zm1.57 0v-.35l.02-.33c.01-.14.02-.25.05-.32l.09-.24c.04-.08.09-.15.15-.18a.44.44 0 0 1 .23-.06c.14 0 .25.04.33.12s.14.21.17.38a5.16 5.16 0 0 1 .07.97l-.01.52-.06.45c-.03.17-.09.3-.17.38s-.19.12-.33.12a.44.44 0 0 1-.23-.06.34.34 0 0 1-.15-.18 1.44 1.44 0 0 1-.14-.56l-.02-.32v-.34zm.59 7.75h1.32l4.99-10.74h-1.35l-4.96 10.74zm4.3-2.99c.01.84.2 1.5.55 2 .35.49.89.74 1.6.74.72 0 1.25-.25 1.6-.74.35-.49.52-1.16.53-2a3.43 3.43 0 0 0-.53-1.99c-.35-.49-.88-.74-1.6-.74-.71 0-1.25.25-1.6.74a3.36 3.36 0 0 0-.55 1.99zm1.57 0l.01-.52.06-.45c.03-.18.09-.3.17-.38s.19-.12.33-.12c.09 0 .17.02.24.06.07.04.12.1.16.19l.1.24c.03.07.04.18.05.32l.01.32v.69l-.01.32-.05.32-.1.24-.16.19-.24.06c-.14 0-.25-.04-.33-.12s-.14-.21-.17-.38a5.72 5.72 0 0 1-.07-.98z"/>
            </svg>
            <p>{weather.main.humidity}%</p>
            </div>
          </div>
        </div>
          </div>
        ) : (
          <div className="hint">
            <p>Search Your location</p>
          </div>
        )}
        
      </main>
    </div>
  );
}

export default App;
