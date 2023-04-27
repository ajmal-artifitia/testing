async function print() {
  const ThermalPrinter = require("node-thermal-printer").printer;
  const PrinterTypes = require("node-thermal-printer").types;
  let printer = new ThermalPrinter({
    type: PrinterTypes.EPSON,
    interface: "tcp://192.168.29.200",
  });
  printer.alignCenter();
//   printer.setTextSize(1, 1);
  printer.println("SHOPYWELl");
  printer.bold(true); // make the next lines bold
  printer.println("--------------------------------");
  printer.println("BILL");
  printer.println("--------------------------------");
  printer.bold(false); // turn off bold
  printer.println("Order Number: 123");
  printer.println("Date: 27-04-2023 4:00 PM");
  printer.println("Table: 5");
  printer.println("--------------------------------");
  printer.alignLeft();
  printer.tableCustom([
    { text: "Item", align: "LEFT", width: 0.6 },
    { text: "Qty", align: "CENTER", width: 0.15 },
    { text: "Price", align: "RIGHT", width: 0.25 },
  ]);
  printer.tableCustom([
    { text: "Pizza", align: "LEFT", width: 0.6 },
    { text: "2", align: "CENTER", width: 0.15 },
    { text: "10.00", align: "RIGHT", width: 0.25 },
  ]);
  printer.tableCustom([
    { text: "Salad", align: "LEFT", width: 0.6 },
    { text: "1", align: "CENTER", width: 0.15 },
    { text: "5.00", align: "RIGHT", width: 0.25 },
  ]);
  printer.println("--------------------------------");
  printer.tableCustom([
    { text: "Subtotal", align: "LEFT", width: 0.6 },
    { text: "", align: "CENTER", width: 0.15 },
    { text: "$15.00", align: "RIGHT", width: 0.25 },
  ]);
  printer.tableCustom([
    { text: "Tax", align: "LEFT", width: 0.6 },
    { text: "", align: "CENTER", width: 0.15 },
    { text: "$1.50", align: "RIGHT", width: 0.25 },
  ]);
  printer.tableCustom([
    { text: "Total", align: "LEFT", width: 0.6 },
    { text: "", align: "CENTER", width: 0.15 },
    { text: "$16.50", align: "RIGHT", width: 0.25 },
  ]);
  printer.println("--------------------------------");
  printer.println("Thank you for dining with us!");
  // //   printer.println("Hello world");
  //   await printer.printQR(
  //     "https://ouronlineservice.com/dine-in?id=64143dc8d47aa1c0dd8f1c2d&name=But-First_Chai&table=1"
  //   );
  printer.cut();
  try {
    let execute = printer.execute();
    console.error("Print done!");
  } catch (error) {
    console.log("Print failed:", error);
  }
}
print();
