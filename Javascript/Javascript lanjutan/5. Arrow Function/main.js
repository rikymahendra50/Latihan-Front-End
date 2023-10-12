// Function Expression
// const tampilNama = function (nama) {
// 	return `Halo, ${nama}`;
// }

// console.log(tampilNama('Riky Mahendra'));

// // menggunakan arrow function
// const tampilNama = (nama) => { return `Halo, ${nama}`; }
// console.log('Riky Mahendra');

// const tampilNama = (nama, waktu) => {
// 	return `Selamat ${waktu}, ${nama}`;
// }
// console.log(tampilNama('Riky', 'Pagi'));


// implisit return
// const tampilNama = nama => `Halo ${nama}`;
// console.log(tampilNama('Riky'));

// jika tidak ada parameter
// const tampilNama = () => `Halo dunia`;
// console.log(tampilNama());

let mahasiswa = ['Antonius','Riky','Evan'];

// 2.1 function biasa
// let jumlahHuruf = mahasiswa.map(function(nama){
// 	return nama.length;
// });

// 2.2 Arrow function

// let jumlahHuruf = mahasiswa.map( nama => nama.length );
// console.log(jumlahHuruf);

// jika ingin membuat objek dalam function maka tambahkan tanda "()"
let jumlahHuruf = mahasiswa.map( nama => ({ nama: nama, jmlhHuruf: nama.length}) );

console.log(jumlahHuruf);