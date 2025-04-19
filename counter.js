let counter = 0;
function Count(){
    counter++;
document.querySelector("h1").innerHTML = counter;}
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector("button").onclick=Count;
    
    setInterval(Count, 1000);
});