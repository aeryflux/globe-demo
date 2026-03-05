import { useState } from 'react';
import { Globe } from '@aeryflux/globe/react';
import './App.css';

type Surface = 'dark' | 'green' | 'white';

const DEMO_COUNTRY_DATA = {
  France: { scale: 0.8, color: '#ef4444' },
  Japan: { scale: 0.6, color: '#3b82f6' },
  Brazil: { scale: 1.0, color: '#22c55e' },
  Australia: { scale: 0.7, color: '#f59e0b' },
  Canada: { scale: 0.5, color: '#8b5cf6' },
};

function App() {
  const [surface, setSurface] = useState<Surface>('green');
  const [showCountries, setShowCountries] = useState(true);
  const [showData, setShowData] = useState(false);

  return (
    <div className="app">
      {/* Globe */}
      <div className="globe-container">
        <Globe
          surface={surface}
          showCountries={showCountries}
          rotationSpeed={0.0003}
          bloomStrength={0.3}
          glowIntensity={0.5}
          countryData={showData ? DEMO_COUNTRY_DATA : undefined}
          modelUrl={`${import.meta.env.BASE_URL}models/atlas_hex_subdiv_6.glb`}
        />
      </div>

      {/* Controls - bottom left */}
      <div className="controls">
        <h1>@aeryflux/globe</h1>
        <p className="subtitle">3D Globe for React</p>

        <div className="surface-pills">
          {(['dark', 'green', 'white'] as Surface[]).map((s) => (
            <button
              key={s}
              className={surface === s ? 'active' : ''}
              onClick={() => setSurface(s)}
            >
              {s}
            </button>
          ))}
        </div>

        <div className="toggles">
          <label>
            <input
              type="checkbox"
              checked={showCountries}
              onChange={(e) => setShowCountries(e.target.checked)}
            />
            countries
          </label>
          <label>
            <input
              type="checkbox"
              checked={showData}
              onChange={(e) => setShowData(e.target.checked)}
            />
            data
          </label>
        </div>
      </div>

      {/* Install - top right */}
      <div className="install-cmd">
        <code>npm i @aeryflux/globe three</code>
      </div>

      {/* Links - bottom right */}
      <div className="links">
        <a href="https://github.com/aeryflux/globe" target="_blank" rel="noopener">
          github
        </a>
        <a href="https://www.npmjs.com/package/@aeryflux/globe" target="_blank" rel="noopener">
          npm
        </a>
      </div>
    </div>
  );
}

export default App;
