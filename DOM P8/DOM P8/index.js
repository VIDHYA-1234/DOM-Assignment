let asideTag = document.getElementsByTagName("aside")[0]
let heading= document.createElement("h1")
heading.className="new-head"
heading.innerText="This is my custom heading"
asideTag.appendChild(heading)

let para =document.createElement("p")
para.innerText="This is my custom paragraph"
para.className="new-p"
asideTag.appendChild(para)

asideTag.style.border="5px solid red"
asideTag.style.overflow="scroll"



