const express = require('express');
const path = require('path');
const app = express();

const PUBLIC = "public"
const INDEX_PAGE = "index.html";

// Serve static files (including CSS) from the public directory
app.use(express.static(path.join(__dirname, PUBLIC)));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, INDEX_PAGE));
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});