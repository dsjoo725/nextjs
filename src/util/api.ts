export interface JsonPlaceholder {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export async function fetchJson(num: number): Promise<JsonPlaceholder> {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${num}`, {
    method: "GET",
    cache: "no-cache",
  });
  const data: JsonPlaceholder = await response.json();

  return data;
}
