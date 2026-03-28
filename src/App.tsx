import { Globe } from '@aeryflux/globe/react';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="globe-bg">
        <Globe
          surface="dark"
          showCountries={true}
          showCities={false}
          rotationSpeed={0.0003}
          bloomStrength={0.5}
          glowIntensity={1.2}
        />
      </div>
      <div className="overlay">
        <h1>aeryflux</h1>
        <p>explore the world</p>
        <div className="links">
          <a href="https://atlas.aeryflux.com">Atlas</a>
          <a href="https://github.com/aeryflux/globe" target="_blank" rel="noopener">GitHub</a>
          <a href="https://www.npmjs.com/package/@aeryflux/globe" target="_blank" rel="noopener">npm</a>
        </div>
      </div>
    </div>
  );
}

export default App;
