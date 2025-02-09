import { cn } from "@/lib/utils";

export default function BetterCard({
  title,
  description,
  type = "short",
  icons,
}: BetterCard) {
  return (
    <div
      className={cn(
        "h-[15.3125rem] rounded-[1rem] flex justify-center relative",
        type === "long" ? " w-[31.875rem]" : " w-[15.3125rem]"
      )}
    >
      <div className="descriptions mt-[1rem]">{title}</div>
      <div className="titles mt-[1.875rem]">{description}</div>

      {icons.map(({url, position}) => (
        <></>
      ))}
    </div>
  );
}
