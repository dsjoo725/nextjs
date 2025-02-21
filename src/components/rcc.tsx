"use client";

import { useEffect, useState } from "react";
import { fetchJson, JsonPlaceholder } from "@/util/api";

interface Props {
  num: number;
}

export default function RCC({ num }: Props) {
  const [json, setJson] = useState<JsonPlaceholder | null>(null);

  const fetchHandler = async () => {
    const data = await fetchJson(num);
    setJson(data);
  };

  useEffect(() => {
    fetchHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (json === null) return <div>no data</div>;

  return (
    <div className="flex flex-col">
      <span>id: {json.id}</span>
      <span>userId: {json.userId}</span>
      <span>title: {json.title}</span>
      <span>body: {json.body}</span>
    </div>
  );
}
