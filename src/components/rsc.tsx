import { fetchJson } from "@/util/api";
import { sleep } from "@/util/sleep";

interface Props {
  num: number;
  sleepMs?: number;
}

export async function RSC({ num, sleepMs }: Props) {
  const data = await fetchJson(num);

  if (sleepMs) await sleep(sleepMs);

  return (
    <div className="flex flex-col">
      <span>id: {data.id}</span>
      <span>userId: {data.userId}</span>
      <span>title: {data.title}</span>
      <span>body: {data.body}</span>
    </div>
  );
}
