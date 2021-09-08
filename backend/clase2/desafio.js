class Usuario {
	constructor({ nombre, apellido, libros, mascotas }) {
		this.nombre = nombre;
		this.apellido = apellido;
		this.libros = libros;
		this.mascotas = mascotas;
	}

	getFullName() {
		return `${this.nombre} ${this.apellido}`;
	}

	addMascota(mascota) {
		this.mascotas = [...this.mascotas, mascota];
	}

	countMascotas() {
		return this.mascotas.length;
	}

	addBook(nombre, autor) {
		this.libros = [...this.libros, { nombre,	autor }]
	}

	getBookNames() {
		return this.libros.map(libro => libro.nombre)
	}
}

const user = new Usuario({
  nombre: "Kanye",
  apellido: "West",
  libros: [],
  mascotas: [],
})

user.addMascota('perro')
user.addMascota('gato')
user.addBook('Percy Jackson', 'Rick Riordan')
user.addBook('El general en su laberinto', 'Gabriel García Márquez')
console.log(user.countMascotas())
console.log(user.getBookNames())
console.log(user.getFullName())