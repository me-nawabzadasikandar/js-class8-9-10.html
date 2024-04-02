<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>javascript</title>
//class8-js//
    <title>www.break and continue.com</title>
</head>
<body>
    <h1>break conditions</h1>
    
    <script>
        for(i=0; i<10; i++){
            if(i==4){
                break;
            }
            document.write(i + "This is loop" + "</br>");
        }
    </script>

    <h1>continue conditions</h1>

    <script>
    for(i=0; i<10; i++){
        if(i==4){
            continue;
        }
        document.write(i + "This is loop" + "</br>");
    }
     
        let i=0;
         do{
            i++;
            document.write("This is do while-loop" + "</br>");
        }
        while(i<10);

        for(i=0; i<10; i++){
            document.write("This is for-loop" + "</br>");
        }

    
        let i=0;
    while(i<10){
        document.write("This is while-loop" + "</br>");
        i++;
    }
    //class9-js//

let obj ={
    name:"sikandar",
    age: 15,
    institute:"Aptech Learning Center",
    courses:{
        programming:"Javascript",
        designing: "Css",
        graphic:{
            image: "photoshop",
            video: "videoediting",
            vector: ["adobe illustrator", "AE"],
        }
    }
}
document.write(` Name: ${obj.name} </br> Age: ${obj.age} </br> Institue name: ${obj.institute} </br> Course name:${obj.courses.graphic.vector[1]}`)


let my_object = {
            name:"sikandar",
            bestfriend_name:"muddasir",
            institute:"Aptech Learning Center",
        }
        document.write("Name:"+my_object.name + "</br>");
        document.write("bestfriend name:"+ my_object.s_name + "</br>");
        document.write("Intitute name:"+my_object.institute);
             //class10-js
            //www.function practice.com//
            let obt = +prompt("enter your obtain marks");
        let tot = +prompt("enter your total marks");
        function fun(){
            let res = obt/tot*100;
            document.write(res.toFixed(2)+"%");
        }
        fun();
//normal function//


    function fun_1(){
        document.write("This is function");
    }
    fun_1();
</script>

<h4>arrow function</h4>

<script>
    let fun = () =>{
        document.write("This is arrow function");
    }
    fun();
</script>

<h4>anonymous function</h4>

<script>
    (()=>{
        document.write("This is anonymous function");
    })
    ();
</script>

</html>