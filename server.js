const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());  // Enable CORS for the frontend to access the backend

let gasValue = 0;
let isDark = false;

// API endpoint to get sensor data
app.get('/api/sensor-data', (req, res) => {
  res.json({
    gasValue: gasValue,
    isDark: isDark,
  });
});

// Endpoint to receive updated sensor data from IoT (Arduino)
app.post('/api/update-sensor-data', express.json(), (req, res) => {
  const { gas, dark } = req.body;

  gasValue = gas;
  isDark = dark;

  res.status(200).send('Sensor data updated');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
