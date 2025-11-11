# i18next-vite-js

A minimal project built with React and Vite that demonstrates how to use i18next for internationalization (i18n) with automatic language detection and GitHub Pages deployment.

## Features

- Built with React and Vite  
- Multi-language support (English and Portuguese)  
- Automatic language detection based on the browser  
- Simple i18n setup using i18next-http-backend  
- Automatic deployment using GitHub Actions and GitHub Pages  

## Project Structure

```
i18next-vite-js/
├── public/
│   └── locales/
│       ├── en/
│       │   └── translation.json
│       └── pt/
│           └── translation.json
├── src/
│   ├── i18n.js
│   ├── App.jsx
│   └── main.jsx
├── vite.config.js
└── .github/
    └── workflows/
        └── deploy.yml
```

## How It Works

- The project loads translations from `/public/locales/{{lng}}/translation.json`.  
- The browser language is detected automatically.  
- The user can also change the language manually in the interface.

Example:

```jsx
<button onClick={() => changeLanguage("pt")}>pt</button>
<button onClick={() => changeLanguage("en")}>en</button>
```

## Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Deployment

The project is automatically deployed to GitHub Pages using GitHub Actions.  
Each push to the `main` branch triggers the build and publishes the site to:

```
https://professor-correa.github.io/i18next-vite-js/
```

## License

MIT License  
Created by [Professor Corrêa](https://github.com/professor-correa)
