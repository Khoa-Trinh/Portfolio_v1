import { cn } from "@/lib/utils";
import Image from "next/image";

export function MainAboutmeCard({
  title,
  description,
  type = "short",
  icons,
}: AboutmeMain) {
  return (
    <div
      className={cn(
        "h-[15.3125rem] rounded-[1rem] flex flex-col items-center relative shadow-[0px_4px_4px_2px_rgba(0,0,0,0.25)]",
        type === "long" ? " w-[31.875rem]" : " w-[15.3125rem]"
      )}
    >
      <div className="descriptions mt-[1rem]">{title}</div>
      <div className="titles mt-[1.875rem]">{description}</div>

      {icons.map(({ url, position, rotate, size }, i) => {
        const [verti, hori] = position[0].split("-");
        const [x, y] = [position[1], position[2]];
        const [hei, wi] = [size[0], size[1]];
        return (
          <div
            className={cn(
              "absolute",
              verti + "-" + y,
              hori + "-" + x,
              "rotate-[" + rotate + "deg]"
            )}
            key={i}
          >
            <div
              className={cn(
                "relative",
                "h-[" + hei + "rem]",
                "w-[" + wi + "rem]"
              )}
            >
              <Image src={url} alt="Icons" fill />
            </div>
          </div>
        );
      })}
    </div>
  );
}

// 'bottom-0 h-[3.125rem] w-[3.125rem]'

export function SkillAboutmeCard({ url, pLanguage, progress }: AboutmeSkill) {
  return (
    <div className="h-[4.75rem] w-[26.375rem] rounded-[0.5rem] flex items-center shadow-[0px_4px_4px_2px_rgba(0,0,0,0.25)]">
      <div className="relative h-[3rem] w-[3rem] mx-[0.9375rem]">
        <Image src={url} alt="ProgramIcon" fill />
      </div>
      <div className="mr-[1.25rem] w-[20.25rem]">
        <div className="flex justify-between paragraphs">
          <div>{pLanguage}</div>
          <div>{progress + "%"}</div>
        </div>
        <div className="h-[1.5rem] w-full rounded-[0.25rem] bg-secondary">
          <div
            className={cn(
              "h-full bg-primary rounded-[0.25rem]",
              "w-[" + progress + "%]"
            )}
          ></div>
        </div>
      </div>
    </div>
  );
}

// 'w-[60%]'
// 'w-[40%]'
// 'w-[90%]'
// 'w-[80%]'
// 'w-[0%]'
// 'w-[5%]'
// 'w-[10%]'
// 'w-[2%]'
// 'w-[60%]'
// 'w-[70%]'
