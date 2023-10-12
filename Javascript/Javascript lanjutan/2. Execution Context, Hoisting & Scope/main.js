// 2.1 Execution Context, Hoisting & Scope


// console.log(nama);
// var nama = 'Riky';

// creation phase pada Global Context
// Apakah ada variabel atau function dalam Context, dan mengabaikan console.log
// jika ada variable maka akan undefined (ex : var nama : undefined)
// nama function = fn()
// hoisting
// window = Global object
// this = window

// execution phase

// var akan menjadi undefined

// var nama = 'riky';
// var nim = 19101172;

// function sayHelloWorld(){

// 	return `${nama} dan ${nim}`

// }

// function membuat Local Execution Context
// yang didalamnya terdapat Creation dan Execution phase
// bisa akses window
// bisa akses arguments
// dan ada Hoisting

// var nama = 'Riky';
// var username = '@rikymahendra';

// function cetakUrl(username) {
// 	var instagramUrl = 'https://instagram.com';
// 	return instagramUrl + username
// }
// console.log(cetakUrl());

// contoh 2
// function a(){
// 	console.log('ini adalah a');

// 	function b(){
// 		console.log('ini adalah b');

// 		function c(){
// 			console.log('ini adalah c');
// 		}
// 		c();
// 	}

// 	b();

// }

// a();


// contoh 3

function satu(){
	var nama = 'Evan';
	console.log(nama);
}

function dua(){
	console.log(nama);
}

console.log(nama)
var nama = 'Erik';
satu();
dua('Doddy');
console.log(nama);