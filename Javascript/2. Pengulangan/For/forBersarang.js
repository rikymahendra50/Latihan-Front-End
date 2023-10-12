// var s = '';

// for (var i = 10; i >= 1; i--) {
// 	for (var j = 1; j <= i; j++) {
// 		s += '*';
// 	}
// 	s += '\n';
// }

// console.log(s);

// anak panah ke kanan
// var s = '';
// var c = '';

// for (var p = 1; p <= 10; p++) {
// 	for (var o = 1; o <= p; o++) {
// 		s += '*';
// 	}
// 	s += '\n';
// 	for (var i = 10; i >= o; i--) {
// 		c += '*';
// 	}
// 	c += '\n';
	
// }

// console.log(s + c);

// bintang sama sisi
// var m = '';
// var pola = 10;

// for (var i = 1; i <= pola; i++) {
	
// 	for (var j = pola; j >= i; j--) {
// 		m += 'p';
// 	}

// 	for (var k = 1; k <= i + (i-1); k++) {
// 		m += '*';
// 	}

// 	m += '\n';
// }

// console.log(m)

// var m = '';
// var pola = 5;

// for (var i = 1; i <= pola; i++) {
	
// 	for (var j = 1; j <= i; j++) {
// 		m += ' ';
// 	}

// 	for (var k = pola; k >= i ; k--) {
// 		m += '*';
// 	}

// 	m += '\n';
// }
// console.log(m)

var m = '';
var pola = 5;

for (var i = 1; i <= pola; i++) {
	
	for (var j = 1; j <= i; j++) {
	  m += 's';
	}

	for (var k = pola; k >= i; k--) {
		m += '*';
	}

	m += '\n';
}
console.log(m)

function tambah(){
	var hasil = 0;
	for (var i = 0; i < arguments.length; i++) {
		hasil += arguments[i];
	}
	return hasil;
}

console.log(tambah(1,2,3,4))

