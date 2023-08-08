const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
const sequelize = require('./connections/connections');
const routes = require('./routes');


const app = express();
const PORT = process.env.PORT || 3002;

// handlebars middleware 
// app.engine('handlebars', hbs.engine);
// app.use('view engine', 'handlebars')

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}))

app.use(session({
    secret: 'secret secret',
    cookie: { maxAge: 30000},
    resave: true,
    // otherwise will create new session upon every server launch
    saveUninitialized: false

}));

// should be set up after session 
app.use(routes);

sequelize.sync({ force: false}).then(() => {
    app.listen(PORT, (req, res) => {
    console.log(`app running on http://localhost:${PORT}`)
})})