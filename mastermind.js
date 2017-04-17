var Mastermind = function(option){
	var color=[], chaine, iligne, result=[], jeu=0;
	function init(){
		color=['blue', 'green', 'white', 'yellow', 'purple', 'red', 'black', 'orange'];
		chaines = createColorDock();
		console.log(chaines);
		iligne=1;
	}

	function createColorDock(){
		var rand = [];
		for (var i = 1; i <= 4; i++) {
			rand.push(color[Math.floor(Math.random() * color.length)]);
		}
		return rand;
	}

	function addColor(element){
		if(iligne<4){
			var color=element.attr('data-couleur');
			$('ul.activ li.activ div').css('background-color', color).attr('data-couleur', color);
			$('ul.activ li.activ').removeClass('activ').next().addClass('activ');
			iligne++;
		}else{
		if(iligne==4){
			var color=element.attr('data-couleur');
			$('ul.activ li.activ div').css('background-color', color).attr('data-couleur', color);
			iligne++;
		}}
	}

	function valider(){
		jeu++;
		var couleur =new Array().concat(chaines);
		var tab2=[];
		if(iligne==5){
			result=[];
			$('ul.activ li').each(function( index ) {
				$a = $(this);
				if(index!=0){
					if($a.find('div').attr('data-couleur')==couleur[index-1]){
						result.push(1);
						couleur[index-1]="";
					}
				};
			});
			$('ul.activ li').each(function( index ) {
				var fini=false;
				$a = $(this);
				if(index!=0){
					$.each(couleur, function(index2, val){
						if($a.find('div').attr('data-couleur')==val && fini==false){	
								result.push(2);
								fini=true;
						}
					});
				};
			});
			shuffle(result);
			console.log(result);
			affichepoints(result);
			$('ul.activ').removeClass('activ').parent().next().find('ul').addClass('activ');
			iligne=1;
		}
	}

	function affichepoints(tab){
		var bon=0;
		$.each(tab, function(index, val){
			var num=index+1;
			if(val==1){
				bon++;
				$('ul.activ .petitcercle:nth-child('+num+')').css('background-color', 'black');
				if (bon==4){
					$('.partie').html('<h2>Victoire !!</h2>');
					$('ul.activ').removeClass('activ');
				}
			}
			else{
				$('ul.activ .petitcercle:nth-child('+num+')').css('background-color', 'white');
			}
		});
		if(jeu==10 && bon!=4){
			$('.partie').html('<h2>Perdu...</h2>');
		}
	}

	function shuffle(tab)
	{
	   var j = 0;
	   var valI = '';
	   var valJ = valI;
	   var l = tab.length - 1;
	   while(l > -1)
	   {
			j = Math.floor(Math.random() * l);
			valI = tab[l];
			valJ = tab[j];
			tab[l] = valJ;
			tab[j] = valI;
			l = l - 1;
		}
		return tab;
	 }

	 // function tabcouleur(couleurs){
	 // 	var tab=[];
	 // 	$.each(couleurs, function(i, val){
	 // 		tab[i]=val;
	 // 	});
	 // 	return tab;
	 // }

	 function effacer(){
	 	if(iligne==5){
	 		$('ul.activ li.activ').find('div').css('background-color', 'grey');
		 	iligne--;
	 	}else{
		 	$('ul.activ li.activ').removeClass('activ').prev().addClass('activ').find('div').css('background-color', 'grey');
		 	iligne--;
		}
	 }

	return {
		init: function(){
			init();			
		},
		addColor: function(e){
			addColor(e);
		},
		valider: function(){
			valider();
		},
		effacer: function(){
			effacer();
		}
	}
}