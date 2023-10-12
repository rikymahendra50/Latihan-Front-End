// 1. Object literal
// let mahasiswa = {
// 	nama : 'riky',
// 	energi : 10,
// 	makan: function (porsi) {
// 		this.energi = this.energi + porsi;
// 		console.log(`Halo ${this.nama}, selamat makan!`);
// 	}
// }

// let mahasiswa2 = {
// 	nama : 'toni',
// 	energi : 10,
// 	makan: function (porsi) {
// 		this.energi = this.energi + porsi;
// 		console.log(`Halo ${this.nama}, selamat makan!`);
// 	}
// }


// 2. function declaration
// dapat menggunakan object create untuk menyedarhanakan method

// function Mahasiswa(nama,energi){
// 	let mahasiswa = {};
// 	mahasiswa.nama = nama;
// 	mahasiswa.energi = energi;

// 	mahasiswa.makan = function(porsi){
// 		this.energi += porsi;
// 		console.log(`Halo ${this.nama}, selamat makan!`);
// 	}

// 	mahasiswa.olahraga = function(jam){
// 		this.energi -= jam;
// 		console.log(`Halo ${this.nama}, energi anda berkurang!`);
// 	}

// 	return mahasiswa;

// }

// let andrevan = Mahasiswa('andre',10);
// let rossi = Mahasiswa('rossi',10);


// 2.1 objectCreate
// const methodMahasiswa = {

// 	makan: function (porsi){
// 		this.energi += porsi;
// 		console.log(`Halo ${this.nama} energi anda bertambah`);
// 	},

// 	olahraga: function (jam){
// 		this.energi -= jam;
// 		console.log(`Halo ${this.nama} energi anda berkurang`);
// 	},

// 	tidur: function (jam){
// 		this.energi += jam * 2;
// 		console.log(`Halo ${this.nama} energi anda bertambah`);
// 	},

// }

// function Mahasiswa(nama,energi){
// 	// object create membuat method menjadi lebih sederhana
// 	let mahasiswa = Object.create(methodMahasiswa);
// 	mahasiswa.nama = nama;
// 	mahasiswa.energi = energi;

// 	return mahasiswa;

// }

// let rosi = Mahasiswa('rosi',10);

// 3. function cunstruktor
// keyword new
// function Mahasiswa(nama,energi){
// 	this.nama = nama;
// 	this.energi = energi;

// 	this.makan = function(porsi){
// 		this.energi += porsi;
// 		console.log(`Halo ${this.nama}, selamat makan!`);
// 	}

// 	this.olahraga = function(jam){
// 		this.energi -= jam;
// 		console.log(`Halo ${this.nama}, energi anda berkurang!`);
// 	}

// }

// let andrevan = new Mahasiswa('andre',10);


// function construktur menggunakan prototype

function Mahasiswa(nama,energi){

	// dengan this tidak perlu membuat objek baru 
	// this memiliki parent otomatis .prototype
	this.nama = nama;
	this.energi = energi;

}

Mahasiswa.prototype.makan = function(porsi){
	this.energi += porsi;
	return `Halo ${this.nama}, energi anda bertambah`;
}

const mahasiswa = new Mahasiswa('andre',10);


// versi class
class Mahasiswa {
	constructor(nama,energi){
		this.nama = nama;
		this.energi = energi;
	}

makan(porsi){
	this.energi += porsi;
	return `Halo ${this.nama}, energi anda bertambah`;
}

}
