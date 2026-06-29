import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Pause, Square, Settings } from "lucide-react";

function ButtonGroup() {
  return (
    <div className="flex items-center gap-2">
      <Button variant="default" className="gap-2">
        <Pause className="size-4" />
        Pause
      </Button>
      <Button variant="outline" className="gap-2">
        <Square className="size-4" />
        Stop
      </Button>
      <Separator orientation="vertical" className="h-6" />
      <Button variant="ghost" size="icon">
        <Settings className="size-4" />
      </Button>
    </div>
  );
}

export default ButtonGroup;
