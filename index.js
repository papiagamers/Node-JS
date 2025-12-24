const app = require('express')();

app.get('/', (req, res) => 
    res.json({'msg':'Welcome To The Node With Container'})
);

const port = process.env.port || 8080;

app.listen(port, () => console.log(`App is Listening on http://localhost:${port}`));