const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
	res.sendFile(__dirname + "/index_html/calculator.html");
});

app.get("/bmiCalculator", function(req, res){
	res.sendFile(__dirname + "/index_html/bmiCalculator.html");
});

//cuando se le manda la información,a procesa y PUBLICA su resultado.
app.post("/", function(req, res){
	var firstNumber = Number(req.body.num1);
	var secondNumber = Number(req.body.num2);
	var sign = req.body.sign;
	var result;

	if (sign == '+')
		result = firstNumber + secondNumber;
	else if (sign == '-')
		result = firstNumber - secondNumber;
	else if (sign == '*')
		result = firstNumber * secondNumber;
	else if (sign == '/')
		result = firstNumber - secondNumber;
	else if (sign == '%')
	result = firstNumber % secondNumber;

	res.send("The result is " + result);
});

app.post("/bmiCalculator", function(req, res){
	var height= parseFloat(req.body.num1);
	var weight = parseFloat(req.body.num2);
	var result;

	result = height / (height * weight);

	res.send("Your BMI is " + result);
});

app.listen(3000, function(){
	console.log("Port 3000 is listenning");
});
