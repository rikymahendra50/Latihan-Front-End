// DOM Selection
// HTMLCollection = khusus elemen html (<p>,<div>,dll)
// Element = hanya satu elemen
// node list = termasuk  semua element

// document.getElementById(); -> element

const judul = document.getElementById('judul');
// merubah warna jadi merah	
judul.style.color = 'red';
// merubah backround menjadi merah (jangan pakai simbol aritmatika)
judul.style.backgroundColor = '#ccc';
// merubah isi html
judul.innerHTML = 'Riky Mahendra';

// document.getElementsByTagName(); -> HTML Collection
// ini mirip array

const p = document.getElementsByTagName('p');

for (let i = 0; i < p.length; i++) {
	p[i].style.backgroundColor = 'lightBlue';
}

// document.getElementsByClassName(); -> HTMLCollection

const p1 = document.getElementsByClassName('p1');
p1[0].innerHTML = "Ini berubah dari javascript";


// document.querySelector() -> element

const p4 = document.querySelector('#b p');
p4.style.color = 'green';
p4.style.fontSize = '30px';

const li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.style.backgroundColor = 'orange';

// document.querySelectorAll() -> Nodelist
// mirip array juga

const p2 = document.querySelectorAll('p');

for (let i = 0; i < p2.length; i++) {
	p2[i].innerHTML = 'Ini adalah code javascript';
}


// merubah root 
// mempermudah scope pencarian

// const sectionB = document.getElementsById('section#b');
// const p4 = sectionB.querySelector('p');
// p4.style.backgroundColor = 'orange';

const sectionB = document.querySelector('section#b');
const p4 = sectionB.getElementsByTagName('p')[0];
p4.style.backgroundColor = 'orange'; 