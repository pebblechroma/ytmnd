var sans = new Howl({
	src: ["audio/sans..ogg"],
	loop: true,
});

var update_time = new Date();

var percent_time = 0.57686;

bottomcount = 0
sansrot = 0
sansmod = Math.round(Math.random() * 4)

var rate = 1;
var rate_timer = percent_time;
function update() {

	var divwidth = document.getElementById('rumbling_sans').offsetWidth;
	var divheight = document.getElementById('rumbling_sans').offsetHeight;

	var new_time = new Date();
	var delta = new_time.getTime() - update_time.getTime();
	update_time.setTime(new_time.getTime());

	rate_timer -= rate * 25 / (delta / (rate * 5));

	if (rate_timer <= 0) {
		rate_timer += percent_time;
		rate -= (0.0001 * rate);
		if (rate <= 0.0001) {
			rate = 0.0001
		}		
		sans.rate(rate);
		document.getElementById("speed").innerHTML = "speed: " + (rate * 100).toFixed(2) + "%";
	}
	//transform:rotate(25deg)
	document.getElementById("sans").style.transform = "rotate("+sansrot+"deg)";
	document.getElementById("sans").style.top = ((rate - Math.random() * rate * 2)+((divheight-500)/2)) + "px";
	document.getElementById("sans").style.left = ((rate - Math.random() * rate * 2)+((divwidth-500)/2)) + "px";
	sansrot = sansrot + ((Math.round(Math.random()) * 4 - sansmod) * rate)
	if (rate <= 0.9 && rate > 0.85) {
		document.title = "Now playing: Coconut... FM!"
	}
	if (rate <= 0.85 && rate > 0.8) {
		document.title = "Now uhhh...playing: Coconut FM?"
	}
	if (rate <= 0.8 && rate > 0.75) {
		document.title = "Coconut..."
	}
	if (rate <= 0.75 && rate > 0.7) {
		document.title = "FM..."
	}
	if (rate <= 0.7 && rate > 0.65) {
		document.title = "Hmmmm, this song is getting slower..."
	}
	if (rate <= 0.65 && rate > 0.6) {
		document.title = "Crazy Barks? Do you need help repairing this Coconut Radio?"
	}
	if (rate <= 0.6 && rate > 0.55) {
		document.title = "CRAZYBARKSDOESNTKNOWHOWTOFIXTHIS!"
	}
	if (rate <= 0.55 && rate > 0.5) {
		document.title = "(sighs)... That coconut radio has got to go."
	}
	if (rate <= 0.50) {
		document.title = "Right, Photomass?"
	}
	if (rate <= 0.10) {
		document.title = 'Do you ever feel like a misfit? Everything inside you is dark and twiste'
		bottomcount++
		if (bottomcount => 100) {
			window.location.replace("https://i.guim.co.uk/img/media/292430d0b19f6ccfe4dd4669f48376bcf14dcfb9/0_936_4480_2688/master/4480.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=7448b35d2c087f0296921be29ae7869d");
		}	
	}
	requestAnimationFrame(update);
	
}

function run() {
	sans.play();
	update_time = new Date();
	requestAnimationFrame(update);
}
