---
title: なぜReactが選ばれるのか
topics: ["react"]
published: true
published_at: '2024-08-04'
description:
---

## Reactの特徴
- [Single Page Applicatoin](#single-page-applicatoin-spa)
- [コンポーネント化](#コンポーネント化)
- [宣言的UI](#宣言的ui)
- [仮想DOM](#仮想dom)
- [単方向データフロー](#単方向データフロー)
- [TypeScriptとの相性補完](#typescriptとの相性補完)

それぞれの特徴は React だけがもつものではありませんが、 React はそれぞれの特徴を組み合わせることによってその素晴らしいコンセプトを実現させています。

### Single Page Applicatoin (SPA)
2010 年代にスマートフォンが普及したことにより、それまで主流だった MVC パターンから Web ブラウザとスマートフォンアプリそれぞれのクライアントで同一の WebAPI と通信をする必要が生じたことで、 React や Anguler, Vue.js といった SPA ライブラリ/フレームワーク の需要が高まりました。
また、SPA は、ユーザーの操作に対して必要な部分のみを読み込むことで高い操作性を実現できます。従来の Web ページでは、操作の度にページ全体を読み込む一方で、SPA が実装されたページは、JavaScript で HTML の一部を差し替えて必要な部分だけを読み込むため、サーバーとの通信量を抑えアプリケーションのパフォーマンス向上につながります。

### コンポーネント化

コンポーネントとは、独自のロジックと外見を持つ UI（ユーザインターフェース）の部品のことです。 JSX という JavaScript で書くテンプレートを合わせることによってアプリケーションを構築できます。
そのため、巨大なアプリケーションであっても、小さな部品に分割してそれぞれを開発・テストすることが可能になります。これにより読みやすいコードを書いたり、コンポーネントを再利用することが可能になります。

### 宣言的UI
VanilaJS (生の JavaScript) では、命令的にコード群を書く必要がありました。それによって、「処理の順番を追うのが大変になる」、「完成系のイメージがつきづらい」という課題が生じていました。

入力フォームに入力された値をただ表示するだけの機能を持つ HTML/JavaScript で例を書いていきます。

```html:index.html
<main>
  <input id="input" type="text" />  
  <p id="output"></p>

  <script src="./index.js"></script>
</main>
```

```js:index.js
const input = document.getElementById("input");
const output = document.getElementById("output");
input.addEventListener("input", handleChangeInputValue);

function handleChangeInputValue(event) {
  const value = event.target.value;

  output.innerText = value;
}
```

HTML だけを見た場合、どこで何の処理が発生するのかわからず、また、 UI の完成系のイメージがつかないため読みづらいコードになってしまいます。
JavaScript に関しては、「`id="input` の DOM 要素を取得して」、「次に取得した DOM 要素のイベントリスナーに `handleChangeInputValue` という関数を追加して」と、いわゆる「命令的なコード」が書き連ねられています。例に出したコードくらいシンプルであれば大した問題にはなりませんが、コード量が増えてくるとメンテナンスが大変になります。

そこで「宣言的 UI」 の登場です。
欲しい完成系の UI を宣言するように書けます。

React (制御コンポーネント) で同じ処理を行うコードを書いていきます。

```jsx:App.jsx
import { useState } from "react";

const App = () => {
  const [value, setValue] = useState("");

  const handleChangeInputValue = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <input type="text" value={value} onChange={handleChangeInputValue} />
      <p>{value}</p>
    </div>
  );
}
```

React では JSX という HTML に似た書き味のテンプレートを書くことで画面を描画できます。
`return` 内の JSX を見ると次のことがわかります。
- `<input type="text" value={value} onChange={handleChangeInputValue} />` が、 input フォームに入力があると `handleChangeInputValue` が発火して state が変わるということ
- 入力された値が `<p>{value}</p>` に表示されるということ

宣言的なコードは、完成形の UI のイメージに沿ってそのまま実装できる形式であり、具体的な手順を命令的に指定する必要がないため、コードがシンプルで理解しやすくなります。これにより、開発者は直感的に UI を構築できます。


### 仮想DOM
VanilaJS が本物の DOM を操作するのに対し、 React では、仮想 DOM を使って HTML を書き換えます。
仮想 DOM は、イベント処理が行われた際、マウント時に常に完成系を HTML に反映します。
この仮想 DOM が宣言的 UI や単方向データフローを実現するのに重要なファクターとなっています。

### 単方向データフロー
React ではデータの変更があった場合、その変更が View に自動的に反映されます。
これはデータ => UI の一方方向が実現できています。そのため開発者はデータの流れを追いやすく、コードを綺麗に保つことができます。
一方で View の変更をデータに反映する場合は、イベントハンドラでデータ更新処理を実装する必要があります。

```jsx:App.jsx
import { useState } from "react";

const App = () => {
  const [value, setValue] = useState("");

  const handleChangeInputValue = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <input type="text" value={value} onChange={handleChangeInputValue} />
      <p>{value}</p>
    </div>
  );
}
```

1. 入力フォームにユーザーが入力する
2. onChange イベントが発火し、`handleChangeInputValue` が動く
3. `handleChangeInputValue` 内で state を更新する
4. state が更新された時に再レンダーが走るため、新しい`value`で入力フォームと<p>タグを描画する

### TypeScriptとの相性補完

React Component は JSX を返すただの関数であるため、 TypeScript による静的型付けによって型安全に書くことができます。

```tsx:App.tsx
const App: React.FC<{
  name: string;
  age: number;
}> = (props) =>  (
  // propsの型は 
  //  {
  //    name: string;
  //    age: number
  //  }

  <p>{props.name}は{props.age}歳</p>
)
```
