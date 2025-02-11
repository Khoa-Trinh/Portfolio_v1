import Aboutme from "@/components/Aboutme";
import Resume from "@/components/Resume";
import Starter from "@/components/Starter";

export default function Home() {
  return (
    <div className="w-full mt-[5.75rem]">
      <Starter />
      <Aboutme />
      <Resume />
    </div>
  );
}
