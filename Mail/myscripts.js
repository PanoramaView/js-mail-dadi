document.write("MAIL");
console.log("Mail \n");

var a = false;
var x = 0;
var emailList = [];

while(!a){
    
    //console.log("Registered email: "+ emailList(0));
    var newEmail = prompt("Inserire nuova email:");
        emailList.push(newEmail);
        //emailList[x]++;
        //emailList[x] = newEmail;
        
        
        console.log("New registered email: "+ emailList[x]);
        document.write("");
        x++;
    
        var risposta = false;
        while(!risposta){
            var risp = prompt("Register another email? si/no");
            if(risp == "si"){
                risposta = true;
            } else if(risp == "no"){
                risposta = true;
                a= true;
            } else{
                alert("Deve rispondere con si o no");
            }
        }
}
console.log("\n Number of registered emails: "+ emailList.length);
console.log("\n Registered email list:");

for(var i = 0; i < emailList.length; i++){
    console.log((i) +".Registered email: "+ emailList[i]);
}

var inputEmail= prompt("Inserisci email registrato: ");
var check = false

for(var i = 0; i < emailList.length; i++){
    var checkEmail = emailList[i];
    if(checkEmail === inputEmail){
        check=true;
    }
}

if(check){
    console.log("Email è presente nel database.")
} else{
    console.log("Email non è presente nel database.")
}

