import {Department} from "./department";
import {Skills} from "./skills";

export interface Employee {
  id: number,
  name: string,
  salary: number,
  permanent: boolean,
  department :Department,
  skills :Skills[]
}