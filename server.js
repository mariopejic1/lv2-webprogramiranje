const express = require('express');
const app = express();

// Poslužuje statičke datoteke (HTML, CSS, slike) iz mape 'public'
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html'); // Poslužuje početnu stranicu
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server pokrenut na portu ${PORT}`);
});