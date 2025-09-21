import { Invoice } from "@/components/invoice";
import { ModeToggle } from "@/components/ui/mode-toggle";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="my-4">
        <ModeToggle />
      </div>
      <Invoice />
    </div>
  );
}
