const express = require('express');
const http = require('http');


const app = express();
const NODE_ENV = 'development';//process.env.NODE_ENV || 'development';

// tell the app to look for static files in these directories
app.use(express.static('./dist/'));

app.all('/', (req, res) => {
    res.render('index.ejs', {
        pathJSScript: NODE_ENV === 'development' ?
            'js/debug/app.js' :
            'js/prod/app.js',
    });
});

const httpServer = http.createServer(app);

const PORT = NODE_ENV === 'development' ? 3004 : 3001;
const HOST = 'localhost';

httpServer.listen(PORT, HOST);
console.log(`Node.js started for module front-sip-react-redux with NODE_ENV = ${NODE_ENV} on http://${HOST}:${PORT}`);
