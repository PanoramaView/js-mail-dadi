var a = 1;
var game = 1;

while(a === 1){
    document.write("Gioco dei dadi <br>");
    console.log("\n Gioco dei dadi");
    document.write("Partita n"+ game +"<br>");
    console.log("Partita n"+ game);
    game++;
    var rand1 = Math.ceil(Math.random()*6);
    var rand2 = Math.ceil(Math.random()*6);

    console.log("Player1 rolled: "+ rand1);
    document.write("Player1 rolled: "+ rand1 + "<br>");
    console.log("Player2 rolled: "+ rand2);
    document.write("Player1 rolled: "+ rand2+ "<br>");
    if(rand1 > rand2){
        console.log("Player1 wins");
        document.write("Player1 wins <br>");

    }else if(rand1 < rand2){
        console.log("Player2 wins");
        document.write("Player2 wins <br>");
    }else{
        console.log("Draw");
        document.write("It's a draw <br>");
    }
    document.write("<br>");
    
    var risposta = 0;
    while(risposta === 0){
        var risp = prompt("Vuoi fare un altra partita? si/no");
        if(risp == "si"){
            risposta++;
        } else if(risp == "no"){
            risposta++;
            a++;
        } else{
            alert("Deve rispondere con si o no");
        }
    }
}
