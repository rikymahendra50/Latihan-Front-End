// const body = document.querySelector('body');
const tUbahWarna = document.getElementById('ubahWarna');

tUbahWarna.addEventListener('click',function() {
	// document.body.style.backgroundColor = 'lightblue';
	// document.body.setAttribute('class', 'biru-muda');
	document.body.classList.toggle('biru-muda');
});

// acak warna
const tAcakWarna = document.createElement('button');
const teksButton = document.createTextNode('Acak Warna');

tAcakWarna.appendChild(teksButton);
tAcakWarna.setAttribute('type','button');
// menaruh tommbol acak warna setelah tombol ubah warna di html
tUbahWarna.after(tAcakWarna);

tAcakWarna.addEventListener('click', function() {
	const r = Math.round(Math.random()*255+1);
	const g = Math.round(Math.random()*255+1);
	const b = Math.round(Math.random()*255+1);
	document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
});

// membuat pemlihan warna
// menangkap inputan 
const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');
 
// menjalankan fungsi
// input bisa dinganti dengan chage atau sebaliknya
sMerah.addEventListener('input', function() {
	// mengambil nilai inputan dalam bentuk apapun
	const r = sMerah.value;
	const g = sHijau.value;
	const b = sBiru.value;
	document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
});

sHijau.addEventListener('input', function() {
	// mengambil nilai inputan dalam bentuk apapun
	const r = sMerah.value;
	const g = sHijau.value;
	const b = sBiru.value;
	document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
});

sBiru.addEventListener('input', function() {
	// mengambil nilai inputan dalam bentuk apapun
	const r = sMerah.value;
	const g = sHijau.value;
	const b = sBiru.value;
	document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
});

// merubah warna sesuai gerakan kursor mouse
document.body.addEventListener('mousemove',function(event){
	// console.log(event.clientY);
	// ukuran browser -> console.log(event.clientY)
	const xPos = Math.round((event.clientX / window.innerWidth)*255);
	// console.log(xPos);
	const yPos = Math.round((event.clientY / window.innerHeight)*255);
	
	document.body.style.backgroundColor = 'rgb('+ xPos +','+ yPos +',100)';

});