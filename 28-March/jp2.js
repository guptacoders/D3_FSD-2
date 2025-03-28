// Create JSON Object which contains array of objects. Calculate perimeter of sqauare and circle by using side value and diameter value respectively.
// Write object as well as perimeter values in shape.txt file

// Formula   

//  Rectangle: (P) = 4 * side
// Circle : (C) = 2 * π * radius

var fs=require("fs")

var x=
[
    {
        "shape":"rectangle",
        "side":30
    },
    {
        "shape":"circle",
        "radius":10
    }
]


fs.writeFileSync("shape.txt",JSON.stringify(x));

data=fs.readFileSync("shape.txt","utf-8");

b=JSON.parse(data);


peri_rec=4*(b[0].side);
peri_cir=2*Math.PI*(b[1].radius);

fs.appendFileSync("shape.txt", "\n Perimeter Of Rectangle: "+peri_rec+"\n");
fs.appendFileSync("shape.txt", "Perimeter Of Circle: "+peri_cir);