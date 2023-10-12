// membuat objek kosong
// var mhs = {
// 	nama : "Riky",
// 	umur : 21,
// 	ips : [3.00, 2.12, 2.21],
// 	alamat : {
// 		jalan : "Jalan rahayu, Gang 46, No.1",
// 		kota : "Badung" ,
// 		provinsi : "Bali",
// 	}
// };

// mhs.provinsi.kota
// mhs.ips[2]
// mhs.nama

var mahasiswa = {
	nama : 'Riky',
	nim : 19101172,
	email : 'rikymahendra@gmail.com',
	jurusan : 'TI-MDI'
}

function buatObjectMahasiswa(nama,nim,email,jurusan) {

	var mhs = {};
	mhs.nama = nama;
	mhs.nim = nim;
	mhs.email = email;
	mhs.jurusann = jurusan;
	return mhs;

}

var mhs1 = buatObjectMahasiswa('Rosi',19101136,'rosi@gmail.com','TI-DGM')


// constructor = function khusus object
function Mahasiswa(nama,nim,email,jurusan){

	this.nama = nama;
	this.nim = nim;
	this.email = email;
	this.jurusan = jurusan;

}
// wajib pakai new
var mhs2 = new Mahasiswa('Tony',19101176,'tony@gmail.com','TI-DGM');


// this / window
var a = 10;
console.log(window.a);

// cara 1 - function declaration
function halo(){
	console.log(this);
	console.log('halo');
}
this.halo()
// this mengembalikan objek Global


// cara 2 - function literal
var obj = {};
obj.halo = function(){
	console.log(this);
	console.log('halo');
}
obj.halo();
// this mengembalikan objek yang bersangkutan


// cara 3 - function constructor
function Halo(){
	console.log(this);
	console.log('halo');
}
new Halo();
// mengembalikan objek yang baru dibuat