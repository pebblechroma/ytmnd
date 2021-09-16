var sansArr = ["Oh, hi! Welcome to my classroom.","Today, we're going to learn about: Vivosaurs!","Vivosaurs are creatures that are revived from the fossils of prehistoric animals.","Because the fossils are influenced over time by their environments, many vivosaurs have powers and physical features that their animal counterparts did not originally have.","Once revived, vivosaurs can take the form of Dino Medals, small, portable objects that can easily be carried and stored.","Vivosaurs are primarily used by people who battle using Dino Medals, known as Fossil Fighters, to compete in Fossil Battles, although some act as companions or even as modes of transportation.","DISCLAIMER: All of the information about Vivosaurs are all credited to the Fossil Fighters Wiki.",""]
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
