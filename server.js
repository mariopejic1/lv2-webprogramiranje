const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Poslužuje sadržaj iz public mape
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send("Pozdrav sa Railway servera!");
});

app.listen(PORT, () => {
  console.log(`Server pokrenut na portu ${PORT}`);
});
