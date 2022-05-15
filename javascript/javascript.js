var audio, playbtn = [], audio_playing;
var audio_clips = ["audio/Bacchus_clip.mp3", "audio/Nomad_clip.mp3", "audio/Reset_My_Year_clip.mp3", "audio/Thin_White_Duke_clip.mp3", 
"audio/Special_Influencer_clip.mp3", "audio/Pixel_Perfect_Surgery_clip.mp3","audio/Sci_Fi_Future_clip.mp3","audio/Long_Way_Home.mp3",
"audio/See_The_Light.mp3","audio/Patches_Of_Sunshine.mp3","audio/Young_At_Heart.mp3"];

function initAudioPlayer(){
	audio = new Audio();
	audio_playing = 0;

	// set object references
	playbtn[0] = document.getElementById("bacchusplaybtn");
	playbtn[1] = document.getElementById("nomadplaybtn");
	playbtn[2] = document.getElementById("reset_my_yearplaybtn");
	playbtn[3] = document.getElementById("thin_white_dukeplaybtn");
	playbtn[4] = document.getElementById("special_influencerplaybtn");
	playbtn[5] = document.getElementById("pixel_perfect_playbtn");
	playbtn[6] = document.getElementById("sci_fi_future_playbtn");
	playbtn[7] = document.getElementById("long_way_homeplaybtn");
	playbtn[8] = document.getElementById("see_the_lightplaybtn");
	playbtn[9] = document.getElementById("patches_of_sunshineplaybtn");
	playbtn[10] = document.getElementById("young_at_heartplaybtn");
	
	// Add Event Handling.  Note: Cannot use a for loop as function playPause stored as text
	playbtn[0].addEventListener("click", function() {playPause(0);});
	playbtn[1].addEventListener("click", function() {playPause(1);});
	playbtn[2].addEventListener("click", function() {playPause(2);});
	playbtn[3].addEventListener("click", function() {playPause(3);});
	playbtn[4].addEventListener("click", function() {playPause(4);});
	playbtn[5].addEventListener("click", function() {playPause(5);});
	playbtn[6].addEventListener("click", function() {playPause(6);});
	playbtn[7].addEventListener("click", function() {playPause(7);});
	playbtn[8].addEventListener("click", function() {playPause(8);});
	playbtn[9].addEventListener("click", function() {playPause(9);});
	playbtn[10].addEventListener("click", function() {playPause(10);});
		
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