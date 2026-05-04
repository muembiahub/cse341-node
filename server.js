//  express server 


const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello World! here we go');

})

app.listen(process.env.PORT || PORT, () => {
    console.log('Server is running at port '  (process.env.PORT || PORT));
})