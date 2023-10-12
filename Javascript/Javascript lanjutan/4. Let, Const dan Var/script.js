// kelebihan const const cocok digunakan untuk membuat variabel yang nilainya tetap dan tidak bisa diubah, mencegah berubahnya nilai

// kelebihan let mencegah pembuatan variabel yang sama dengan nilai yang berbeda

// kelebihan var nilai variabel dapat diubah seiring proses hoisting


// LET
let points = 50;
let winner = false;
if(points > 40) {
  let winner = true;
  // akan menampilkan nilai true, karena masih satu scope dengan variable winner yang nilainya true
  console.log(winner);
}

// akan menampilkan nilai false karena kita mengubah nilai winner pada block if
console.log(winner);


// VAR
var points = 50;
var winner = false;
if(points > 40) {
  var winner = true;
  // akan menampilkan nilai true dan mengubah nilai variable globalnya menjadi true juga
  console.log(winner);
}

// akan menampilkan nilai true karena kita mengubah nilai winner pada block if dan berefek pada variable pertama
console.log(winner);

// CONST
const key = 'xyz123';

key = 'xyz1234'; // Akan menampilkan error, bahwa const tidak bisa diubah nilainya

// LET
let key = 'xyz123';

key = 'xyz1234'; // tidak akan menampilkan error, dan perubahan nilai akan berhasil