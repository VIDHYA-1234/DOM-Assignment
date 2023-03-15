
// task-1
//  code for adding inuron-logo
 
//  let img= document.createElement("img")
//  img.src="./assets/ineuron-logo.png"
//  console.log(img)
 
// let parent=document.querySelector("header")
// parent.appendChild(img)


// // code for remove equalizer logo

// let header =document.querySelector("header")
//  let logo  = header.firstElementChild;

// header.removeChild(logo)

// task-2
// added linkdin logo to footer

 let parents = document.querySelector(".footer_social")
  let newDiv=    document.createElement("div")
  newDiv.classList.add(".footer_social_ico")
newDiv.innerHTML = `<i class="fa-brands fa-linkedin"></i>`
parents.appendChild(newDiv)
