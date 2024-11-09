# Superforms

Este proyecto es una replica del proyecto que hece el creador de superforms en youtube

https://www.youtube.com/watch?v=nN72awrXsHE&pp=ygUWc3VwZXJmb3JtcyBzdmVsdGVraXQgMg%3D%3D.

Pueden consultar también en https://superforms.rocks/

## Todo lo que necesitas es:

  -  Descargar el proyecto a una carpeta y luego instalar las dependencias usando bun install.
  -  renombrar el archivo .env_copy a .env
  -  Ejuctar bun dev




## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
