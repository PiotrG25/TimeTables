$(function(){
	function Line(x1, y1, x2, y2){
		var svg = $("svg");
		var line = $('<line x1="'+ x1 +'" y1="'+ y1 +'" x2="'+ x2 +'" y2="'+ y2 +'"/>');		
		svg.append(line);
	}

	function pLine(P1, P2){
		Line(P1.x, P1.y, P2.x, P2.y);
	}

	function P(x, y){
		this.x = x;
		this.y = y;
	}
	
	var S = new P(250, 250);
	
});
