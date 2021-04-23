import logo from "./logo.svg";
import "./App.css";

var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
 
mapboxgl.accessToken = 'pk.eyJ1IjoidGhvbWFzYzk2IiwiYSI6ImNrbnUxOWI0dzA0eWEydnBpZGVyM2FmNXkifQ.E6T6V8OsRj_YsvvjDQV9AA';
var map = new mapboxgl.Map({
container: 'byron_the_noob',
style: 'mapbox://styles/mapbox/streets-v11'
});

function App() {
  return (
    <div className="App">
      <link
        href="https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.css"
        rel="stylesheet"
      />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div id="byron_the_noob">

        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
