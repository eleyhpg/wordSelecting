
var toti;
var totd;
var averageI;
var averageD;

function onClickCargaTxt () {

	var txti = $(this).data('txti');
	$('.contenidosi').load('data/datosyabuenos/' + txti, function () {});
	
	// carga los textos inaugurales	
	var txtd = $(this).data('txtd');
	$('.contenidosd').load('data/datosyabuenos/' + txtd, function () {});
	
	//lograr que los tots y keywords aparezcan en el dom
	toti = $(this).data('toti');
	$('.totalvisi').html(toti);

	totd = $(this).data('totd');
	document.getElementById('.totalvisd').innerHTML = totd;
}

function onClickCargaUnderlines () {
	var cat = $(this).data('categoria');
	
	$('.' + cat + 'i').addClass('underline--magical');
	$('.' + cat).addClass('underline--magical--r');

	var keywordI = $('.' + cat + 'i').length;
	document.getElementById('.keywordvisi').innerHTML = keywordI;

	var keywordD = $('.'+cat).length;
	document.getElementById('.keywordvisd').innerHTML = keywordD;

	console.log(keywordI);
	console.log(toti);
	console.log(keywordD);
	console.log(totd);

	averageI = Number(((keywordI/toti)*100).toFixed(2));
	document.getElementById('promediovisi').innerHTML = averageI;

	averageD = Number(((keywordD/totd)*100).toFixed(2));
	document.getElementById('promediovisd').innerHTML = averageD;

	console.log(averageI);	
	console.log(averageD);
}

function onClickReset () {
	var cat = $(this).data('categoria');

	$('.' + cat + 'i').removeClass('underline--magical');
	$('.' + cat).removeClass('underline--magical--r');
}

function onClickSubPerc () {
	averageI -= 0.01;
	console.log(averageI);
	$('.contenidosi').css('word-spacing', '-=0.2');
}

function onClickAddPerc () {
	averageI+=0.01;	
	console.log(averageD);
	$('.contenidosd').css('word-spacing', '+=0.2');
}

$(document).ready(function () {
	
	// Configura los escuchas de eventos: asocia eventos con callbacks
	$('.cargatxt').click(onClickCargaTxt);
	$('.cargaunderlines').click(onClickCargaUnderlines);
	$('.reset').click(onClickReset);
	$('.subPerc').click(onClickSubPerc);
	$('.addPerc').click(onClickAddPerc);
	
});