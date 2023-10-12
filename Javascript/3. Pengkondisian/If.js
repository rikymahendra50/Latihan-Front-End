// Angkot
// var jmhAngkot = 10;
// var angkotBeroperasi = 6;

// for (var noAngkot = 1; noAngkot <= jmhAngkot ; noAngkot++) {
	
// 	if ( noAngkot <= angkotBeroperasi ) {
// 		console.log('Angkot No.' + noAngkot + ' Beroperasi Dengan Baik');
// 	} else {
// 		console.log('Angkot No.' + noAngkot + ' Beroperasi Dengan Tidak Baik');
// 	}

// }

// alert('Halo Pengunjung');
// var ulang = true;

// while ( ulang === true ){
// 	var angka = prompt('Tolong Masukan Angka :');

// 	if ( angka % 2 == 0 ) {
// 		alert('Angka Genap');
// 	} else if ( angka % 2 == 1 ) {
// 		alert('Angka Ganjil');
// 	} else {
// 		alert('Yang anda masukan bukan angka');
// 	}

// 	ulang = confirm('Coba Lagi ?');
// }


// latihan else if
var jmlAngkot = 10;
var angkotBeroperasi = 6;

for (var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
	
	if ( noAngkot <= angkotBeroperasi && noAngkot !== 5 ) {
		console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.');
	} else if(noAngkot === 8 || noAngkot == 10 || noAngkot == 5) {
		console.log('Angkot No. ' + noAngkot + ' lembur.');
	} else {
		console.log('Angkot No. ' + noAngkot + ' tidak beroperasi dengan baik.');
	}

}


