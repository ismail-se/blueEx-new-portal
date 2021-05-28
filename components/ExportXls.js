import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";

export const ExportXls = ({ csvData, fileName, headings }) => {
  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";

  const exportToCSV = (csvData, fileName, headings) => {
    var wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(csvData, {
      origin: "A2",
      skipHeader: true,
    });
    // const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    XLSX.utils.sheet_add_aoa(ws, headings);
    XLSX.utils.book_append_sheet(wb, ws);
    // const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const excelBuffer = XLSX.writeFile(wb, fileName + ".xlsx");
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  };

  return (
    <button
      className="csvButton"
      onClick={(e) => exportToCSV(csvData, fileName, headings)}
    >
      Excel
    </button>
  );
};
