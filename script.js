document.addEventListener('click', musicPlay);
function musicPlay() {
    document.getElementById('audioTag').play();
    document.removeEventListener('click', musicPlay);
}





document.getElementById("open-btn").addEventListener("click",function(e){
    
    
    var phoneNumber= document.getElementById("phone").value[0]=='+' ?  document.getElementById("phone").value : defaultCode+document.getElementById("phone").value ;
    phoneNumber=phoneNumber.split(" ").join("");
    console.log( phoneNumber)
    window.open("https://wa.me/"+phoneNumber);

    // empty the phone after opend  
    document.getElementById("phone").value="";

})


document.getElementById('paste-btn').addEventListener('click', ()=>{
 
 
    navigator.clipboard.readText()
    .then((text)=>{
        document.getElementById("phone").value=text
    });

});



// show hint for paste icon 
document.getElementById("paste-btn").addEventListener("mouseover",function(){
    document.getElementById("input-class").classList.add("show-hint");
    document.getElementById("hint").innerHTML="Paste";   
})

// remove hint for paste icon 
document.getElementById("paste-btn").addEventListener("mouseleave",function(){
    document.getElementById("input-class").classList.remove("show-hint");
    document.getElementById("hint").innerHTML="";   
})

function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
    //   document.getElementById("demo").innerHTML = this.responseText;
      let data =JSON.parse(this.response);
      let menu = ""
      data.forEach(element => {
          if(element.name=="Egypt")
             menu += `<option selected value=${element.dial_code}>${element.name} ${element.dial_code}</option>`
          else
             menu += `<option value=${element.dial_code}>${element.name} ${element.dial_code}</option>`
      });
      document.getElementById("countries").innerHTML=menu;

      }
    xhttp.open("GET", "https://gist.githubusercontent.com/Goles/3196253/raw/9ca4e7e62ea5ad935bb3580dc0a07d9df033b451/CountryCodes.json", true);
    xhttp.send();
}
loadDoc();

let defaultCode="+2"

document.getElementById("countries").addEventListener("change",(e)=>{
    defaultCode=e.target.value;
})




