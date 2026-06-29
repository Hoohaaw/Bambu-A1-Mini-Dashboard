import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";

type DeviceRow = {
  device: string;
  status: string;
  statusVariant: "default" | "secondary" | "outline" | "destructive";
  value: string;
  target: string;
};

const rows: DeviceRow[] = [
  { device: "Nozzle", status: "Heating", statusVariant: "default", value: "210°C", target: "220°C" },
  { device: "Heated Bed", status: "Ready", statusVariant: "secondary", value: "60°C", target: "60°C" },
  { device: "Chamber", status: "Idle", statusVariant: "outline", value: "32°C", target: "—" },
  { device: "Part Fan", status: "Running", statusVariant: "secondary", value: "100%", target: "100%" },
];

function ControlTable() {
  return (
    <Card>
      <CardHeader className="border-b">
        <CardTitle>Device Status</CardTitle>
      </CardHeader>
      <CardContent className="px-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="pl-4">Device</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Current</TableHead>
              <TableHead className="pr-4 text-right">Target</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.device}>
                <TableCell className="pl-4 font-medium">{row.device}</TableCell>
                <TableCell>
                  <Badge variant={row.statusVariant}>{row.status}</Badge>
                </TableCell>
                <TableCell className="tabular-nums">{row.value}</TableCell>
                <TableCell className="pr-4 text-right tabular-nums text-muted-foreground">
                  {row.target}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

export default ControlTable;
