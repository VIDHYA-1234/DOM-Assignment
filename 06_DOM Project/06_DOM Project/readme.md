#DOM project 6 solution 

#Solution1 img

![image link](/06_DOM%20Project/06_DOM%20Project/Output/solution-1.png)

#solution code

```Javascript
//  code for adding inuron-logo
 
 let img= document.createElement("img")
 img.src="./assets/ineuron-logo.png"
 console.log(img)
 
let parent=document.querySelector("header")
parent.appendChild(img)


// code for remove equalizer logo

let header =document.querySelector("header")
 let logo  = header.firstElementChild;

header.removeChild(logo)
```
---
**solution2 image**
![image link](/06_DOM%20Project/06_DOM%20Project/Output/solution2.png)

```javascript
let parents = document.querySelector(".footer_social")
  let newDiv=    document.createElement("div")
  newDiv.classList.add(".footer_social_ico")
newDiv.innerHTML = `<i class="fa-brands fa-linkedin"></i>`
parents.appendChild(newDiv)

```
---

