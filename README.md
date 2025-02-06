# Tech Blog

https://blog-cfq.pages.dev

## 技術スタック

Astro で作成した Web フロントエンドに、 Markdown で試筆した記事を乗せて公開しています。  

### 言語・ライブラリのバージョン

| 言語・ライブラリ | 使用バージョン |
| ---------------- | -------------- |
| Node             | v20.9.X        |
| TypeScript       | v5.7.X         |
| Astro            | v5.2.X         |
| React            | v19.0.X        |
| vite             | v5.4.X        |
| vitest           | v3.0.X         |

## Setup

```sh
$ git clone https://github.com/diskszk/blog.git
$ cd blog
$ pnpm i
$ pnpm run dev
```

## Build

```sh
$ pnpm run build
```

## lint & typecheck

```sh
$ pnpm run lint
$ pnpm run check:type
$ pnpm run astro check
```

### Test

```sh
$ pnpm run test
```
