import { Area } from "./area.model";

export interface Printer {
  id: string;
  name: string;
  model: string;
  serialNumber: string;
  ipAddress: string;
  macAddress: string;
  tcpPort: number;
  hostName?: string;
  subnetMask?: string;
  gateway?: string;
  area: Area;
  isActive: boolean;
  createdAt: string;
}
