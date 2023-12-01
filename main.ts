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

/*Reading a file using -fs.read(fd, buffer, offset, length, position, callback)-This
 This method use file descriptor to read the file*/
var buf=new Buffer(1024);
console.log("Going to open existing file");
fs.open('input.txt', 'r+' , function(err,fd){
if(err){
    console.error(err);
}
console.log("File opened successfully");
console.log("Going to read the file");
fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
if(err){
    console.error(err);
}
console.log(bytes+"bytes read")
if(bytes<0){
    console.log(buf.slice(0,bytes).toString());
}
});
});

//closing a file-fs.close(fd,callback)
var buf=new Buffer(1024);
console.log("Going to open an existing file");
fs.open('input.txt', 'r+' , function(err,fd){
if(err){
console.error(err);
}
console.log("File opened successfully");
console.log("Going to read the file");
fs.read(fd, buf, 0, buf.length, 0, function(err, bytes) {
    if (err) {
       console.log(err);
    }

    // Print only read bytes to avoid junk.
    if(bytes > 0) {
       console.log(buf.slice(0, bytes).toString());
    }
    //close the file
    fs.close(fd,function(err){
if(err){
    console.error(err);
}
console.log("File closed successfully");
    });
});
});

//Truncate a file-truncate-fs.ftruncate(fd, len, callback)
console.log("Going to truncate a file");
console.log("Going to open an existing file");
fs.open('input.txt', 'r+' , function(err,fd){
if(err){
    console.error(err);
}
console.log("File opened successfully");

fs.ftruncate(fd, 10, function(error){
if(err){
    console.error(err);
}
console.log("Going to read the same file"); 
      
      fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
         if (err) {
            console.log(err);
         }

         // Print only read bytes to avoid junk.
         if(bytes > 0) {
            console.log(buf.slice(0, bytes).toString());
         }
         // Close the opened file.
         fs.close(fd, function(err) {
            if (err) {
               console.log(err);
            } 
            console.log("File closed successfully.");
        });
    });
});
});