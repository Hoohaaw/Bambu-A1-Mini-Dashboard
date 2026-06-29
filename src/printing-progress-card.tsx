import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardAction,
  CardContent,
} from "@/components/ui/card";
import { Clock, Layers } from "lucide-react";

const PROGRESS = 50;

function PrintingProgressCard() {
  return (
    <Card>
      <CardHeader className="border-b">
        <CardTitle>Print Progress</CardTitle>
        <CardAction>
          <Badge variant="secondary">Benchy.3mf</Badge>
        </CardAction>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-baseline justify-between">
            <span className="text-2xl font-semibold tabular-nums">
              {PROGRESS}%
            </span>
            <span className="text-xs text-muted-foreground">
              Layer 124 / 248
            </span>
          </div>
          <Progress value={PROGRESS} max={100} className="h-2" />
        </div>

        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="flex items-center gap-2 rounded-lg bg-muted/50 px-3 py-2">
            <Clock className="size-4 text-muted-foreground" />
            <div>
              <p className="text-xs text-muted-foreground">Remaining</p>
              <p className="font-medium tabular-nums">1h 12m</p>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-muted/50 px-3 py-2">
            <Layers className="size-4 text-muted-foreground" />
            <div>
              <p className="text-xs text-muted-foreground">Layer height</p>
              <p className="font-medium tabular-nums">0.20 mm</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default PrintingProgressCard;
