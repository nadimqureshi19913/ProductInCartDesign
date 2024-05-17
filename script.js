let btnImage1 = document.querySelectorAll(".btn-image1");

let btnImage2 = document.querySelectorAll(".btn-image2");
let likeButton =document.querySelectorAll(".like-btn");
console.log(btnImage2.length);
for(let i=0;i<=likeButton.length;i++)
  {
likeButton[i].addEventListener("click",function(){
  //alert("clicked on the like button");
  let clicked = true;
  if(clicked==true)
    {
      btnImage2[i].style.display = "block";
      clicked=false;   
    }
  else
  {
    btnImage2[i].style.display = "none";
      clicked=true; 
  }
    });
  }


