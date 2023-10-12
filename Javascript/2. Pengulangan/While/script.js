// selama kondisi bernilai true maka jalankan aksi, jika false maka tidak berjalan

// while(true) { // kondisi
// 	console.log('Hello world'); // aksi
// }

// contoh
// program di ulang oleh user
// var ulang = true;
// while( ulang ) {
// 	console.log('hello world!');

// 	ulang = confirm('lagi?');
// }

// program diulang oleh kita
// var nilaiAwal = 1;
// while( nilaiAwal <= 5 ) {
// 	console.log('hello world!' + nilaiawal + 'x');
// nilaiAwal++;
// }

// latihan
var angkot = 1;
while(angkot <= 10) {
	if (angkot % 2 == 0) {
		console.log('Angkot No.' + angkot + ' beroperasi dengan baik');
	} else {
		console.log('Angkot No.' + angkot + ' beroperasi tidak baik');
	}
angkot++;
}
