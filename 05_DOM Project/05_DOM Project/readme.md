 #DOM Manupulation project 5 solution

---

![image link](/05_DOM%20Project/)

---

#Solution  

```JavaScript

 let parent= document.querySelector(".recipe-gallery")
            let newDiv=  document.createElement("div")
            newDiv.classList.add("card")
            newDiv.innerHTML=`<img src="./img/recipe-5.jpeg" class="recipe-img " />`
            // newDiv.innerText=`<h5 class="recipe-name">Hakka Noodles</h5>`
            console.log(newDiv)

            let heading= document.createElement("h5")
            heading.innerHTML=`<h5 class="recipe-name">Hakka Noodles</h5>`
            console.log(heading)

           let para= document.createElement("p")

               para.innerHTML=`<p class="recipe-disp">Prep : 15min | Cook : 30min</p>`

               parent.appendChild(newDiv)
            
              newDiv.appendChild(heading)
               newDiv.appendChild(para)
```
---

#Solution Output
![image link](/05_DOM%20Project/05_DOM%20Project/Output/solution.png)

