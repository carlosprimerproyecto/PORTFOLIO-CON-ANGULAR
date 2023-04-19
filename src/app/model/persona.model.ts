export class persona {
    id?: number;
    nombre:String;
    apellido: String;
    img: String;
    dni:String;
    nacionalidad:String;
    fecha_nacimiento:String;
    mail:String;
    telefono:String;
    descripcion:String;

    

    constructor (nombre:String, 
        apellido:String, 
        img:String,
        dni:String,
        nacionalidad:String,
        fecha_nacimiento:String,
        mail:String,
        telefono:String,
        descripcion:String) { 
this.nombre = nombre;
this.apellido = apellido;
this.img = img;
this.dni = dni;
this.nacionalidad = nacionalidad;
this.fecha_nacimiento = fecha_nacimiento;
this.mail = mail;
this.telefono = telefono;
this.descripcion = descripcion;

    }
}


