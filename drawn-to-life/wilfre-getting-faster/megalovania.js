var sansArr = ["I'm here for The Book of Life.","I admit, you've done well... but it's only thanks to Photomass.","This village fell apart under your watch.","And it will fall apart under your daughter...","That won't be necessary... I'll take The Book of Life...","and this village will fade away on it's own...","Such a sweet wittle Rapo... She can't stop me.","The Book of Life is finally mine...",""]
var sans = new Howl({
	src: ["audio/megalovania.ogg"],
	loop: true,
});
var update_time = new Date();
var percent_time = 0.57686;
var rate = 1;
var rate_timer = percent_time;
var currIndex = -1;
var rateUntilActivation = 15;
var rateIncreaseBeforeNextLineOfDialogue = 5;
function update() {
	var divwidth = document.getElementById('rumbling_sans').offsetWidth;
	var divheight = document.getElementById('rumbling_sans').offsetHeight;
	var new_time = new Date();
	var delta = new_time.getTime() - update_time.getTime();
	update_time.setTime(new_time.getTime());
	rate_timer -= rate * delta / 1000;
	if (rate_timer <= 0) {
		rate_timer += percent_time;
		rate += 0.01;
		sans.rate(rate);
		document.getElementById("speed").innerHTML = "speed: " + (rate * 100).toFixed(0) + "%";
	}
	if(rate > rateUntilActivation){
	  currIndex = Math.floor((rate-rateUntilActivation)/rateIncreaseBeforeNextLineOfDialogue)
	  if(currIndex != -1 && currIndex < sansArr.length){
	      document.title = sansArr[currIndex];
	  }
	}
	document.getElementById("sans").style.top = ((rate - Math.random() * rate * 2)+((divheight-500)/2)) + "px";
	document.getElementById("sans").style.left = ((rate - Math.random() * rate * 2)+((divwidth-500)/2)) + "px";
	requestAnimationFrame(update);
}
function run() {
	sans.play();
	update_time = new Date();
	requestAnimationFrame(update);
}
