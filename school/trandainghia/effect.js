window.onload = function(){
	var p = document.getElementById("pP");
	var chu_vi = p.innerHTML;
	var duong_kinh = Math.floor(chu_vi/3.14);
	var d = document.getElementById("dD");
	d.innerHTML = duong_kinh;
	var gt = document.getElementById("money");
	var gtr = document.getElementById("gt");
	var gtien = gt.innerHTML;
	var gtt = Math.floor(gtien*0.9);
	gtr.innerHTML = gtt;
}
