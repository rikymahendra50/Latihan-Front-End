var penumpang = ['Riky','','Mahendra'];
var tambahPenumpang = function(namaPenumpang,penumpang){

	// jika angkot kosong
	if ( penumpang.length == 0 ) {
		// tambah penumpang diawal array
		penumpang.push(namaPenumpang);
		// kembalikan isi array & keluar dari function
		return penumpang;
	} else {
		// telusuri kursi dari awal
		for (var i = 0; i < penumpang.length; i++) {
			// jika ada kursi kosong
			if ( penumpang[i] == undefined ) {
				// maka tambah penumpang di kursi kosong tsb
				penumpang[i] = namaPenumpang;
				// kembalikan isi array dan keluar dari function
				return penumpang;
			} 
			// jika seluruh kursi terisi
			else if ( i == penumpang.length - 1 ) {
				// tambah penumpang diakhir array
				penumpang.push(namaPenumpang);
				// kembalikan isi array dan keluar dari function
				return penumpang;
			}
		}  
	}

}

console.log(tambahPenumpang('riky'));
