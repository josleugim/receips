'use strict';

module.exports = app => {
    app.get('*', (req, res) => {
        res.send({ success: true, version: 'v1.1' });
    })
};