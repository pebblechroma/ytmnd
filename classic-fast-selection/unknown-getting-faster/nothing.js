var flowey = new Howl({
	src: ["audio/nobody.ogg", "audio/nobody.wav"],
	loop: true,
});

var update_time = new Date();

var percent_time = 0.57686;

var rate = 1;
var rate_timer = percent_time;
var floweys = ["Hello, Yaasir. I am your A.I.", "Do you want to stay away from Amy?", "I don't serve criminals.", "Or you can get a mysterious album just for free?", "Reaching the stars...", "Hey! Zemetekile, bring us where we say", "Astra Makula, the leader is one of a kind", "A grub! 10/46", "sdfasdklfgsdfgsgoinrfoenlvbd", "I have granted kids to hell.", "You can be sweet, Spamton. But you can't be a psycho.", "Gimme Equality!", "Gimme Rewards!", "I HAVE BEEN BOTHERED OLA", "That door is opening once again, but this time it's opening for you.", "You are about to discover what lies beyond the fifth dimension, beyond the deepest darkest corner of your imagination, in the Tower of Terror.", "J'explose!", "Left speaker check, right speaker check, ASMRoom by TTR.", "Do you want to pay 5000 geo with only 1 geo?"]

function update() {

	var divwidth = document.getElementById('flowey_shaking').offsetWidth;
	var divheight = document.getElementById('flowey_shaking').offsetHeight;

	var new_time = new Date();
	var delta = new_time.getTime() - update_time.getTime();
	update_time.setTime(new_time.getTime());

	rate_timer -= rate * delta / 1000;

	if (rate_timer <= 0) {
		rate_timer += percent_time;
		rate += 0.01;
		flowey.rate(rate);
		document.getElementById("speed").innerHTML = "speed: " + (rate * 100).toFixed(0) + "%";
	}
	if (rate <= 10) {
		document.getElementById("flowey").style.display = "none";
		document.getElementById("flowey").style.top = ((rate - Math.random() * rate * 2)+((divheight-500)/2)) + "px";
		document.getElementById("flowey").style.left = ((rate - Math.random() * rate * 2)+((divwidth-500)/2)) + "px";
		requestAnimationFrame(update);
	} else { 
		document.getElementById("flowey").style.display = "block";
		document.title = randomChoice(floweys);
		document.getElementById("flowey").style.top = ((rate - Math.random() * rate * 2)+((divheight-500)/2)) + "px";
		document.getElementById("flowey").style.left = ((rate - Math.random() * rate * 2)+((divwidth-500)/2)) + "px";
		requestAnimationFrame(update);
	}
}

function randomChoice(arr) {
    return arr[Math.floor(arr.length * Math.random())];
}

function run() {
	flowey.play();
	update_time = new Date();
	requestAnimationFrame(update);
}
