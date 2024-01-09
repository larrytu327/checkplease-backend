///////////////////////////////
// DEPENDENCIES
////////////////////////////////

// initialize .env variables
require("dotenv").config();

// pull PORT from .env, give default value of 4000 and establish DB Connection
const mongoose = require('mongoose');
const { PORT, MONGODB_URI } = process.env;
const restaurantbillsController = require('./controllers/restaurantbills');
const cors = require("cors")
const morgan = require("morgan")
const express = require('express');
const router = express.Router();

///////////////////////////////
// MIDDLEWARE
////////////////////////////////
app.use(express.json()); // parse json bodies - this will run before our request accesses the people router

app.use(cors()); //to prevent cors errors, open access to all origins
app.use(morgan("dev")); //logging for development

// all requests for endpoints that begin with '/people'
app.use('/restaurantbills', restaurantbillsController)


///////////////////////////////
// DATABASE CONNECTION
////////////////////////////////
mongoose.connect(MONGODB_URI)

// Connection Events
mongoose.connection
  .on("open", () => console.log("Your are connected to mongoose"))
  .on("close", () => console.log("Your are disconnected from mongoose"))
  .on("error", (error) => console.log(error));

// import express
const express = require("express");

// create application object
const app = express();
	
///////////////////////////////
// ROUTES
////////////////////////////////
// create a test route
// PEOPLE INDEX ROUTE
router.get("/", async (req, res) => {
	res.status(200).json({message: "restaurantbills index route"})
});

// PEOPLE CREATE ROUTE
router.post("/", async (req, res) =>  {
	console.log(req.body)
	res.status(200).json({message: "restaurantbills create route"})
});

// PEOPLE SHOW ROUTE
router.get("/:id", async (req, res) => {
	res.status(200).json({message: "restaurantbills show route: " + req.params.id })
});

// restaurantbills DELETE ROUTE
router.delete("/:id", async (req, res) => {
	res.status(200).json({message: "restaurantbills delete route: " + req.params.id })
});

// PEOPLE UPDATE ROUTE
router.put("/:id", async (req, res) => {
	console.log(req.body)
	res.status(200).json({message: "restaurantbills update route: " + req.params.id })
});

///////////////////////////////
// LISTENER
////////////////////////////////
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));


module.exports = router;