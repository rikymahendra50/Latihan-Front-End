function jumlahVolumeDuaKubus(a,b){

	var volumeA;
	var volumeB;
	var total;

	volumeA = a * a * a;
	volumeB = b * b * b;

	total = volumeA + volumeB;

	return total;

}
alert(jumlahVolumeDuaKubus(8,3));


function tambah(a,b){

	var hasil = a + b;

	return hasil;

}

alert(tambah(3,3));

function kali(a,b) {
	
	var hasil = a * b;

	return hasil;
}

alert(kali(3,4));
alert(kali(tambah(2,3),tambah(3,2)));

function kurang(){

	var hasil = 0;
	for (var i = 0; i < arguments.length; i++) {
		hasil -= arguments[i];
	}
	return hasil;
}
var coba = kurang(10,2,2,2);
console.log(coba);


// Refactoring = membuat function lebih sederhana
function jumlahVolumeDuaKubus2(a,b){

	return a * a * a + b * b * b;

}
alert(jumlahVolumeDuaKubus2(1,3));

// Global scope / windows scope
// function bisa mengambil variable dari luar function..
var a = 10;

function tes(){

	var b = 10;
	console.log(a);

}
// tetapi variable di dalam function tidak bisa dipaggil diluar function
tes(a);
console.log(b);


// REKUNSIF
// menghindari looping terus menerus
function tampilAngka(n){
	// bacecase
	if ( n == 0 ) return;
	console.log(n)
	return tampilAngka(n-1);

}

tampilAngka(10);

// faktorial 5! = 5*4*3*2*1
function faktorial(n){

	if ( n === 0 ){
		return 1;
	}
	return n * factorial(n-1);

}

// funcion ada 2 yaitu declaration dan expression
// Declaration
nama('Riky');
function nama(nama){
	alert('Halo' + nama);
}

// Expression 
var expression = function(nama){
					alert('Halo' + nama);
				 }
nama('Riky');
