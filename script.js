//SCRIPT DE LA PAGINA EMERGENTE
class Persona{
    nombre;
    apellido;
    edad;
    comida;
    color;
    energia = 80;
    energiaMax = 80;

    // NOMBRE
    setNombre(nombre){
        this.nombre = nombre;
    }
    getNombre() {
        return this.nombre;
    }
    // APELLIDO
    setApellido(apellido){
        this.apellido = apellido;
    }
    getApellido() {
        return this.apellido;
    }
    // EDAD
    setEdad(edad){
        this.edad = edad;
    }
    getEdad() {
        return this.edad;
    }
    // COMIDA
    setComida(comida){
        this.comida = comida;
    }
    getComida() {
        return this.comida;
    }
    // COLOR
    setColor(color){
        this.color = color;
    }
    getColor() {
        return this.color;
    }
    //energia
    setEnergia(energia){
        this.energia = energia;
        this.energiaMax = energia;
    }
    getEnergia(){
        return this.energia;
    }
    saludar(energiaConsumida){
        if (this.energia >= energiaConsumida){
            this.energia -= energiaConsumida;
            return "*Saluda*";
        } else return "Estoy cansado jefe, no puedo saludarte";
    }
    correr(energiaConsumida){
        if (this.energia >= energiaConsumida){
            this.energia -= energiaConsumida;
            return "*Corre*";
        } else return "Estoy cansado jefe, no puedo correr";
    }
    comer(energiaRecuperada){
        this.energia += energiaRecuperada;
        if (this.energia > this.energiaMax){    
            this.energia = this.energiaMax;
            return "Ya comi mucho!"
        }
        return "*Come*";
    }
    colorear(energiaConsumida){
        if (this.energia >= energiaConsumida){
            this.energia -= energiaConsumida;
            return "*Colorea*";
        } else return "Estoy cansado jefe, no puedo colorear";
    }
    dormir(energiaRecuperada){
        this.energia += energiaRecuperada;
        if (this.energia > this.energiaMax){    
            this.energia = this.energiaMax;
            return "Ya dormi mucho!"
        }
        return "*Duerme*";
    }
    parar(energiaConsumida){
        if (this.energia >= energiaConsumida){
            this.energia -= energiaConsumida;
            return "*pararse*";
        } else return "Estoy cansado jefe, no puedo correr";
    }
}

//  SCRIP PET
var persona = new Persona()

function enviar(){
    persona.setNombre(document.getElementById('nombre').value);
    persona.setApellido(document.getElementById('apellido').value);
    persona.setEdad(document.getElementById('edad').value);
    persona.setComida(document.getElementById('comida').value);
    persona.setColor(document.getElementById('color').value);

    document.getElementById('form1').reset();
}

function mostrar(){
    document.getElementById('nombreMostrado').textContent = persona.getNombre();
    document.getElementById('apellidoMostrado').textContent = persona.getApellido();
    document.getElementById('edadMostrado').textContent = persona.getEdad();
    document.getElementById('comidaMostrado').textContent = persona.getComida();
    document.getElementById('colorMostrado').textContent = persona.getColor();

    document.getElementById('datos').style.display = 'flex';
}

//SCRIPT DE LOS BOTONES DE LA PAGINA EMERGENTE
    // obtener ID botones abrir y cerrar pagina emergente
    const abrir_ventana = document.getElementById("abrir_ventana");
    const cerrar_ventana = document.getElementById("cerrar_ventana");
    const DIVmodal = document.getElementById("DIVmodal");

    // abrir
    abrir_ventana.addEventListener("click", function () {
        DIVmodal.style.display = "block";
    });

    // cerrar
    cerrar_ventana.addEventListener("click", function () {
        DIVmodal.style.display = "none";
        
    });

    // Cierra la ventana si se hace click afuera de lo verde
    window.addEventListener("click", function (event) {
        if (event.target === DIVmodal) {
            DIVmodal.style.display = "none";
        }
    });


function saludar(){
    (persona.saludar(20));
    document.getElementById('gifsaludar').style.display = "flex";
    document.getElementById('gifparar').style.display = "none";
    document.getElementById('gifcorrer').style.display = "none";
    document.getElementById('gifcomer').style.display = "none";
    document.getElementById('gifcolorear').style.display = "none";
    document.getElementById('gifdormir').style.display = "none";
    
    refrescar();
}
function correr(){
    (persona.correr(20));
    document.getElementById('gifsaludar').style.display = "none";
    document.getElementById('gifparar').style.display = "none";
    document.getElementById('gifcorrer').style.display = "flex";
    document.getElementById('gifcomer').style.display = "none";
    document.getElementById('gifcolorear').style.display = "none";
    document.getElementById('gifdormir').style.display = "none";
    refrescar();
}
function comer(){
    (persona.comer(20));
    document.getElementById('gifsaludar').style.display = "none";
    document.getElementById('gifparar').style.display = "none";
    document.getElementById('gifcorrer').style.display = "none";
    document.getElementById('gifcomer').style.display = "flex";
    document.getElementById('gifcolorear').style.display = "none";
    document.getElementById('gifdormir').style.display = "none";
    refrescar();
}
function colorear(){
    (persona.colorear(20));
    document.getElementById('gifsaludar').style.display = "none";
    document.getElementById('gifparar').style.display = "none";
    document.getElementById('gifcorrer').style.display = "none";
    document.getElementById('gifcomer').style.display = "none";
    document.getElementById('gifcolorear').style.display = "flex";
    document.getElementById('gifdormir').style.display = "none";
    refrescar();
}
function dormir(){
    (persona.dormir(20));
    document.getElementById('gifsaludar').style.display = "none";
    document.getElementById('gifparar').style.display = "none";
    document.getElementById('gifcorrer').style.display = "none";
    document.getElementById('gifcomer').style.display = "none";
    document.getElementById('gifcolorear').style.display = "none";
    document.getElementById('gifdormir').style.display = "flex";
    refrescar();
}
function parar(){
    (persona.parar(0));
    document.getElementById('gifsaludar').style.display = "none";
    document.getElementById('gifparar').style.display = "flex";
    document.getElementById('gifcorrer').style.display = "none";
    document.getElementById('gifcomer').style.display = "none";
    document.getElementById('gifcolorear').style.display = "none";
    document.getElementById('gifdormir').style.display = "none";
    refrescar();
}
function refrescar(){
    document.getElementById('nombre').textContent = persona.getNombre();
    document.getElementById('apellido').textContent = persona.getApellido();
    document.getElementById('edad').textContent = persona.getEdad();
    document.getElementById('comida').textContent = persona.getComida();
    document.getElementById('color').textContent = persona.getColor();
    document.getElementById('energia').textContent = persona.getEnergia();

}

//MUSICA

const boton_musica = document.getElementById('boton_musica');
const musica = document.getElementById('musica');

boton_musica.addEventListener('click', () => {
    if (musica.paused) {
        musica.play();
        boton_musica.textContent = 'Pausar';
    } else {
        musica.pause();
        boton_musica.textContent = 'Reproducir';
    }
});

musica.addEventListener('ended', () => {
    boton_musica.textContent = 'Reproducir';
});

function refrescar(){
    
    document.getElementById('Energia').textContent = persona.getEnergia();

    if (persona.getEnergia() == 0){
        document.getElementById('foto1').style.display = 'flex';
        document.getElementById('foto2').style.display = 'none';
        document.getElementById('foto3').style.display = 'none';
        document.getElementById('foto4').style.display = 'none';
        document.getElementById('foto5').style.display = 'none';
    }
    else if (persona.getEnergia() == 20){
        document.getElementById('foto1').style.display = 'none';
        document.getElementById('foto2').style.display = 'flex';
        document.getElementById('foto3').style.display = 'none';
        document.getElementById('foto4').style.display = 'none';
        document.getElementById('foto5').style.display = 'none';
    }
    else if (persona.getEnergia() == 40){
        document.getElementById('foto1').style.display = 'none';
        document.getElementById('foto2').style.display = 'none';
        document.getElementById('foto3').style.display = 'flex';
        document.getElementById('foto4').style.display = 'none';
        document.getElementById('foto5').style.display = 'none';
    }
    else if (persona.getEnergia() == 60){
        document.getElementById('foto1').style.display = 'none';
        document.getElementById('foto2').style.display = 'none';
        document.getElementById('foto3').style.display = 'none';
        document.getElementById('foto4').style.display = 'flex';
        document.getElementById('foto5').style.display = 'none';
    }
    else if (persona.getEnergia() == 80){
        document.getElementById('foto1').style.display = 'none';
        document.getElementById('foto2').style.display = 'none';
        document.getElementById('foto3').style.display = 'none';
        document.getElementById('foto4').style.display = 'none';
        document.getElementById('foto5').style.display = 'flex';
    }
}