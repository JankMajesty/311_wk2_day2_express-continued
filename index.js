const express = require("express");
const bodyParser = require("body-parser");

const {comments} = require("./routes/comments");
const {contacts} = require("./routes/contacts");
const {products} = require("./routes/products");
const {vehicles} = require("./routes/vehicles");

const app = express();
app.use(express.json());

app.use(express.static('public'));
// app.use(commentsRouter);
// app.use(contactsRouter);
// app.use(productsRouter);
// app.use(vehiclesRouter);


const port = process.env.PORT || 4001;

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});

