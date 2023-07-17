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
let iconHtml=document.getElementById("iconHtml")
let iconCss=document.getElementById("iconCss")


//Acceder a los difv donde iran los medidores de dificultad
let JS=document.getElementById("JS")
let Java=document.getElementById("Java")
let SQL=document.getElementById("SQL")
let py=document.getElementById("py")
let html=document.getElementById("html")
let css=document.getElementById("css")

console.log(iconHtml)


iconJS.addEventListener("mouseover", ()=>{
    JS.innerHTML=`
    <div class="dificult" >
    <span>Intermediate</span>
    <div class="difficulty-bar" >
        <div class="bar-levelIntermediate" ></div>
        
    </div>`

    iconJS.addEventListener("mouseout",()=>{
        JS.innerHTML=``
    })
    
})




iconJava.addEventListener("mouseover", ()=>{
    Java.innerHTML=`
    <div class="dificult" ">
        <span>Intermediate</span>
        <div class="difficulty-bar">
            <div class="bar-levelIntermediate"></div>
            
        </div>
    </div>`


    iconJava.addEventListener("mouseout",()=>{
        Java.innerHTML=``
    })
    
})


iconSql.addEventListener("mouseover", ()=>{
    SQL.innerHTML=`
    <div class="dificult" >
        <span>High midium</span>
        <div class="difficulty-bar">
            <div class="bar-levelHighIntermediate"></div>
            
        </div>
    </div>`


    iconSql.addEventListener("mouseout",()=>{
        SQL.innerHTML=``
    })
    
})

iconPython.addEventListener("mouseover", ()=>{
    py.innerHTML=`
    <div class="dificult" >
        <span>Basic</span>
        <div class="difficulty-bar">
            <div class="bar-levelLow"></div>
            
        </div>
    </div>`


    iconPython.addEventListener("mouseout",()=>{
        py.innerHTML=``
    })
    
})

iconHtml.addEventListener("mouseover", ()=>{
    html.innerHTML=`
    <div class="dificult" >
        <span>Avanzado</span>
            <div class="difficulty-bar">
                <div class="bar-levelAdvanced"></div>
            </div>
    </div>`
    iconHtml.addEventListener("mouseout",()=>{
        html.innerHTML=``
    })
})

iconCss.addEventListener("mouseover", ()=>{
    css.innerHTML=`
    <div class="dificult" >
        <span>High midium</span>
            <div class="difficulty-bar">
                <div class="bar-levelHighIntermediate"></div>
            </div>
    </div>`

    iconCss.addEventListener("mouseout", ()=>{
        css.innerHTML=``
    })
})



//Pruebas para desplazamientos en la pagina con ayuda de los botones


//Llamar los botones (enlaces)
let btnAbout=document.getElementById("btnAbout")
let btnExperience=document.getElementById("btnExperience")
let btnSkillSet=document.getElementById("btnSkillSet")
let btnProjects=document.getElementById("btnProjects")
let btnContact=document.getElementById("btnContact")

//Llamar las secciones
let sectionProfile=document.getElementById("sectionProfile")
let sectionExperience=document.getElementById("sectionExperience")
let sectionSkillset=document.getElementById("sectionSkillset")
let sectionProjects=document.getElementById("sectionProjects")
let sectionContact=document.getElementById("sectionContact")

//Eventos para los scroll

//Seccion perfil
btnAbout.addEventListener("click", ()=>{
    sectionProfile.scrollIntoView({behavior:'smooth'})
})

//Seccion experiencia
btnExperience.addEventListener("click",()=>{
    sectionExperience.scrollIntoView({behavior: 'smooth'})
})

//Seccion skillset
btnSkillSet.addEventListener("click",()=>{
    sectionSkillset.scrollIntoView({behavior: 'smooth'})
})

//Seccion proyectos
btnProjects.addEventListener("click", ()=>{
    sectionProjects.scrollIntoView({behavior: 'smooth'})
})

//Seccion contacto
btnContact.addEventListener("click", ()=>{
    sectionContact.scrollIntoView({behavior:'smooth'})
})