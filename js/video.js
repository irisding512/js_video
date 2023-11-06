var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

	//Page load - initialize the video element, turn off autoplay & looping
	video = document.querySelector("#player1")
	video.autoplay = false;
	video.pause();
	video.loop = false;
	video.volume = document.querySelector("#slider").value / 100;

	document.querySelector("#play").addEventListener("click", function() {
		console.log("Play Video");
		video.play();
	});
});





