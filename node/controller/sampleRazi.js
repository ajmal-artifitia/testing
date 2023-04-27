let ip = "192.168.29.250";

async function print() {
  const ThermalPrinter = require("node-thermal-printer").printer;
  const PrinterTypes = require("node-thermal-printer").types;
  let printer = new ThermalPrinter({
    type: PrinterTypes.EPSON,
    interface: `tcp://${ip}`,
  });
  // Connect to the printer and set it up
  printer
    .isPrinterConnected()
    .then(() => {
      printer.alignCenter();
      printer.bold(true); // make the next lines bold
      printer.println("KOT");
      printer.println("GENARAL");
      printer.bold(false); // turn off bold
      printer.println();
      printer.println("Order Number: 123");
      printer.println("Date: 27-04-2023 10:00 AM");
      printer.println("Table: 5");
      printer.println("Captain: Ajmal KT");
      printer.println("---------------------------------------------");
      printer.alignCenter();
      printer.tableCustom([
        { text: "SI", align: "LEFT", width: 0.1, bold: true },
        { text: "Item", align: "CENTER", width: 0.7, bold: true },
        { text: "Qty", align: "CENTER", width: 0.1, bold: true },
      ]);
      printer.println("---------------------------------------------");
      for (let i = 0; i < 3; i++) {
        printer.tableCustom([
          { text: `${i + 1}`, align: "LEFT", width: 0.1 },
          {
            text: "hyderabadi biryani mutton Half biryani mutton Half",
            align: "CENTER",
            width: 0.7,
          },
          { text: "2", align: "CENTER", width: 0.1 },
        ]);
      }
      printer.cut();
      printer.execute();
    })
    .catch((error) => {
      console.error(error);
    });
}

print();
