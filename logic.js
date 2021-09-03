btn1.style.display="none";
hide1.style.display = "none";

function unhide(c){
    hide1.style.display = "block";
    console.log(c);
//   document.getElementById("hide1").textContent= "bfvsfhf";
  hide1.style.background = `url('image/${c}.jpg')no-repeat center center`;
  hide1.style.backgroundSize= "60vw, 60vw";

  btn1.style.display="block";


}
function cut1(){
    hide1.style.display = "none";

}