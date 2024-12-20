---
title: データフェッチライブラリから取得したデータを並び替える方法
topics: ["react"]
published: true
published_at: '2024-12-19'
description:
---
<!-- textlint-disable -->
データフェッチライブラリを使って WebAPI から取得したデータを動的に並び替える処理の実装が思い通りにいかず手間取ったので、解決方法を共有できたらと思います。
<!-- textlint-enable -->

## 環境
- react@19.X
- vite@5.X
- urql@4.X

今回データフェッチライブラリに GraphQL クライアントである`urql`を使いましたが、`TanStack Query`や`swr`などのデータフェッチライブラリでも問題ありません。
(TanStack Query@5.62.X を使って検証済み)

## 検証前の予想
urql の `useQuery` API で取得したデータを state に保持して、ユーザーの操作によって setState で並び替えれば画面に反映されると思っていました。

```tsx
const { data } = useQuery<Pokemon[]>({ queryKey: ["pokemon-forms"], queryFn: fetchPokemons() });

const [viewData, setViewData] = useState(data);

const handleChange = () => {
  const ordered = /* 並び替え処理 */
  setViewData(ordered)
}
```

もしくは、`useQuery`の戻り値が undefined 状態の可能性もある為、 正常に取得が完了したら useEffect 内で setState し、ユーザー操作に応じて setState する方法が思い浮かびました。

```tsx
const { data } = useQuery<Pokemon[]>({ queryKey: ["pokemon-forms"], queryFn: fetchPokemons() });

const [viewData, setViewData] = useState(data);

useEffect(() => {
  if(data !== undefined) {
    setViewData(data)
  }
}, [data])


const handleChange = () => {
  const ordered = /* 並び替え処理 */
  setViewData(ordered)
}
```

## 動くコード

WebAPI から取得したデータを、 `useMemo` を使い、画面に表示する state を定義します。

```tsx
const cachedValue = useMemo(calculateValue, dependencies)
```

第一引数にはキャッシュしたい値を計算する関数を取り、二引数の dependencies が変更された時に変数を再計算して定義し直します。

```tsx
const { data } = useQuery<Pokemon[]>({ queryKey: ["pokemon-forms"], queryFn: fetchPokemons() });

// どう並び替えるかを定義
const [orderBy, setOrderBy] = useState<"" | "id" | "name">("");

/* 
  表示する用のstateを変数定義する。
  [orderBy, data]が変更された時に再計算した値を再定義する。
*/
const orderedPokemons = useMemo(() => {
  // デフォルトでは取得したままを返す
  if (orderBy === "") {
    return data;
  }
  /* 
    並び替える処理
  */
}, [orderBy, data]);  

return (
  <>
    <button onClick={() => setOrderBy("id")}>
      図鑑No順で並び替える
    </button>
    <button onClick={() => setOrderBy("name")}>
      名前順で並び替える
    </button>
    <ul>
      {orderedPokemons.map((pokemon) => (
        <li>/*  */</li>
      ))}
    </ul>
  </>
)
```

## その他の解決策
WebAPI 側で並び替えた状態のレスポンスを返す機能があればですが、WebAPI へのリクエストに専用の query を含めればクライアント側で配列を操作する必要はなくなります。ただし、並び替えるたびに WebAPI へリクエストを送ることになってしまいます。