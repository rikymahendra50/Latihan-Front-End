// User memasukan input
// menangkap pilihan user
var ulang = true;
while ( ulang ){
	var player = prompt('pilih : gunting, batu, kertas');
	// menangkap pilihan computer
	// membangkitkan bilangan random
	var comp = Math.random();

	if ( comp < 0.34 ){
		comp = 'gunting';
	} else if ( comp > 0.34 && comp < 0.67){
		comp = 'kertas';
	} else {
		comp = 'batu';
	}

	var hasil = '';
	// menentukan rule
	if ( player == comp ) {
		hasil = 'SERI!';
	} else if ( player == 'gunting' ){
		if ( comp == 'kertas') {
			hasil = 'MENANG!';
		} else {
			hasil = 'KALAH!';
		}
	} else if ( player == 'kertas' ){
		if ( comp == 'gunting' ) {
			hasil = 'KALAH!';
		} else {
			hasil = 'MENANG!';
		}
	} else if ( player == 'batu' ){
		hasil = ( comp == 'kertas' ) ? 'MENANG!' : 'KALAH';
	} else {
		hasil = 'masukan pilihan yang benar!'
	}

	// tampilkan hasil
	alert('Jawaban computer adalah : ' + comp + ' dan Jawaban anda adalah : '+ player + ' maka anda : '+ hasil );

	// confirm ulang
	ulang = confirm('Coba lagi ?');
	}


