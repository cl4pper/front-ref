require('module-alias/register');
require('dotenv').config();
const app = require('./src/app');
const port = process.env.SERVER_PORT;

app.listen(port, () => console.log(`Server running at port ${port}`));