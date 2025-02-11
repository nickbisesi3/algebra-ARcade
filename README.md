# WebXR Math Game Experience

An interactive WebXR-based math game that helps students practice algebra in an immersive AR environment.

## Project Structure

```
.
├── public/           # Public-facing files and assets
│   ├── index.html   # Main HTML entry point
│   ├── js/          # JavaScript modules
│   │   ├── ballShooter.js      # Ball shooting mechanics
│   │   ├── game.js             # Core game logic
│   │   └── problemGenerator.js  # Math problem generation
│   └── styles/      # CSS styles
│       └── main.css # Main stylesheet
├── lib/             # Third-party libraries (if any)
└── archive/         # Archived files (old versions)
```

## Setup

1. Ensure you have a WebXR-compatible browser and device
2. Host the files on a web server (HTTPS required for WebXR)
   - Make sure to set the `public` directory as your web root
   - All files must be served from within the `public` directory
3. Access the application through the browser

## Dependencies

- Babylon.js - 3D rendering engine
- Cannon.js - Physics engine
- Tone.js - Audio processing

## Development

The application is structured as follows:

- `ballShooter.js` - Handles the AR ball shooting mechanics
- `game.js` - Contains core game logic, scoring, and scene management
- `problemGenerator.js` - Generates math problems and manages difficulty

## Browser Requirements

- WebXR-compatible browser (latest Chrome, Firefox, or Edge)
- HTTPS connection (required for WebXR)
- Compatible AR device 