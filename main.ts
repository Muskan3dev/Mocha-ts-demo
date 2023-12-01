var fs = require("fs");
// Asynchronous read
fs.readFile('input.txt', function (err, data) {
    if (err) {
        return console.error(err);
    }
    console.log("Asynchronous read: " + data.toString());
});

// Synchronous read
var data = fs.readFileSync('input.txt');
console.log("Synchronous read: " + data.toString());

console.log("Program Ended");

//Going to open file
console.log("Going to open file");
fs.open('input.txt', 'r+', function (err, fd) {
    if (err) {
        console.error(err);
    }
    console.log("File opened successfully");
});

//getting file information-using fs.stat(path,callback)
console.log("Going to get file info");
fs.stat("input.txt",function(err,stats) {
    if(err){
        console.error(err);
    }
    console.log(stats);
    console.log("Got file info successfully");
    //check file type
    console.log("isFile? ", stats.isFile());
    console.log("isDirectory? ", stats.isDirectory());
});

//Writing in an existing file-fs.writeFile(filename,data,callback)
console.log("Going to write into an existing file");
fs.writeFile('input.txt', 'It is used on client side as well as server side', function(err){
if(err){
    console.error(err);
}
console.log("Data written successfully");
console.log("Let's read newly written Data");
 fs.readFile('input.txt', function (err,data){
if(err){
    console.log(err);
}
console.log("Asynchronous read:"+data.toString());
 });
});