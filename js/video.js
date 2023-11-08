var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

	//Page load - initialize the video element, turn off autoplay & looping
	video = document.querySelector("#player1")
	video.autoplay = false;
	video.pause();
	video.loop = false;
	video.volume = document.querySelector("#slider").value / 100;

	//Play the video, update the volume information
	document.querySelector("#play").addEventListener("click", function() {
		console.log("Play Video");
		video.play();
		document.querySelector("#volume").textContent = (video.volume * 100) + "%";
	});
	
	
	//Pause the video
	document.querySelector("#pause").addEventListener("click", function() {
		console.log("Pause video");
		video.pause();
	});

	//Slow down
	document.querySelector("#slower").addEventListener("click", function() {
		video.playbackRate *= 0.9;
		console.log("Video speed", video.playbackRate);
	})

	//Speed up
	document.querySelector("#faster").addEventListener("click", function() {
		video.playbackRate *= 1.11111;
		console.log("Video speed", video.playbackRate);
	})

	//Skip ahead
	document.querySelector("#skip").addEventListener("click", function() {
		if (video.currentTime + 10 < video.duration) {
			video.currentTime += 10;
		}
		else {
			video.currentTime = 0;
		}
		console.log("Current time", video.currentTime)
	})

	//Mute
	document.querySelector("#mute").addEventListener("click", function() {
		if (video.muted) {
			video.muted = false;
			document.querySelector("#mute").textContent = "Mute"
		}
		else {
			video.muted = true;
			document.querySelector("#mute").textContent = "Unmute"
		}
	})

	//Volume slider
	document.querySelector("#slider").addEventListener("input", function() {
		video.volume = this.value / 100;
		document.querySelector("#volume").textContent = this.value + "%";
	})

	//Styling
	document.querySelector("#vintage").addEventListener("click", function() {
		video.classList.add("oldSchool");
	})

	document.querySelector("#orig").addEventListener("click", function() {
		video.classList.remove("oldSchool");
	})
});





