const hitung = document.querySelector('.hitung');

hitung.addEventListener('click',function(e){

	const angka1 = parseInt(document.querySelector('.pertama').value);
	const angka2 = parseInt(document.querySelector('.kedua').value);

	if ( e.target.className === 'tambah' ) {
		alert(angka1+angka2);
	} else if (e.target.className === 'kurang') {
		alert(angka1-angka2); 
	} else if (e.target.className === 'bagi') {
		alert(angka1/angka2); 
	} else if (e.target.className === 'kali') {
		alert(angka1*angka2); 
	}

});







// function perhitungan (){
// 	const Angka1 = parseInt(document.querySelector('.pertama'));
// 	const Angka2 = parseInt(document.querySelector('.kedua'));
// 	const perhitungan = parseInt(document.querySelectorAll('#perhitungan'));

// 	console.log(perhitungan);

	// switch ( hitung ) {
	// 	case 'tambah':
	// 		var hasil = Angka1 + Angka2 ;
	// 	break;
	// 	case 'kurang':
	// 		hasil = Angka1 - Angka2;
	// 	break;
	// 	case 'bagi':
	// 		hasil = Angka1 / Angka2;
	// 	break;
	// 	case 'kali':
	// 		hasil = Angka1 * Angka2;
	// 	break;

	// 	alert(hasil);
	// }
// }
