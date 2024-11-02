# Vue3

## 環境構築

```bash
npm init vue@latest frontend
cd frontend
npm install
npm run dev
```

## 個別インストール

```bash
# Vue Routerのインストール
npm install vue-router
# Font Awesomeのインストール
npm install @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/vue-fontawesome@latest @fortawesome/free-brands-svg-icons
```

## Tailwind CSSのインストール

```bash
# Tailwind CSSのインストール
npm install -D tailwindcss postcss autoprefixer
# Tailwind CSSの初期設定
npx tailwindcss init -p
```

### ファイルの設定

```js:tailwind.config.jsの設定
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

```css:src/assets/tailwind.cssの設定
@tailwind base;
@tailwind components;
@tailwind utilities;
```

```ts:src/main.tsの設定
// Tailwind CSSの読み込み を追加
import './assets/tailwind.css';
```

## e2eテストの実行

```bash
# Playwrightのインストール
npx playwright install
```

```bash
# e2eテストの実行
npx playwright test --ui
```
