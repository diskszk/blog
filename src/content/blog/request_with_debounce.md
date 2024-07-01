---
title: debounceを使ってイベントの発火を抑制する
topics: ["rxjs","Javascript"]
published: true
published_at: '2024-06-29T07:06:55.621Z'
description: 
---

## debounceとは

時間のかかる関数の頻繁な呼び出しを制限するためのプログラミング・パターンや手法のことです。  
関数の実行を指定された時間まで遅延させることで、不必要な CPU サイクルや API 呼び出しを回避し、パフォーマンスを向上させることができます。

## 使用例

例として入力フォームへの入力があった際に、入力された文字列を含むアイテムのみを取得するアプリを作成します。

vite と react を使ってフロントエンドアプリを作成します。

```sh
$ yarn create-vite my-app --template react-ts
```

### debounceなしの場合

```tsx:ItemList.tsx
export function ItemList() {
  const [itemList, setItemList] = useState<Item[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    getItems(event.target.value).then((data) => {
      setItemList(data);
    });
  };

  useEffect(() => {
    getItems().then((data) => {
      setItemList(data);
    });
  }, []);

  return (
    <div>
      <h1>アイテム一覧</h1>

      <div>
        <label htmlFor="q">絞り込み検索</label>
        <input
          name="q"
          onChange={handleChange}
          autoComplete="off"
          type="search"
        />
      </div>
      <ul>
        {itemList?.map((item) => (
          <li key={item.id}>
            <p>{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

webAPI からアイテムの配列を取得する関数 `getItems: (query?: string) => Promise<Item[]>` があり、`getItems` のオプション引数 `query` を含むアイテムの配列を返します。初回レンダー時は useEffect 内で全件取得して state に反映させています。  

<!-- img -->

log を見ると入力フォームが変更されるたびに `getItems` 関数が呼び出されていることがわかります。
場合によってはサーバーへの不可が大きくなったり、フロントエンドのパフォーマンスが下がる原因になりえます。

### debounceありの場合

debounce するために `rxjs` を使用します。

```sh
yarn add rxjs
```

```diff tsx:ItemList.tsx

+  const query$ = new BehaviorSubject<string>("");

export function ItemList() {
  const [itemList, setItemList] = useState<Item[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
+     query$.next(event.target.value);
-     getItems(event.target.value).then((data) => {
-       setItemList(data);
-     });
  };

  useEffect(() => {
    getItems().then((data) => {
      setItemList(data);
    });
  }, []);

+  useEffect(() => {
+    const subscription = query$
+      .asObservable()
+      .pipe(debounceTime(1000))
+      .subscribe((query) => {
+        getItems(query).then((itemList) => {
+          setItemList(itemList);
+        });
+      });
+    return () => subscription.unsubscribe();
+  }, []);  

  return (
    <div>
      <h1>アイテム一覧</h1>
      ・・・
    </div>
  );
}
```

まず、`query$` という変数を定義して、handleChange 関数では `query$.next` に入力フォームの値を代入しています。これにより、 `query$.value` によって引き出せる `query$` の値が更新されていきます。
次に、 2 つめの useEffect で関数 `subscription` を定義し、unmount 時の cleanup 処理として return しています。
`subscription` 関数を解説すると、`query$` の値が変更された時、すなわち、入力フォームが変更され `query$.next()` によって値が更新された時に `subscribe` が動きます。 callback　関数の引数 `query` は入力フォームから受け取った値になります。つまり入力フォームが変更され `query$` の値が変わるたびに webAPI からアイテム配列を取得し state に反映しています。しかし、これだけじゃさっきまでのコードと変わりません。そこで `pipe()` の引数に `debounceTime(ミリ秒)` を持たせることで、 `query$` へ最後に変更があった後、指定したミリ秒の間は `subscribe` を行わず待ってくれます。

<!-- img -->

ログを見てわかる通り、1 度しか webAPI へのリクエストを送っていません。


## まとめ
debounce を使うことで何回も実行されていた処理を最小限にまとめることができます。これによりパフォーマンスの改善を見込めます。