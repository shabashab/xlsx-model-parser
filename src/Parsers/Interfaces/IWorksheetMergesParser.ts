import { Worksheet } from "@shabashab/exceljs";
import { WorksheetModel } from "@xlsx-model/models";

export default interface IWorksheetMergesParser {
  parse(
    worksheet: Worksheet,
    inputModel: WorksheetModel,
  ): WorksheetModel | undefined;
}
