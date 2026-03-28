import { useState } from 'react';
import { Globe, GlobeDevTools } from '@aeryflux/globe/react';
import type { GlobeConfig } from '@aeryflux/globe/react';
import './App.css';

function App() {
  const [config, setConfig] = useState<GlobeConfig>({
    surface: 'dark',
    showGlobeFill: true,
    showCountries: true,
    showBorders: true,
    showCities: false,
    enableControls: false,
    rotationSpeed: 0.0003,
    bloomStrength: 0.5,
    glowIntensity: 1.2,
  });

  const updateConfig = (partial: Partial<GlobeConfig>) => {
    setConfig(prev => ({ ...prev, ...partial }));
  };

  return (
    <div className="app">
      <div className="globe-bg">
        <Globe {...config} />
      </div>

      <GlobeDevTools config={config} onChange={updateConfig} side="right" />

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
