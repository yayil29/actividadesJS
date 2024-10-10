class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log("Hola, mi nombre es " + this.nombre);
    }
}

const persona = new Persona("Juan", 30);
persona.saludar();
