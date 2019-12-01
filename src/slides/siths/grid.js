import React from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import CustomCell from "./custom-cell";
const columnDefs = [
  {
    headerName: "Make",
    field: "make",
    cellEditorFramework: CustomCell,
    editable: true
  },
  {
    headerName: "Model",
    field: "model",
    cellEditorFramework: CustomCell,
    editable: true
  },
  {
    headerName: "Price",
    field: "price",
    cellEditorFramework: CustomCell,
    editable: true
  }
];
const rowData = [
  {
    make: "Toyota",
    model: "Celica",
    price: 35000
  },
  {
    make: "Ford",
    model: "Mondeo",
    price: 32000
  },
  {
    make: "Porsche",
    model: "Boxter",
    price: 72000
  }
];
function Grid() {
  return (
    <div
      className="ag-theme-balham"
      style={{
        height: "130px",
        width: "600px"
      }}
    >
      <AgGridReact columnDefs={columnDefs} rowData={rowData} />
    </div>
  );
}

export default Grid;
