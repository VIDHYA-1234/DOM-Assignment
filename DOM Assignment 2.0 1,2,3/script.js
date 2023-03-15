// task 1
// let element= document.createElement("li");
// element.innerHTML="<a>Hire Me</a>"

//  let parent=document.querySelector("header nav ul")
// console.log(parent.appendChild(element));

// task 2
     let newElement=  document.createElement("li")
     let newText=  document.createTextNode("Project")
         newElement.appendChild(newText)

    let target= document.querySelector("ul")
    let oldElement=target.children[2];
    // console.log(oldElement)
     
    target.replaceChild(newElement,oldElement);

    // let a =document.querySelector(".search-field input");
    //  a.placeholder="Search My project";

// //   task-3   

// let element=document.querySelectorAll(".hero-left-section span");
// element[2].innerText="an employee"
// element[3].innerText="ineuron intelligence Pvt Ltd"

// // task-5
let parent=document.querySelector(".hero-right-section-btns")
let newbtn=document.createElement("button")
newbtn.innerText="Support Me"
parent.appendChild(newbtn)