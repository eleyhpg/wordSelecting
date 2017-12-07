$(document).ready( function() {
	
					var toti;
					var totd;
					var averageI;
					var averageD;
					
				// carga los textos	aah
				$(".cargatxt").click( function() {
					var txti = $(this).data("txti");
					$(".contenidosi").load("data/datosyabuenos/"+txti, function() {
					})
				// carga los textos inaugurales	
					var txtd = $(this).data("txtd");
					$(".contenidosd").load("data/datosyabuenos/"+txtd, function() {
					})
					
					//lograr que los tots y keywords aparezcan en el dom
					toti = $(this).data("toti");
					document.getElementById(".totalvisi").innerHTML = toti;
					
					
					totd = $(this).data("totd");
					document.getElementById(".totalvisd").innerHTML = totd;

				})
				//carga las selecciones por categoría, suma las apariciones por clase y promedia con el total.
				
				$(".cargaunderlines").click( function() {
					var cat = $(this).data("categoria");
					$("."+cat+"i").addClass("underline--magical"); 		
					$("."+cat).addClass("underline--magical--r");
					var keywordI = $("."+cat+"i").length;
					document.getElementById(".keywordvisi").innerHTML = keywordI;
					var keywordD = $("."+cat).length;
					document.getElementById(".keywordvisd").innerHTML = keywordD;
					console.log(keywordI);
					console.log(toti);
					console.log(keywordD);
					console.log(totd);
					averageI = Number(((keywordI/toti)*100).toFixed(2));
					document.getElementById("promediovisi").innerHTML = averageI;
					averageD = Number(((keywordD/totd)*100).toFixed(2));
					document.getElementById("promediovisd").innerHTML = averageD;
					console.log(averageI);
					console.log(averageD);

				})
				
				//deselecciona las categorías
				$(".reset").click( function() {
					var cat = $(this).data("categoria");
					$("."+cat+"i").removeClass("underline--magical"); 		
					$("."+cat).removeClass("underline--magical--r"); 		

				})
				
			
				//sumar y restar el promedio
				$(".subPerc").click( function() {
					averageI-=0.01;	
					console.log(averageI);
					document.getElementById("contenidosi").style.wordSpacing -= '0.2';
				})
				
				$(".addPerc").click( function() {
					averageI+=0.01;	
					console.log(averageD);
					document.getElementById("contenidosd").style.wordSpacing += '0.2';
				})
				
	

				
			})
			
			