import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Camera, Maximize2, Video } from "lucide-react";

function CameraFeed() {
  return (
    <Card className="overflow-hidden p-0">
      <CardContent className="p-0">
        <div className="relative aspect-video w-full bg-gradient-to-br from-neutral-900 to-neutral-700">
          {/* Placeholder feed surface */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-neutral-400">
            <Camera className="size-10" strokeWidth={1.5} />
            <p className="text-sm font-medium">Camera feed unavailable</p>
            <p className="text-xs text-neutral-500">Live view will appear here</p>
          </div>

          {/* Top-left live indicator */}
          <div className="absolute left-3 top-3 flex items-center gap-2">
            <Badge className="gap-1.5 bg-red-600 text-white">
              <span className="size-1.5 animate-pulse rounded-full bg-white" />
              LIVE
            </Badge>
            <Badge variant="secondary" className="gap-1">
              <Video className="size-3" />
              1080p
            </Badge>
          </div>

          {/* Top-right fullscreen control */}
          <div className="absolute right-3 top-3">
            <Button
              size="icon"
              variant="secondary"
              className="size-8 bg-black/40 text-white hover:bg-black/60"
            >
              <Maximize2 className="size-4" />
            </Button>
          </div>

          {/* Bottom overlay caption */}
          <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/70 to-transparent px-4 py-3">
            <span className="text-xs font-medium text-white">Chamber Camera</span>
            <span className="text-xs text-neutral-300">12:34:56</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default CameraFeed;
