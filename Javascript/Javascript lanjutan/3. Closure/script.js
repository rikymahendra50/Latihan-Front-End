// function init(){

// 	//let nama = 'Tony'; // local variable
// 	return function (nama){ // inner function
// 		// let nama = 'Riky';
// 		console.log(nama); // akses ke parent variable
// 	}
// 	return tampilNama;	
// }

// let panggilNama = init();

// panggilNama('Rosi');

// contoh ke 2 closure

// function ucapanSalam(waktu){
// 	return function (nama){
// 		console.log(`Halo ${nama}, Selamat ${waktu} semoga harimu menyenangkan !`);
// 	}
// }

// let selamatPagi = ucapanSalam('Pagi');
// let selamatSiang = ucapanSalam('Siang');
// let selamatMalam = ucapanSalam('Malam');

// selamatMalam('Riky');
// selamatPagi('Tude');


// contoh 3
let add = function(){

	let number = 0;

	return function(){
		return ++number;
	}

}

let a = add();
console.log(a()); 
console.log(a()); 
console.log(a()); 