  // task 1
  //  let heading = document.querySelectorAll(".accordian h3")
  //   let para  =   document.querySelectorAll(".accordian p")

  //   heading.forEach((element)=>{
  //            element.style.backgroundColor="#B9DDFF"
  //   })

  //   para.forEach((element)=>{
  //       element.style.backgroundColor="E9EEFF"
  //   })


// Task-2
  // code for adding new accordian to the page
    let parent=document.querySelector(".accordian-wrapper");
let element=document.createElement("div");
parent.appendChild(element);
element.classList.add("accordian");
// console.log(element)

let heading =document.createElement("h3");
element.appendChild(heading);
heading.innerText="skill"

let paragraph=document.createElement("p");
element.appendChild(paragraph);
paragraph.innerText="I posses a very good command over the Full Stack Development technologies like MERN which can be seen in my work over the GitHub";
// paragraph.style.display="none"
console.log(element)







