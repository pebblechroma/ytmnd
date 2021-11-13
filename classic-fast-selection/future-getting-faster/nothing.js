var flowey = new Howl({
	src: ["audio/nobody.ogg", "audio/nobody.mp3"],
	loop: true,
});

var update_time = new Date();

var percent_time = 0.57686;

var rate = 1;
var rate_timer = percent_time;
var floweys = ["Reaching the stars!", "Ride on the ship follow us!", "Light up the morn to reach up the stars!", "We must believe!", "We MUUUUST!!", "If you’re looking for the 8-bit mysteries...", "You gotta watch over the line of mountain glass...", "Bora, terra, solar riviera!", "Hey!", "Hey! Zemetekile, bring us where we say,", "Astra Makula, the leader is one of a kind.", "Astra, astra, astra, leader is one of a kind.", "The Cumulor will always protect you!", "Whoahohoho! Whoahohohohohohoho!"]

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
