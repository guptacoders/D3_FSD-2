var fs=require("fs");
fs.writeFile("t1.txt","Hello",
    (err)=>{
        if(err)
        {
            console.log(err);
        }
        else
        {
            console.log("written");
            
            fs.appendFile("t1.txt","How are You !!",
                (err)=>
                    {
                    if(err)
                    {
                        console.log(err);
                    }
                    else
                    {
                        console.log("Appended");

                        fs.rename("t1.txt","new.txt",
                            (err)=>
                            {
                                if(err)
                                {
                                    console.log(err);
                                }
                                else
                                {
                                    console.log("Rename Done.")
                                }
                            }
                        )
                    }
                }
            );

        }
    }
);
