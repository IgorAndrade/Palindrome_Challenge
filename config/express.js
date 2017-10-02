module.exports = function () {
    "use strict";

    var express = require('express'),
        bodyParser = require('body-parser'),
        router = require('../router');
    var cors = require('cors');

    var app = express();

    app.use(cors());
    app.set('port', process.env.PORT || 3000);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.set('view engine', 'html');
    app.engine('html', require('ejs').renderFile);

    router(app);

    app.get('*', function (req, res) {
        res.status(404).json({ error: "route not implemented" });
    });

    return app;
}