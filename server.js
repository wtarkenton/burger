var express = require ("express");
var methodOverride = require ("method-override");
var bodyParser = require ("body-parser");
var exphbs = require ("express-handlebars");

var port = process.env.PORT || 3000;

var app = express();
app.use(express.static('public'));

app.use(bodyParser.urlencoded({
	extended: false
}))

app.use(methodOverride('_method'));
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));

app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js")

app.use("/", routes);
app.use("/update", routes);
app.use("/create", routes);


app.listen(port);

