// start pop up

// alert('Selamat datang!')

// var ulang = true;

// while( ulang ) {

// 	var nama = prompt('Masukan Nama anda');

// 	if ( nama === false ) {
// 		alert('anda belum memasukan data dengan lengkap');
// 	} else {
// 		alert('Halo ' + nama);
// 	}

// 	ulang = confirm('coba lagi');
// }

// alert('terima kasih');

// end pop up 


// start pengulangan

// var s = '';
// var jmlBintang = 5;
// var jmlbaris = 10;

	// for (var i = 1; i <= jmlbaris/2; i++) {
	// 	for (var j = 1; j <= i; j++) {
	// 		s += '*';
	// 	}
	// 	s += '\n';
	// }
	// for (var k = 1; k <= jmlbaris/2; k++) {
	// 	for (var o = jmlbaris/2; o >= k; o--) {
	// 		s += '*';
	// 	}
	// 	s += '\n';
	// }

	// belah ketupat
	// for (var l = 1; l <= jmlbaris; l++) {
	// 	for (var k = jmlbaris; k >= l; k--) {
	// 		s += ' ';
	// 	}
	// 	for (var j = 1; j <= l + (l-1); j++) {
	// 		s+='*';
	// 	}
	// 	s += '\n';
	// }
	// for (var a = 1; a <= jmlbaris; a++) {
	// 	for (var w = 1; w <= a; w++) {
	// 		s += ' ';
	// 	}
	// 	for (var m = jmlbaris*2; m > a + (a-1); m--) {
	// 		s+='*';
	// 	}
	// 	s += '\n';
	// }
	
// 	for (var i = 1; i <= 5; i++) {
// 		for (var j = 0; j < 10; j++) {
// 			s += ' ';
// 		}
// 		for (var k = 1; k <= 5; k++) {
// 			s += '*';
// 		}
// 		for (var a = 1; a <= 10; a++) {
// 			s += ' ';
// 		}
// 		s += '\n';
// 	}

// 	for (var i = 1; i <= 3; i++) {
// 		for (var j = 0; j < 25; j++) {
// 			s += '*';
// 		}
// 		s += '\n';
// 	}

// 	for (var i = 1; i <= 5; i++) {
// 		for (var j = 0; j < 10; j++) {
// 			s += ' ';
// 		}
// 		for (var k = 1; k <= 5; k++) {
// 			s += '*';
// 		}
// 		for (var a = 1; a <= 10; a++) {
// 			s += ' ';
// 		}
// 		s += '\n';
// 	}

// var angkot = 1;
// var angkotBeroperasi = 6;
// var jumlahAngkot = 10

// for (let noAngkot = 1; noAngkot < jumlahAngkot; noAngkot++) {
// 	if ( noAngkot <= angkotBeroperasi && noAngkot !== 5 ) {
// 		console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik')
// 	} else if(noAngkot == 5 || noAngkot === 8 || noAngkot === 10){
// 		console.log('Angkot No. ' + noAngkot + ' lembur')
// 	} else {
// 		console.log('Angkot No. ' + noAngkot + ' tidak beroprasi dengan baik')
// 	}
// }




// console.log(s)

// end pengulangan

// perhitungan genshin

// function damage(){

// 	// variable damage
// 	var attack = document.getElementById('attack').value;
// 	var damageBonus = document.getElementById('DBonus').value;
// 	var talent = document.getElementById('Dtalent').value;

// 	var lvlkarakter = parseInt(document.getElementById('lvlchar').value);
// 	var lvlenemy = parseInt(document.getElementById('lvlmusuh').value);

// 	var Resist = parseInt(document.getElementById('resist').value);

// 	var critDamage = parseInt(document.getElementById('critD').value);

// 	// damage awal 
// 	var damage = attack * (1 + damageBonus/100) * talent;

// 	// hasil enemy def
// 	var enemyDef = (lvlkarakter+100) / (lvlkarakter+lvlenemy+200);

// 	// hitung resist
// 	var hasilResist = 1 - (Resist/100);

// 	// total damage
// 	var normalDamage = damage * enemyDef * hasilResist;

// 	// crital damage
// 	var crit = normalDamage * (1 + critDamage/100);

// 	alert("Damage anda " + normalDamage.toFixed(3));
// 	alert("Damage anda " + crit.toFixed(3));
// }

