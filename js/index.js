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


//Acceder a los difv donde iran los medidores de dificultad
let JS=document.getElementById("JS")
let Java=document.getElementById("Java")
let SQL=document.getElementById("SQL")
let py=document.getElementById("py")


iconJS.addEventListener("mouseover", ()=>{
    JS.innerHTML=`
    <div class="dificult">
    <span>Intermedio</span>
    <div class="difficulty-bar">
        <div class="bar-levelJS"></div>
        
    </div>`

    iconJS.addEventListener("mouseout",()=>{
        JS.innerHTML=``
    })
    
})




iconJava.addEventListener("mouseover", ()=>{
    Java.innerHTML=`
    <div class="dificult" class="medidor2">
        <span>Intermedio</span>
        <div class="difficulty-bar">
            <div class="bar-levelJava"></div>
            
        </div>
    </div>`


    iconJava.addEventListener("mouseout",()=>{
        Java.innerHTML=``
    })
    
})


iconSql.addEventListener("mouseover", ()=>{
    SQL.innerHTML=`
    <div class="dificult" class="medidor3">
        <span>Intermedio</span>
        <div class="difficulty-bar">
            <div class="bar-levelSQL"></div>
            
        </div>
    </div>`


    iconSql.addEventListener("mouseout",()=>{
        SQL.innerHTML=``
    })
    
})

iconPython.addEventListener("mouseover", ()=>{
    py.innerHTML=`
    <div class="dificult" class="medidor4">
        <span>Básico</span>
        <div class="difficulty-bar">
            <div class="bar-levelPy"></div>
            
        </div>
    </div>`


    iconPython.addEventListener("mouseout",()=>{
        py.innerHTML=``
    })
    
})

