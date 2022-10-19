const express = require('express');
const fs = require('fs');

const app = express()
const port = 9000
const file = '../../Downloads/file.zip' 

app.get('/', (req, res) => {
    res.writeHead(200, {
                "Content-Type": "application/octet-stream",
                "Content-Disposition": "attachment; filename=download.zip"
            });

    const readStream = fs.createReadStream(file);
    readStream.pipe(res)

    readStream.on('end', function () {
        res.end();
    });
})

app.listen(port, () => {
    console.log("server started successfully", port)
})
