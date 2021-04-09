document.write("MAIL");
console.log("Mail \n");

var a = false
while(!a){
    
    var emailList = [];
    //console.log("Registered email: "+ emailList(0));
    var newEmail = prompt("Inserire nuova email:");
        emailList.push(newEmail);
        console.log("New registered email: "+ newEmail);
        document.write("");
    
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
console.log("\n Number of registered emails: "+ newEmail.length);
console.log("\n Registered email list:");

for(var i = 0; i < emailList.length; i++){
    console.log((i+1) +".Registered email: "+ emailList[i]);
}