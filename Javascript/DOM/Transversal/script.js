// parentNode -> Node
// parentElement -> elemen
// nextSibling -> node
// nextElementSibling -> elemen
// previousSibling -> node
// previousElementSibling -> node

const close = document.querySelectorAll('.close');

// // cara ke 1
// for (var i = 0; i < close.length; i++) {
// 	// e merupakan macam-macam informasi dari click/event yang terjadi
// 	close[i].addEventListener('click',function(e){
// 		// parentElement = memanggil parent .dari close sehingga nantinya parrent tersebut bisa dihapus
// 		e.target.parentElement.style.display = 'none';
// 	});
// }

// // cara ke 2
// tiap elemen pada nodelist close, maka akan dijalankan function
close.forEach(function(el){
	el.addEventListener('click',function(e){
		// mengambil container
		// e.target.parentElement.parentElement.style.display = 'none';
		// mengambil card
		e.target.parentElement.style.display = 'none';
		// menghentikan aksi default
		// dalam kasus ini, menghetikan href supaya tidak melakukan restart browser
		e.preventDefault();
		// menghetikan untuk menjalankan function lain diatas close
		e.stopPropagation();
	});
});

const cards = document.querySelectorAll('.card');

cards.forEach(function(card){
	card.addEventListener('click',function(e){
		alert('ok');
	});
});

// cara ke 3
// event bubling(gelembung)
const container = document.querySelector('.container');

container.addEventListener('click',function(e){
	// memilih target classname yang ada pada container
	if ( e.target.className === 'close' ) {
		e.target.parentElement.style.display = 'none';
	}
});
