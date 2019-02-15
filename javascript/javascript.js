var audio, playbtn = [], audio_playing;
var audio_clips = ["audio/Bacchus_clip.mp3", "audio/Nomad_clip.mp3", "audio/Reset_My_Year_clip.mp3", "audio/Thin_White_Duke_clip.mp3"];

function initAudioPlayer(){
	audio = new Audio();
	audio_playing = 0;

	// set object references
	playbtn[0] = document.getElementById("bacchusplaybtn");
	playbtn[1] = document.getElementById("nomadplaybtn");
	playbtn[2] = document.getElementById("reset_my_yearplaybtn");
	playbtn[3] = document.getElementById("thin_white_dukeplaybtn");
	
	// Add Event Handling.  Note: Cannot use a for loop as function playPause stored as text
	playbtn[0].addEventListener("click", function() {playPause(0);});
	playbtn[1].addEventListener("click", function() {playPause(1);});
	playbtn[2].addEventListener("click", function() {playPause(2);});
	playbtn[3].addEventListener("click", function() {playPause(3);});
		
	audio.addEventListener("ended",reset_playbtns);

	// Functions
	function playPause(buttonid) 
	{
		// if no audio playing play the track	
		if(audio_playing == 0) 
			{
			audio.src = audio_clips[buttonid]; 
			audio.play();
			playbtn[buttonid].style.background = "url(img/button_black_stop.png) no-repeat";
			audio_playing = buttonid+1;
			}
		// if audio playing and the same button is pressed again, then stop the track	
		else if(audio_playing == buttonid+1)
			{
			audio.pause();
			audio.currentTime = 0
			playbtn[buttonid].style.background = "url(img/button_grey_play.png) no-repeat";
			audio_playing = 0;
			}
	}

	

	// if end of audio file detected, reset all playbtns to default
	function reset_playbtns () 
	{
		var i;
		for ( i = 0; i < audio_clips.length; i++ )
			{
			playbtn[i].style.background = "url(img/button_grey_play.png) no-repeat";
			} 
		audio_playing = 0;
	}

}
window.addEventListener("load", initAudioPlayer);