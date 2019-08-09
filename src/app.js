const bodyParser = require('body-parser');

const registerRouter = require('./api')
const port = 3000

const start = (app,db) => {
    db.on('error', () => {
        console.log('error')
    })

    db.once('open', () => {
        console.log('database connected')
    })

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    registerRouter.forEach(route => {
        route(app)
    })

    app.listen(port, () => console.log(`Server is connected port: ${port}`))
}

module.exports = start;