var mastermind = new Mastermind();
mastermind.init();

$('.couleur').on('click', function(){
	mastermind.addColor($(this));
});

$('.valider').on('click', mastermind.valider);

$('.effacer').on('click', mastermind.effacer);

$('.recommencer').on('click', function(){
	location.reload();
});