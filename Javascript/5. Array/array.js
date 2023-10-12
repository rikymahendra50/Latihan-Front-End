// A. Manipulasi Array

// 1. Menambah isi array 
// var array = [];
// array[0] = '0';
// array[1] = 'A';
// array[2] = 'B';
// array[3] = 'C';
// array[4] = 'D';

// console.log(array);

// 2. Menghapus isi array

// var nama = ["Putu","Riky","Mahendra"];
// nama[0] = undefined;
// console.log(nama);

// 3. Menampilkan isi array

// var mahasiswa = ["Eren","Reiner","Armin","Mikasa"];
// for (var i = 0; i < mahasiswa.length; i++) {
// 	console.log(mahasiswa[i]);
// }

// B. Method array
var mahasiswa = ["Eren","Reiner","Armin","Mikasa"];

// 1. Join = menggabungkan seluruh isi array dan menjadikannya sebuah string

// console.log(mahasiswa.join(' - '));

// 2. push(menambah) & pop(menghapus elemen terakhir array) 

mahasiswa.push("Zekke","Erwin"); // push bisa nemabah > 1 elemen
mahasiswa.pop(); // pop harus dilakukan satu persatu

console.log(mahasiswa.join(' - '));

// 3. unshift(menambah elemen pertama) & shift (menghapus elemen pertama array)

mahasiswa.unshift("Historia"); // unshift menambah elemen pertama
mahasiswa.shift(); // menghapus elemen pertama

console.log(mahasiswa.join(' - '));

// 4. splice
// splice(indexAwal, mauDihapusBerapa/hapus dari index berapa, elemenBaru1, elemenBaru2,..)

mahasiswa.splice(2,0,'Jean');
console.log(mahasiswa.join(' - '))

// 5. slice
// slice(awal,akhir)

// mengambil index 1 dan 2
var mahasiswa2 = mahasiswa.slice(1,3);
console.log(mahasiswa2.join(' - '))

// 6. foreach

var angka = [1,2,3,4,5,6,7,8];
var nama = ['Riky','Putra','Mahendra'];

// for (var i = 0; i < angka.length; i++) {
// 	console.log(angka[i]);
// }

// function expresion
angka.forEach(function(e){
	console.log(e);
})
// atau
var cetak = function(e){
	console.log(e)
}
angka.forEach(cetak);

nama.forEach(function(e, i){
	console.log('Mahasiswa ke '+ (i+1) + ' adalah : ' + e );
})

// 7. map
// mengembalikan array, sedangkan forEach tidak

var angka = [1,2,3,4,5,6,7,8];

var angka2 = angka.map(function(e){
	return e * 2;
})

console.log(angka2.join(' - '));

// 8. sort = mengurutkan sebuah nilai

var angka3 = [1,2,4,6,5,6,7,8];
// a-b itu untuk ascending (mengurut menaik), jika pakai b-a maka akan descending (menurun) // bukan math
angka3.sort(function(a,b){
	return a-b;
});

console.log(angka3.join(' - '));

// 9. filter = mencari banyak nilai || find = hanya mencari satu nilai

var angka4 = [1,2,4,6,5,6,7,8];
var angka5 = angka4.filter(function(x){
	return x > 5;
})
console.log(angka5);

// -. Lenght = mengetahui jumlah elemen yang ada pada array

// var mahasiswa = ["Eren","Reiner","Armin","Mikasa"];
// for (var i = 0; i < mahasiswa.length; i++) {
// 	console.log(mahasiswa[i]);
// }

