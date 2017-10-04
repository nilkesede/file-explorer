const feathers = require('feathers');
const rest = require('feathers-rest');
const socketio = require('feathers-socketio');
const memory = require('feathers-memory');
const bodyParser = require('body-parser');
const handler = require('feathers-errors/handler');

const app = feathers();

app.configure(rest());
app.configure(socketio());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', memory());
app.use(handler());

app.listen(3000);
