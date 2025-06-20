# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```



Descomprime el archivo ZIP en tu ordenador
Instala las dependencias:

cd landing_psicologo_app
npm install
# o si prefieres usar pnpm
pnpm install

Inicia el servidor de desarrollo:

npm run dev
# o con pnpm
pnpm run dev

Esto iniciará el servidor local en http://localhost:5173
Para modificar el contenido:
    Edita el archivo src/textos.ts para cambiar los textos
    Modifica los componentes en src/components/ para ajustar la estructura
    Actualiza src/styles.css para personalizar los estilos y colores
Para generar una nueva versión compilada:

npm run build
# o con pnpm
pnpm run build

La versión compilada se generará en la carpeta dist
Para desplegar en producción:
Puedes subir el contenido de la carpeta dist a cualquier servicio de hosting de sitios estáticos como Netlify, Vercel, GitHub Pages, etc.
