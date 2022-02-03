class Paciente {
    constructor(nombre, edad, rut, diagnostico) {
        this.nombre = nombre
        this.edad = edad
        this.rut = rut
        this.diagnostico = diagnostico
    }
    set setNombre(nombre) {
        this.nombre = nombre
    }
    get getNombre() {
        return this.nombre
    }

    set setEdad(edad) {
        this.edad = edad
    }
    get getEdad() {
        return this.edad
    }

    set setRut(rut) {
        this.rut = rut
    }
    get getRut() {
        return this.rut
    }

    set setDiagnostico(diagnostico) {
        this.diagnostico = diagnostico
    }
    get getDiagnostico() {
        return this.diagnostico
    }
}

class Consultorio {
    constructor(nombre) {
        this.nombre = nombre
        this.paciente = []
    }

    set setPaciente(paciente) {
        this.paciente.push(paciente)
    }

    get getPaciente() {
        return this.paciente
    }
}

Consultorio.prototype.buscarPaciente = function(nombre) {
    return this.paciente.find((nom) => nom.nombre.toLowerCase() === nombre.toLowerCase()) || "No encontrado"
}
Consultorio.prototype.buscarRut = function(rut) {
    return this.paciente.find((ru) => ru.rut.toLowerCase() === rut.toLowerCase()) || "No encontrado"
}

Consultorio.prototype.buscarTodo = function() {
    this.paciente.forEach(elemento => {

            console.log(elemento)
        })
        //return true
}

const juan = new Paciente("Juan", 35, "1234123-2", "Sano")
const pedro = new Paciente("Pedro", 25, "13345345-2", "Sano")
const mario = new Paciente("Mario", 18, "21234234-8", "Sano")
const evelyn = new Paciente("Evelyn", 25, "21123234-k", "Sano")
const jose = new Paciente("Jose", 55, "9657567-9", "Sano")
const estacion = new Consultorio("Estación Central")
const santiago = new Consultorio("Santiago")
const recoleta = new Consultorio("Recoleta")

estacion.setPaciente = juan
estacion.setPaciente = pedro
estacion.setPaciente = mario

santiago.setPaciente = evelyn
santiago.setPaciente = jose