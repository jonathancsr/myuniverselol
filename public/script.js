

window.onload = function(){
	//Constantes que armazenam o código de cada seta do teclado
	var SPACE = 32; LEFT = 37, UP = 38, RIGHT = 39, DOWN = 40; 

	var cnv = document.getElementById("canvas");

	var	ctx = cnv.getContext("2d");
	var spriteSheet = new Image();
	spriteSheet.src = "../src/componentes/WorldQcharacter/static/character.PNG";
	var zezim = Sprite(spriteSheet);
	var maxWidth = cnv.width-zezim.width;
	var minWidth = 0;
	var floorHeight = 0;
	var time = 0;



	window.addEventListener("keydown",keydownHandler,false);
	window.addEventListener("keyup",keyupHandler,false);
	
	function keydownHandler(e){
		switch(e.keyCode){
			case RIGHT:
				zezim.mvRight = true;
				zezim.mvLeft = false;
				zezim.mvUp = false;
				zezim.mvDown = false;
				break;
			case LEFT:
				zezim.mvRight = false;
				zezim.mvLeft = true;
				zezim.mvUp = false;
				zezim.mvDown = false;
			
				break;
			case UP:
				zezim.mvRight = false;
				zezim.mvLeft = false;
				zezim.mvUp = true;
				zezim.mvDown = false;
				break;
			case DOWN:
				zezim.mvRight = false;
				zezim.mvLeft = false;
				zezim.mvUp = false;
				zezim.mvDown = true;
				break;
			case SPACE:
				zezim.jump = true;
				break;

		}

	}

	function keyupHandler(e){
		switch(e.keyCode){
			case RIGHT:
				zezim.mvRight = false;
				break;
			case LEFT:
				zezim.mvLeft = false;
				break;
			case UP:
				zezim.mvUp = false;
				break;
			case DOWN:
				zezim.mvDown = false;
				break;
			case SPACE:
				zezim.jump = false;
				break;
		}
	}
	
	//Quano a imagem é carregada, o programa é iniciado
	spriteSheet.onload = function(){
		init();
		zezim.posX = 0*(cnv.width-zezim.width)/2; // personagem nasce no meio da tela
		zezim.posY = cnv.height-zezim.height;
	}

	function init(){
		loop();
	}

	function update(){

		zezim.move(minWidth,maxWidth,time,floorHeight);	
		
		
	}

	function draw(){
		ctx.clearRect(0,0,cnv.width,cnv.height);

		zezim.draw(ctx);

	}

	function loop(){
		window,requestAnimationFrame(loop,cnv);
		time += 1;
		update();
		draw();
	}
}

