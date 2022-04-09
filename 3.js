// Имена столбцов
const columnDefs = [
  { field: "make", sortable: true, filter: true },
  { field: "model" },
  { field: "price" }
];

// Строки
const rowData = [
  { make: "Toyota", model: "Celica", price: 35000 },
  { make: "Ford", model: "Mondeo", price: 32000 },
  { make: "Porsche", model: "Boxter", price: 72000 }
];

// Настройка грида
const gridOptions = {
  columnDefs: columnDefs,
  rowData: rowData,
  localeText: AG_GRID_LOCALE_RU
};

document.addEventListener('DOMContentLoaded', () => {
    const gridDiv = document.querySelector('#myGrid');
    new agGrid.Grid(gridDiv, gridOptions); // Создание грида
});