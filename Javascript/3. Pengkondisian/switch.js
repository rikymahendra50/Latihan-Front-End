var item = prompt('Pilih nama Makanan / minuman : \n(cth : nasi, daging, susu, humberger, softdrink)');

switch ( item ) {

	case 'nasi':
	case 'daging':
	case 'susu':
		alert('anda memilih makanan / minuman sehat');
		break;
	case 'humberger':
		alert('anda memilih makanan / minuman tidak sehat');
		break;
	case 'softdrink':
		alert('anda memilih makanan / minuman tidak sehat');
		break;
	default :
		alert('anda salah memilih makanan / minuman');
		break;
}


