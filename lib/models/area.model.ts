import { Branch } from "./branch.model";
import { Requisition } from "./requisition.model";
import { Table } from "./table.model";

export interface Area {
  id: string;
  name: string;
  tables: Table[];
  requisitions?: Requisition[];
  branch?: Branch;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}
