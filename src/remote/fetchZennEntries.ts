import { err, ok, Result } from "neverthrow";
import { ENDPOINT, USERNAME } from "./config";

export type ZennArticle = {
  emoji: string;
  title: string;
  slug: string;
  published_at: string;
  path: string;
};

type Response = {
  articles: ZennArticle[];
};

export async function fetchZennEntries(): Promise<
  Result<ZennArticle[], Error>
> {
  const respose = await fetch(`${ENDPOINT}?username=${USERNAME}&order=latest`);

  if (respose.ok) {
    const data = (await respose.json()) as Response;

    return ok(data.articles);
  } else {
    return err(new Error("zennからの記事の取得に失敗しました"));
  }
}
