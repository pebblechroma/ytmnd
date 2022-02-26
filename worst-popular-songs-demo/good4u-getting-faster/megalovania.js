var sansArr = ["Wait a minute...","I understand now.","B-Beep?","And JUST when I was having fun for once!","Urgh... seems like he caught on...","You're just another one of those scumbags who just want to take everything away from me, isn't that it?","I know who your father is, I know what you two are going to do to me!","I swear... it's really not like that!","He'll come and get me, I know it. You're just here as his scrawny placeholder. What a coward!","Boop... Bah!","Ah damn it...! Always the third song, is this a curse?","Enough of your nonsense! If this planet's being taken...","I'D RATHER HAVE IT DIE OVER WITH ME!","and I'm dragging you two with me.",""]
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
