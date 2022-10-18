const usuario = document.getElementById('usuario');
const contrasena = document.getElementById('contrasena');
const button = document.getElementById('button')

button.addEventListener('click', (e) => {
    e.preventDefault()
    const data = {}
})


function login(form){
    if (form.u.value =='fernanda'){
        if (form.c.value=='123'){
            location="principal.html"
            
        } else {
            alert("error de password")
        }
    } else if (form.u.value=="victoria"){
        if(form.c.value=='1234'){
            location='principal.html'
        } else{
            alert('error de password');
        }
    } else if(form.u.value=="renata"){
        if(form.c.value=="12345"){
            location='principal.html'
        } else{
            alert('error de password');
        }
    } else{
        alert('error de usuario');
    }
} 