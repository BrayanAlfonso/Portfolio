//Animaciones y textos para los campos de experiencia
let btnExperience1=document.querySelector(".experience1");
let btnExperience2=document.querySelector(".experience2")
let btnExperience3=document.querySelector(".experience3")
let textoExperience=document.querySelector(".textoExperience")

btnExperience1.addEventListener("click", (e)=>{
    e.preventDefault()
    textoExperience.textContent ='Esta es una prueba para el texto de interlineComunicaciones'
    btnExperience1.setAttribute("class","selected")
    btnExperience2.classList.remove("selected")
    btnExperience3.classList.remove("selected")
})

btnExperience2.addEventListener("click", (e)=>{

    e.preventDefault();
    textoExperience.textContent='Esta es una prueba para el texto del segundo campo para experiencia'
    btnExperience2.setAttribute("class","selected")
    btnExperience1.classList.remove("selected")
    btnExperience3.classList.remove("selected")
})

btnExperience3.addEventListener("click", (e)=>{
    e.preventDefault();
    textoExperience.textContent='Esta es la ultima prueba para el campo de experiencia'
    btnExperience3.setAttribute("class","selected")
    btnExperience1.classList.remove("selected")
    btnExperience2.classList.remove("selected")
})


//Skillset animaciones

//Acceder a las imagenes
let iconJS=document.getElementById("iconJS")
let iconJava=document.getElementById("iconJava")
let iconSql=document.getElementById("iconSql")
let iconPython=document.getElementById("iconPython")


let textJS=document.querySelector(".textJS")
iconJS.addEventListener("mouseover", ()=>{
    
    
})



