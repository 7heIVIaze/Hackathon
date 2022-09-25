App.onJoinPlayer.Add(function(player) {
    App.showCenterLabel("±¹Ã¤º¸»ó ±â³ä°ø¿ø")
    App.playSound("ray.mp3", true, false);
})

App.addOnKeyDown(78, function(player){ //n?„ ?ˆ„ë¥´ë©´ ?†Œë¦? êº¼ì§
	App.stopSound();
});

App.addOnKeyDown(79, function(player){ //o?„ ?ˆ„ë¥´ë©´ ?†Œë¦? ì¼œì§
	App.playSound("ray.mp3", true, false);
});