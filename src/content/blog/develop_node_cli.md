---
title: nodejsで作ったcliアプリをnpmに公開する
topics: ["nodejs", "TypeScript"]
published: false
published_at: '2024-07-20'
description:
---

Node.js で作成したパッケージを npm に公開することで、別のプロジェクトから関数などを使うことができます。

TypeScript で CLI アプリケーションを作成しましたので軽く紹介してから npm publish の方法を説明します。

https://github.com/diskszk/blog-template-cli

```sh
pnpm run blog-template-cli <outDirectory> <filename>
```

第一引数に指定したディレクトリへ、第二引数に指定した文字列の markdown ファイルを作成するだけのツールです。

## tsconfigの設定
TypeScript で書いたコードを JavaScript 変換してから公開する必要があるので、`dist` ディレクトリにビルドします。

``` tsconfig.json
+ "outDir": "dist"
```

## package.json の設定
``` package.json
+  "bin": {
+     // 使用する際のコマンド名: 実行ファイル
+     "blog-template-cli": "dist/main.js"
+  },
+  // distディレクトリのみを公開する
+  "files": [
+    "dist"
+  ],
```

## npmへの公開
[npm](https://www.npmjs.com/) へサインインした状態で次のコマンドを入力します。

```sh
npm publish
```

ただし、初回のみ `--access=publish` フラグが必要になります。