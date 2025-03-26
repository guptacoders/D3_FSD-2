var fs=require("fs");

//Synchronous

// fs.writeFileSync("test.txt","Hello");
// console.log("Completed");
// console.log("test");


// Asynchronous

fs.writeFile("test.txt","How are you ?",
    function(err)
    {
        if(err)
        {
            console.log(err);
        }
        else
        {
            console.log("Done");
        }
    }
);
console.log("outside")