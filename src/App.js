import { useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "./App.css";

function App() {
  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoidGhvbWFzYzk2IiwiYSI6ImNrbnUxOWI0dzA0eWEydnBpZGVyM2FmNXkifQ.E6T6V8OsRj_YsvvjDQV9AA";

    new mapboxgl.Map({
      container: "byron_the_noob",
      style: "mapbox://styles/mapbox/streets-v11",
    });
  }, []);

  return (
    <div className="App">
      <link
        href="https://api.mapbox.com/mapbox-gl-js/v2.1.1/mapbox-gl.css"
        rel="stylesheet"
      />
      <p>byron dum</p>
      <div id="byron_the_noob"></div>
    </div>
  );
}

export default App;
