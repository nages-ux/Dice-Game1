var anum1 =Math.floor(Math.random()*6)+1;
var bimage1 ="images/dice"+anum1+".jpg";
var anum2 =Math.floor(Math.random()*6)+1;
var bimage2 ="images/dice"+anum2+".jpg";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",bimage1)
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",bimage2)
if(anum1>anum2)
{
    document.querySelector("h1").innerText="Player 1 won!!!";
}
else if (anum2>anum1)
{
    document.querySelector("h1").innerText="Player 2 won!!!";
}

else
{
    document.querySelector("h1").innerText="TIE!!!";
}