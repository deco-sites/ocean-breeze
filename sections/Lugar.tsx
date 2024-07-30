import type { Temperature } from "apps/weather/loaders/temperature.ts";

export interface LugarProps {
  text: string;
  subheading?: string;
  alignment: "Left" | "Center" | "Right";
  temperature?: Temperature | null;
}

const ALIGNMENT_TEXT = {
  "Left": "items-start text-start",
  "Center": "items-center text-center",
  "Right": "items-end text-end",
};

export default function Lugar(
  {
    text =
      "Lorem ipsum dolor sit amet consectetur. Placerat ornare diam nulla fringilla gravida justo elementum. Ut sed in.",
    subheading,
    alignment = "Left",
    temperature,
  }: LugarProps,
) {
  return (
    <section class="bg-base-100">
      <div class="xl:container xl:mx-auto mx-5 md:mx-10 py-10 md:py-24">
        <div
          class={`flex flex-col gap-6 ${ALIGNMENT_TEXT[alignment ?? "Left"]}`}
        >
          <h1 class="font-bold text-base-content text-[40px] leading-[120%]">
            {text} {temperature ? temperature.celsius : ""}ºC,
          </h1>
          {subheading && (
            <p class="text-base-content text-[18px]">{subheading}</p>
          )}
        </div>
      </div>
    </section>
  );
}
