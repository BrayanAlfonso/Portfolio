
//Recargar la pagina cuando se le da al icono


let logo = document.querySelector(".logo");

logo.addEventListener("click", () => {

document.body.classList.add("fade-out");
setTimeout(() => {
    window.location.reload();
}, 500); 
});




//Animaciones y textos para los campos de experiencia
let btnExperience1=document.querySelector(".experience1");
let btnExperience2=document.querySelector(".experience2")
let btnExperience3=document.querySelector(".experience3")
let textoExperience=document.querySelector(".textoExperience")

btnExperience1.addEventListener("click", (e)=>{
    e.preventDefault()
    textoExperience.textContent ='Trabaje durante unos años en atencion al cliente en un local de barrio llamado Interline Comunicaciones, mismo para el cual hice mi proyecto de grado.'
    btnExperience1.setAttribute("class","selected")
    btnExperience2.classList.remove("selected")
    btnExperience3.classList.remove("selected")
})

btnExperience2.addEventListener("click", (e)=>{

    e.preventDefault();
    textoExperience.textContent='Estoy a punto de participar en la competencia de programacion Sena Soft a nivel nacional'
    btnExperience2.setAttribute("class","selected")
    btnExperience1.classList.remove("selected")
    btnExperience3.classList.remove("selected")
})

btnExperience3.addEventListener("click", (e)=>{
    e.preventDefault();
    textoExperience.textContent='Ademas, mis practicas las hice en la empresa Teleperformance en el cargo de ------ (en el futuro)'
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

//Eventos para los scroll y estilos


function removeSelectedClassFromButtons() {
    btnAbout.classList.remove("selected");
    btnExperience.classList.remove("selected");
    btnSkillSet.classList.remove("selected");
    btnProjects.classList.remove("selected");
    btnContact.classList.remove("selected");
}


//Seccion perfil
btnAbout.addEventListener("click", ()=>{
    sectionProfile.scrollIntoView({behavior:'smooth'})
    removeSelectedClassFromButtons()
    btnAbout.classList.add("selected");
})

//Seccion experiencia
btnExperience.addEventListener("click",()=>{
    sectionExperience.scrollIntoView({behavior: 'smooth'})
    removeSelectedClassFromButtons()
    btnExperience.classList.add("selected")
})

//Seccion skillset
btnSkillSet.addEventListener("click",()=>{
    sectionSkillset.scrollIntoView({behavior: 'smooth'})
    removeSelectedClassFromButtons()
    btnSkillSet.classList.add("selected")
})

//Seccion proyectos
btnProjects.addEventListener("click", ()=>{
    sectionProjects.scrollIntoView({behavior: 'smooth'})
    removeSelectedClassFromButtons()
    btnProjects.classList.add("selected")
})

//Seccion contacto
btnContact.addEventListener("click", ()=>{
    sectionContact.scrollIntoView({behavior:'smooth'})
    removeSelectedClassFromButtons()
    btnContact.classList.add("selected")
})




//Eventos para la ventana modal
let modal = document.getElementById("modal");
let contenidoModal=document.querySelector(".modal-contenido")

//Funcion para abrir la ventana modal
function openModal() {
    modal.style.display = "block";
    document.body.classList.add("modal-open");
}

function scrollToTop() {
    window.scrollTo({ top: 0});
}

//Evento para abrir la ventana al cargarse la pagina
openModal();


//Evento para cerrar la ventana modal
btnContinue.addEventListener("click", () => {

    modal.style.top='100%'
    document.body.classList.remove("modal-open");

    scrollToTop();
    setTimeout(()=>{
    
    modal.style.display = "none";
}, 500)

});




