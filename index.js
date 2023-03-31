// user hamburger menu
let ellipsis = document.getElementById("ellipsis");
let userMenu = document.getElementById("userMenu");
console.log(ellipsis , userMenu)

ellipsis.onclick = () =>{
    userMenu.classList.toggle("userMenuShow");
}

// function hideOnClickOutside(element){
//     document.onclick = (event) =>{
//         if(!element.contains(event.target)) {
//             // element.style.display = "none";
//             // userMenu.classList.remove("userMenuShow");
//         }
//     }
// }
// hideOnClickOutside(userMenu);

// journey board display
let jourenyBoardSpan = document.getElementById("jourenyBoardSpan");
let jourenyBoardArrow = document.getElementById("jourenyBoardArrow");
let jourenyBoardList = document.getElementById("jourenyBoardList");
let number = document.getElementById("number");
let jourenyBoard = document.getElementById("jourenyBoard");

jourenyBoardArrow.onclick = () =>{
    if(jourenyBoard.style.width != "30vw"){
        jourenyBoard.style.width = "30vw";
        jourenyBoardSpan.style.display = "block";
        jourenyBoardArrow.setAttribute("class" , "fa fa-arrow-circle-left");
        jourenyBoardList.style.display = "block";
        number.style.display = "none";
        console.log("ha ")
    }
    else{
        jourenyBoard.style.width = "7vw"
        jourenyBoardSpan.style.display = "none";
        jourenyBoardArrow.setAttribute("class" , "fa fa-arrow-circle-right");
        jourenyBoardList.style.display = "none";
        number.style.display = "block";
    }
}
  
// dynamic data
fetch("https://dev.deepthought.education/assets/uploads/files/files/others/ddugky_project.json")
.then(res => res.json())
.then((res)=>{
    console.log(res)
})
.catch(err=>console.log(err))
  
  