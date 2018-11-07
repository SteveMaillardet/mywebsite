var audio_bacchus, playbtn_bacchus, audio_bacchus, playbtn_bacchus, bacchus_audio_playing = false, nomad_audio_playing = false;
function initAudioPlayer(){
	audio_bacchus = new Audio();
	audio_bacchus.src = "audio/Bacchus_clip.mp3";
	audio_nomad = new Audio();
	audio_nomad.src = "audio/Nomad_clip.mp3";
	// set object references
	playbtn_bacchus = document.getElementById("bacchusplaybtn");
	playbtn_nomad = document.getElementById("nomadplaybtn");
	// Add Event Handling
	playbtn_bacchus.addEventListener("click",playPause_bacchus);
	playbtn_nomad.addEventListener("click",playPause_nomad);
	audio_bacchus.addEventListener("ended",reset_playbtns);
	audio_nomad.addEventListener("ended",reset_playbtns);

	// Functions
	function playPause_bacchus () {
		// if another audio file already playing, don't play
		if(nomad_audio_playing)
			return;
		// Play or Stop Bacchus Audio file
		if(!bacchus_audio_playing) {
			audio_bacchus.play();
			playbtn_bacchus.style.background = "url(img/button_black_stop.png) no-repeat";
			}
		else {
			audio_bacchus.pause();
			audio_bacchus.currentTime = 0
			playbtn_bacchus.style.background = "url(img/button_grey_play.png) no-repeat";
			}
		bacchus_audio_playing = !bacchus_audio_playing;
	}

	function playPause_nomad () {
		// If another audio file already playing, don't play
		if(bacchus_audio_playing)
			return;
		// Play or Stop Nomad Audio file
		if(!nomad_audio_playing) {
			audio_nomad.play();
			playbtn_nomad.style.background = "url(img/button_black_stop.png) no-repeat";
			}
		else {
			audio_nomad.pause();
			audio_nomad.currentTime = 0
			playbtn_nomad.style.background = "url(img/button_grey_play.png) no-repeat";
			}
		nomad_audio_playing = !nomad_audio_playing;
	}

	// if end of audio file detected, reset all playbtns to default
	function reset_playbtns () {
		playbtn_bacchus.style.background = "url(img/button_grey_play.png) no-repeat"; 
		playbtn_nomad.style.background = "url(img/button_grey_play.png) no-repeat"
		bacchus_audio_playing = false;
		nomad_audio_playing = false;
	}

}
window.addEventListener("load", initAudioPlayer);