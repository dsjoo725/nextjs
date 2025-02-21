import RCC from "@/components/rcc";
import { RSC } from "@/components/rsc";

export default function Page() {
  return (
    <div className="p-10">
      <h1 className="text-2xl">RSC + RCC</h1>
      <section id="rcc">
        <RCC num={10} />
      </section>
      <section id="rsc">
        <RSC num={20} />
      </section>
    </div>
  );
}
