import PrintingProgressCard from "./printing-progress-card";
import ButtonGroup from "./button-group";
import ControlTable from "./device-control";
import CameraFeed from "./camera-feed";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Printer, Thermometer, Clock, Gauge, Wifi } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type StatTileProps = {
  icon: LucideIcon;
  label: string;
  value: string;
};

function StatTile({ icon: Icon, label, value }: StatTileProps) {
  return (
    <Card className="flex-row items-center gap-3 px-4 py-3">
      <div className="flex size-9 items-center justify-center rounded-lg bg-muted">
        <Icon className="size-4 text-muted-foreground" />
      </div>
      <div className="min-w-0">
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="truncate font-semibold tabular-nums">{value}</p>
      </div>
    </Card>
  );
}

function Dashboard() {
  return (
    <div className="min-h-screen bg-muted/30">
      <div className="mx-auto max-w-6xl space-y-6 p-4 md:p-8">
        {/* Header */}
        <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <Printer className="size-5" />
            </div>
            <div>
              <h1 className="font-heading text-xl font-semibold leading-tight">
                Bambu Lab X1 Carbon
              </h1>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Badge className="gap-1.5 bg-green-600 text-white">
                  <span className="size-1.5 rounded-full bg-white" />
                  Printing
                </Badge>
                <span className="flex items-center gap-1">
                  <Wifi className="size-3.5" /> Connected
                </span>
              </div>
            </div>
          </div>
          <ButtonGroup />
        </header>

        {/* Main grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Left: camera + stats */}
          <div className="space-y-6 lg:col-span-2">
            <CameraFeed />
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              <StatTile icon={Thermometer} label="Nozzle" value="210°C" />
              <StatTile icon={Thermometer} label="Bed" value="60°C" />
              <StatTile icon={Clock} label="Time left" value="1h 12m" />
              <StatTile icon={Gauge} label="Speed" value="100%" />
              <StatTile icon={Gauge} label="Flow" value="98%" />
              <StatTile icon={Printer} label="Filament" value="PLA Matte" />
            </div>
          </div>

          {/* Right: progress */}
          <div className="lg:col-span-1">
            <PrintingProgressCard />
          </div>
        </div>

        {/* Device table */}
        <ControlTable />
      </div>
    </div>
  );
}

export default Dashboard;
