// innerHtml = merubah isi dari Html
// const judul = document.getElementById('judul');
// judul.innerHTML = '<em>Riky Mahendra</em>';

// style
// query selector harus pakai tanda, untuk membedakan
// const judul = document.querySelector('#judul');
// judul.style.color = 'lightBlue';
// judul.style.backgroundColor = 'Salmon';

// attribute
// attribute bersifat menimpa
// menambah attribute seperti id='' atau nama = '' dll
// const judul = document.getElementsByTagName('h1')[0];
// judul.setAttribute = ('name', 'Riky');

// mendapatkan attribute
// isi dari attribute href untuk a
// a.getAttribute('href');

// menghilangkan sebuah attribute
// a.removeAttribute('href');

// const p2 = document.querySelector('.p2');
// // menambah class tanpa menimpa seperti attribute
// p2.ClassList.add('label');

// // menghapus class (Kalo punya classnya)
// p2.ClassList.remove('label');

// // jika class tidak ada maka bisa menambah dan jika ada maka menghapus dengan otomatis
// // bisa membuat tombol seperti lampu on/off
// p2.ClassList.toggle('label');

// // memanggil class yang diinginkan
// // hitung jumlah kelas dari 0 (seperti array) 
// p2.ClassList.item('0');

// // mengetahui apakah ada suatu class
// // "Apakah ada class p2" jika ada maka true
// p2.ClassList.contains('.p2');

// // mengganti nama class
// // "Ganti nama kelas p3 menjadi p4"
// p2.ClassList.replace('p3','p4');

// DOM Manipulation
// membuat paragraf baru di class p
// const pBaru = document.createElement('p');
// const teksPbaru = document.createTextNode('Paragraf Baru');

// // simpan tulisan ke paragraf
// pBaru.appendChild(teksPbaru);

// // simpan pBaru diakhir section
// const sectionA = document.getElementById('a');
// sectionA.appendChild(pBaru);

// // menambahkan item baru diantara item satu dan item 2
// const liBaru = document.createElement('li');
// const teksLiBaru = document.createTextNode('Item Baru');

// liBaru.appendChild(teksLiBaru);

// const ul = document.querySelector('section#b ul');
// const li2 = ul.querySelector('li:nth-child(2)');

// ul.insertBefore(liBaru, li2);

// // menghapus elemen html
// const link = document.getElementsByTagName('a')[0];

// sectionA.removeChild(link);

// // mengganti section b -> p (ganti h2) ->paragraf 4 (ganti Judul baru!) 
// const sectionB = document.getElementById('b');
// const p4 = sectionB.querySelector('p');

// const h2Baru = document.createElement('h2');
// const teksH2baru = document.createTextNode('Judul baru!');

// h2Baru.appendChild(teksH2baru);
// // h2 mengganti p4
// sectionB.replaceChild(h2Baru,p4);


// <-- DOM Events -->
// Dom event mememiliki banyak sytaks, dibawah ini hanya merupakan beberapa bagiannya saja

// membuat tombol mengubah warna dari class p2 menjadi kuning
const p2 = document.querySelector('.p2');

function ubahWarna(){
	p2.style.backgroundColor = 'yellow';
}

p2.onclick = ubahWarna;

// jika tombol diklik akan menambah item baru pada paragraf
// addEventListener tidak bersifat menimpa
const p4 = document.querySelector('section#b p');
p4.addEventListener('click', function (){
	const ul = document.querySelector('section#b ul');

	const liBaru = document.createElement('li');
	const teksLiBaru = document.createTextNode('Item Baru');

	liBaru.appendChild(teksLiBaru);
	ul.appendChild(liBaru);

});

// jika kursor mengarah ke elemen, maka menjalankan function
const p3 = document.querySelector('.p3');
p3.addEventListener('mouseenter', function (){
	p3.style.backgroundColor = 'lightgreen';
});
p3.addEventListener('mouseleave', function (){
	p3.style.backgroundColor = 'lightblue';
});

// <--DOM Event End-->

