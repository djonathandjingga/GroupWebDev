const express = require("express");
var fs = require("fs");
const router = express.Router();
const app = express();
 



//Middleware function:
const logger = (req,res,next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
}

//Middleware execue:
app.use(logger)

//Body Parser Middlware:
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use('/api/users', require("./src/api/user_routes"));
app.use('/api/favorite', require("./src/api/favorite_routes"));
app.use('/api/ingredients', require("./src/api/ingredients_routes"));
app.use('/api/recipe', require("./src/api/recipe_routes"));
app.use('/api/auth', require("./src/api/auth_routes"));

app.listen(PORT,()=>console.log(`Server running on port ${PORT}`));
const PORT = process.env.PORT || 5000;