const btnDarkMode = document.getElementById('btn-DarkMode');

//comprobar si hay un tema guardado en el local storage
if (localStorage.getItem('tema')==="dark"){
    document.body.classList.add('dark');
    btnDarkMode.textContent= "🌙";
}
//agregar evento click al boton darkMode
btnDarkMode.addEventListener('click', ()=>{
    document.body.classList.toggle('dark');// cambio entre clases

    if (document.body.classList.contains("dark")){
        btnDarkMode.textContent= " 🌙";
        localStorage.setItem("tema", "dark");
    }else{
        btnDarkMode.textContent= " ☀️";
        localStorage.setItem("tema", "light");
    }
});

//modal
const modal=document.getElementById("modal");
const botonAbrir=document.getElementById("btn-abrir");
const botonCerrar=document.querySelector("#btn-cerrar");

botonAbrir.addEventListener("click", ()=>{
    modal.classList.add("activo");
});

botonCerrar.addEventListener("click", ()=>{
    modal.classList.remove("activo");
});

