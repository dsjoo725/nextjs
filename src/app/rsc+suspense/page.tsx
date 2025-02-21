import { RSC } from "@/components/rsc";
import { Suspense } from "react";

export default function Page() {
  return (
    <div className="p-10">
      <h1 className="text-2xl">RSC + Suspense</h1>
      <Suspense fallback={<div>loading 10</div>}>
        <RSC num={10} sleepMs={1000} />
      </Suspense>
      <Suspense fallback={<div>loading 20</div>}>
        <RSC num={20} sleepMs={2000} />
      </Suspense>
      <Suspense fallback={<div>loading 30</div>}>
        <RSC num={30} sleepMs={3000} />
      </Suspense>
    </div>
  );
}
