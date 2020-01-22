var express = require("express");
var app = express();

app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs")

app.get("/", function(req, res) {
	res.render("circles");
})

app.listen(process.env.PORT || 3000, function() {
	console.log("Patatap server started!");
});