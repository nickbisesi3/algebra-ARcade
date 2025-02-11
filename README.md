# Algebra Arcade

An interactive web-based math game that helps students practice algebra through an engaging 3D experience. Players solve algebraic equations by shooting balls at the correct answers in a visually immersive environment.

## Features

- Interactive 3D environment powered by Babylon.js
- Physics-based ball shooting mechanics
- Progressive scoring system with visual feedback
- Curated set of algebraic equations focusing on solving for x
- Multiple-choice answer format with randomized options
- Real-time score tracking and accuracy statistics
- Smooth animations and visual effects

## Project Structure

```
.
├── public/           # Public-facing files and assets
│   ├── index.html   # Main HTML entry point with game canvas
│   ├── js/          # JavaScript modules
│   │   ├── ballShooter.js      # Ball shooting mechanics and physics
│   │   ├── game.js             # Core game logic and scene management
│   │   ├── ui.js               # User interface elements
│   │   └── problemGenerator.js  # Math problem generation and management
│   └── styles/      # CSS styles
│       └── main.css # Main stylesheet
├── lib/             # Third-party libraries
└── archive/         # Archived files
```

## Setup

1. Host the files on a web server (HTTPS recommended)
   - Set the `public` directory as your web root
2. Access the application through a modern web browser
3. No special device requirements - works on standard desktop/laptop browsers

## Dependencies

The game uses the following libraries (loaded via CDN):

- Babylon.js - 3D rendering engine
- Babylon.js Loaders - For loading 3D assets
- Cannon.js - Physics engine integration
- Earcut - Polygon triangulation library

## Gameplay

1. Players are presented with algebraic equations (e.g., "2x = 8")
2. Multiple answer options appear in the 3D space
3. Players shoot balls at the answer they think is correct
4. Score increases for correct answers
5. Progress is tracked through a visual progress bar
6. Game features a cooldown system between problems to maintain pacing

## Development

The application is structured into several key components:

- `game.js` - Manages the core game loop, scene setup, and scoring
- `problemGenerator.js` - Handles equation generation with a pre-defined set of problems
- `ballShooter.js` - Controls ball physics and shooting mechanics
- `ui.js` - Manages score display and visual feedback

## Browser Requirements

- Modern web browser with WebGL support
- Recommended browsers: Chrome, Firefox, Edge (latest versions)
- No special hardware requirements 