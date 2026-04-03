# @aeryflux/globe Demo

Interactive demo for [@aeryflux/globe](https://github.com/aeryflux/globe) - a portable 3D globe component for React.

**Live Demo:** https://aeryflux.github.io/globe-demo/

## Features

- Switch between surfaces (dark, green, white)
- Toggle country visibility
- Data-driven country highlights
- WebGL fallback for unsupported browsers

## Installation

```bash
npm install @aeryflux/globe three
```

## Usage

```tsx
import { Globe } from '@aeryflux/globe/react';

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Globe
        surface="green"
        showCountries={true}
        rotationSpeed={0.0005}
      />
    </div>
  );
}
```

## Development

```bash
npm install
npm run dev
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for development setup and PR guidelines.

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for release history.

## License

MIT - see [LICENSE](LICENSE) for details.
