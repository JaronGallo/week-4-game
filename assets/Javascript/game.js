window.onload = function() {
 
	var mainChar = false;
	var faded= false;
	var secondpickReady= false;


var enemyHp=0;
var enemyDmg=0;
var health=0;
var damage=0;
var next=false;
var next2=false;
var win = false;


	$("#yourFoe").hide();
	$("#yourChar2").hide();

	$("#yodaChoice").hide();
	$("#kitChoice").hide();
	$("#sithChoice").hide();
	$("#stormChoice").hide();
		$("#vs").hide();
	$("#yodaChoice2").hide();
	$("#kitChoice2").hide();
	$("#sithChoice2").hide();
	$("#stormChoice2").hide();

function characterMain(){
//Yoda Click Events
//===========================================================================
$("#yoda").click(function(e){
	var enemyHp=150;
	var enemyDmg=-12;
	if (mainChar===true && secondpickReady===false){
		return;
	} else if (secondpickReady===true){
			$("#yoda").fadeOut(500);
			$("#yodaText").fadeOut(500);
			$("#yodaChoice2").fadeIn(1000);
			$("#yourFoe").fadeOut(1000);
			$("#yourChar2").fadeIn(1000);

			secondpickReady=false;

			$("#eHp").append(enemyHp);
			$("#eDamage").append(enemyDmg);
			
	}



	else {
		secondpickReady=true;
		mainChar=true;
		$("#yoda").fadeOut(500);
		$("#yodaText").fadeOut(500);
		$("#yourChar").fadeOut(1000);
		$("#yourFoe").fadeIn(2000);
		$("#yodaChoice").fadeIn(200);
		$("#vs").fadeIn(1000);

		
		$("#Hp").append(health+150);
		$("#Damage").append(damage-12);
		
	}
});


//Sith Overlord Click Events
//===========================================================================
$("#sith").click(function(i){
	var enemyHp=180;
	var enemyDmg=-15;
	if (mainChar===true && secondpickReady===false){
		return;
	} else if (secondpickReady===true){
			$("#sith").fadeOut(500);
			$("#sithText").fadeOut(500);

			$("#sithChoice2").fadeIn(1000);
			$("#yourFoe").fadeOut(200);
			secondpickReady=false;
			$("#yourChar2").fadeIn(1000);

			$("#eHp").append(enemyHp);
			$("#eDamage").append(enemyDmg);
	} else {
		secondpickReady=true;
		mainChar=true;
		$("#sith").fadeOut(500);
		$("#sithText").fadeOut(500);

		$("#yourChar").fadeOut(1000);
		$("#yourFoe").fadeIn(2000);
		$("#sithChoice").fadeIn(1000);
		$("#vs").fadeIn(1000);
		
		$("#Hp").append(health+180);
		$("#Damage").append(damage-15);
		
		
	}
});

//Storm Troopers Click Events
//===========================================================================
$("#storm").click(function(i){
	var enemyHp=125;
	var enemyDmg=-7;
		if (mainChar===true && secondpickReady===false){
		return;
	} else if (secondpickReady===true){
			$("#storm").fadeOut(500);
			$("#stormText").fadeOut(500);

			$("#stormChoice2").fadeIn(1000);
			$("#yourFoe").fadeOut(200);
			secondpickReady=false;
			$("#yourChar2").fadeIn(1000);

			$("#eHp").append(enemyHp);
			$("#eDamage").append(enemyDmg);
	
	} else {
		secondpickReady=true;
		mainChar=true;
		$("#storm").fadeOut(500);			
		$("#stormText").fadeOut(500);
		$("#yourChar").fadeOut(1000);
		$("#yourFoe").fadeIn(2000);
		$("#stormChoice").fadeIn(1000);
		$("#vs").fadeIn(1000);

		$("#Hp").append(health+125);
		$("#Damage").append(damage-7);
	}
});

// Kit Fisto Click Events
//===========================================================================
$("#kit").click(function(i){
	var enemyHp=135;
	var enemyDmg=-8;
		if (mainChar===true && secondpickReady===false){
		return;
	} else if (secondpickReady===true){
			$("#kit").fadeOut(500);
			$("#kitText").fadeOut(500);
			$("#kitChoice2").fadeIn(1000);
			$("#yourFoe").fadeOut(200);
			$("#yourChar2").fadeIn(1000);
			secondpickReady=false;

			$("#eHp").append(enemyHp);
			$("#eDamage").append(enemyDmg);
	
	} else {
		secondpickReady=true;
		mainChar=true;
		$("#kit").fadeOut(500);
		$("#kitText").fadeOut(500);
		$("#yourChar").fadeOut(1000);
		$("#yourFoe").fadeIn(2000);
		$("#kitChoice").fadeIn(1000);
		$("#vs").fadeIn(1000);

		$("#Hp").append(health+135);
		$("#Damage").append(damage-8);
	}
});
}

// ========================
   var eachClick= 0;
$("#atk").click(function() {
  var foeHp = parseInt($("#eHp").html());
  var foeDmg = parseInt($("#eDamage").html());
  var mainHp = parseInt($("#Hp").html());
  var mainDmg = parseInt($("#Damage").html());
   eachClick= -6;
  mainCharDmg = (mainDmg + eachClick);
  enemyHp = foeHp + (mainCharDmg +eachClick);
  health = (mainHp + foeDmg);
  console.log("You did " + mainCharDmg + " damage.");
  console.log("The enemy now has " + enemyHp + " HP.");
$("#eHp").html(enemyHp);
$("#Hp").html(health);
$("#Damage").html(mainCharDmg);



	
	
	

	
	if (enemyHp<=0 && next===false){
			$("#eHp").html("");
			$("#eDamage").html("");
		$("#kitChoice2").fadeOut(1000);
		$("#sithChoice2").fadeOut(1000);
		$("#yodaChoice2").fadeOut(1000);
		$("#stormChoice2").fadeOut(1000);
		secondpickReady=true;
		
		next=true;

	}else if(next===true && enemyHp<=0){
			$("#eHp").html("");
			$("#eDamage").html("");
		$("#kitChoice2").fadeOut(1000);
		$("#sithChoice2").fadeOut(1000);
		$("#yodaChoice2").fadeOut(1000);
		$("#stormChoice2").fadeOut(1000);
		secondpickReady=true;
		
		next2=true;
		

	}else if(enemyHp<=0 && next2===true && next===true){
			$("#eHp").html("");
			$("#eDamage").html("");
		$("#kitChoice2").fadeOut(1000);
		$("#sithChoice2").fadeOut(1000);
		$("#yodaChoice2").fadeOut(1000);
		$("#stormChoice2").fadeOut(1000);
		secondpickReady=false;
		alert("You Win!!!");
		next=false;
		next2=false;
		win=true;
		
	}else if (health<=0){
		secondpickReady=false;
		alert("You lose");

	} else{}




});































characterMain();





















};
