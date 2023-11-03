<!DOCTYPE html>
<html>

<head>
    <title>Calculator</title>
</head>

<body>
    <h1>Calculator</h1>
    <form action="/calculate" method="post">
        <input type="number" name="num1" placeholder="Enter first number" required>
        <select name="operator">
            <option value="add">+</option>
            <option value="subtract">-</option>
            <option value="multiply">*</option>
            <option value="divide">/</option>
        </select>
        <input type="number" name="num2" placeholder="Enter second number" required>
        <button type="submit">Calculate</button>
    </form>
</body>

</html>



const express = require("express");
const bodyParser = require("body-parser"); // Require body-parser

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
// Set up a route to serve an HTML form
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// Set up a route to handle form submissions
app.post("/calculate", (req, res) => {
  console.log(req.body);
  const { num1, num2, operator } = req.body;
  let result;

  // Perform the calculation based on the operator
  switch (operator) {
    case "add":
      result = parseFloat(num1) + parseFloat(num2);
      break;
    case "subtract":
      result = parseFloat(num1) - parseFloat(num2);
      break;
    case "multiply":
      result = parseFloat(num1) * parseFloat(num2);
      break;
    case "divide":
      result = parseFloat(num1) / parseFloat(num2);
      break;
    default:
      result = "Invalid operator";
  }

  res.send(`Result: ${result}`);
});

// Start the server
app.listen(port, () => {
  console.log(`Calculator app listening at http://localhost:${port}`);
});



const { Readable } = require("stream");

const readableStream = new Readable({
  read(size) {
    this.push("Hello, ");
    this.push("Node.js!");
    this.push(null); // Signals the end of the stream
  },
});

readableStream.on("data", (chunk) => {
  console.log(chunk.toString());
});

const fileSystem = require("fs");
var data = "Sample text";
const writeStream = fileSystem.createWriteStream("output.txt");
writeStream.write(data, "UTF8");
writeStream.end();
writeStream.on("finish", () => {
  console.log("Finished writing");
});
writeStream.on("error", (error) => {
  console.log(error.stack);
});


const buffer = Buffer.from("Hello, Node.js", "utf-8");

const str = buffer.toString("utf-8");
console.log(str);

buffer.write("Updated", 7, 7, "utf-8");
console.log(buffer.toString("utf-8"));

const buffer1 = Buffer.alloc(5);
buffer1.fill(55);

const array = [65, 66, 67, 68, 69];
const buffer2 = Buffer.from(array);

console.log("Is buffer1 a Buffer?", Buffer.isBuffer(buffer1));

const strBuffer = buffer2.toString();

console.log("buffer1:", buffer1);
console.log("buffer2:", buffer2);
console.log("strBuffer:", strBuffer);

// const buf1 = Buffer.alloc(15)

// const names=["ayesha","eve","adam","mamta","anas"]
// let offset = 0
// names.forEach((name) =>{
// const byteslen = buf1.write(name, 0, "utf-8")
// console.log(`length : ${byteslen}, name:${name}, offset:${offset} `)
// offset+=byteslen
// })

// const buf2 = Buffer.alloc(20)
// const bufferWritten = buf2.write("this is ayesha nagdawala", 0, "utf-8")
// console.log(`buffer written : ${bufferWritten}`)
// const bufferContent = buf2.toString("utf-8", 0, bufferWritten)
// console.log(bufferContent)
