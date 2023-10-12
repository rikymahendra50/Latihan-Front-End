var ulang = true;

while( ulang ){

	var comp = Math.floor(Math.random()*10)+1;
	var kesempatan = 3;
	var hasil = '';

	alert('Selamat datang di tebak angka Riky');

	while( 1 <= kesempatan ){
	var p = parseInt(prompt('Pilih angka 1 - 10'));

		if ( p === comp ){
			hasil = 'BENAR!'
			alert('Tebakan anda benar! komputer memilih '+ comp);
			break;
		} else if ( p > comp ){
			hasil = 'RENDAH!'
			kesempatan -= 1;
			alert('Tebakan anda kurang ' + hasil + '\ntebakan anda '+ p +'\nkesempatan '+ kesempatan + ' x lagi');
		} else if ( p < comp ){
			hasil = 'TINGGI!'
			kesempatan -= 1;
			alert('Tebakan anda kurang ' + hasil + '\ntebakan anda '+ p +'\nkesempatan '+ kesempatan + ' x lagi');
		}
		if ( kesempatan == 0 ) {
			alert('Tebakan anda salah \nJawabannya adalah '+ comp );
		}
	}
	ulang = confirm('Coba lagi ?');
}


