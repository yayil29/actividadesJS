class Estudiante extends Persona {
    constructor(nombre, edad, grado) {
        super(nombre, edad);
        this.grado = grado;
    }

    imprimirGrado() {
        console.log(this.nombre + " está en el grado: " + this.grado);
    }
}

const estudiante = new Estudiante("Ana", 20, "3ro");
estudiante.saludar();
estudiante.imprimirGrado();
