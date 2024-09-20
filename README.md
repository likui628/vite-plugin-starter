# vite-plugin-starter

typescript starter for vite plugins

## Install

```bash
pnpm i
pnpm run dev
```

Go to `example` folder, add your plugin, and start develop.

```ts
// example/vite.config.ts

import MyPlugin from 'vite-plugin-starter'
export default {
  plugins: [
    MyPlugin()
  ],
}

```

Don't forget edit your `README.md` and the infos in `package.json`

## License

[MIT](./LICENSE) License © 2024
