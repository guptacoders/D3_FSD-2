// Write a Node JS script that asynchronously writes data to a file named "test1.js" if no error occurs during the writing process the script should 
// than append additional data to the same file. 

//Finally it should read the content of the file after 2 second & Display it on console.

fs=require("fs");
fs.writeFile("test1.txt","Hello",
    (err)=>
    {
        if(err)
        {
            console.log(err);
        }
        else
        {
            fs.appendFile("test1.txt","Good Morning.",
                (err)=>
                {
                    if(err)
                    {
                        console.log(err);
                    }
                    else
                    {
                       
                    }
                }
            )
        }
    }
)

var rfile=function()
{
    setTimeout(function(){
        fs.readFile("test1.txt","utf-8",
            (err,data)=>
            {
                if(err)
                {
                    console.log(err);
                }
                else
                {
                    console.log(data);
                }
            }
        )
    },2000)
}


rfile();