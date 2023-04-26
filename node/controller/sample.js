const qz = require('qz-tray');

async function fetchAllPrinters() {
  try {
    // Wait for QZ Tray to be connected
    await qz.api.connect();
    // Fetch all printers
    const printers = await qz.printers.find();
    // Log the list of printers to the console
    console.log(printers);
  } catch (err) {
    console.error(err);
  } finally {
    // Disconnect from QZ Tray
    qz.api.disconnect();
  }
}

// Call the fetchAllPrinters function to fetch the list of printers
fetchAllPrinters();
