function monitorCount(rows, columns) {
  return rows * columns;
}

function costOfMonitors(rows, columns) {
  return (monitorCount(rows,columns) *200);
}

const totalCost = costOfMonitors(5,4);

console.log(totalCost);


/* Functions called within another function are called helper functions. On lines 5-6 the helper function "monitorCount" is called within the function "costOfMonitors" to produce the overall cost of the monitors. I stored this value in a variable called "totalCost" on line 9, which then printed "4000" (20 * 200) to the console on line 11. */