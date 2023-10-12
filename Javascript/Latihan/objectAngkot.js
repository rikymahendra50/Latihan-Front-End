// membuat objek
// var penumpang = [];

// function Angkot(supir,trayek,penumpang,kas) {

// 	this.supir = supir;
// 	this.trayek = trayek;
// 	this.penumpang = penumpang;
// 	this.kas = kas;

// 	this.penumpangNaik = function(namaPenumpang){
// 		this.penumpang.push(namaPenumpang);
// 		return this.penumpang;
// 	}

// 	this.penumpangTurun = function(namaPenumpang,bayar){
// 		if ( this.penumpang.length === 0 ) {
// 			alert('Penumpang masih Kosong');
// 			return false;
// 		}

// 		for (var i = 0; i < this.penumpang.leght; i++) {
// 			if ( this.penumpang[i] == namaPenumpang ) {
// 				this.penumpang[i] == undefined;
// 				this.kas += bayar;
// 				return this.penumpang;
// 			}
// 		}

// 	}


// }

// var angkot1 = new Angkot('Tony',['Badung','Denpasar'],[],0);
// var angkot2 = new Angkot('Evan',['Klungkung','Gianyar'],[],0);

// ambil data supir,trayek,penumpang,kas 
// buat dua function penumpang naik dan turun
// jika ada penumpang naik maka tambah penumpang
// jika penumpang turun harus bayar kas

var penumpang = [];

function Angkot(supir,trayek,penumpang,kas) {

	this.supir = supir;
	this.trayek = trayek;
	this.penumpang = penumpang;
	this.kas = kas;

	this.penumpangNaik = function(namaPenumpang){
		this.penumpang.push(namaPenumpang);
		return this.penumpang;
	}

	this.penumpangTurun = function(namaPenumpang,bayar){
		if ( this.penumpang.length === 0 ) {
			alert('Angkot masih kosong!');
			return false;
		}

		for (let i = 0; i < this.penumpang.length; i++) {
			if (this.penumpang[i] === namaPenumpang) {
				this.penumpang[i] == undefined;
				this.kas += bayar;
				return this.penumpang;
			}
		}
	}

}