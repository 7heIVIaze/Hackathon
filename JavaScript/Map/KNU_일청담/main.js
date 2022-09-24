App.onJoinPlayer.Add(function(player) {
    App.showCenterLabel(`경북대학교 일청담`);
    App.playSound("Rumor.mp3", true, false);
})

App.addOnKeyDown(78, function(player){ //n을 누르면 소리 꺼짐
	App.stopSound();
});

App.addOnKeyDown(79, function(player){ //o을 누르면 소리 켜짐
	App.playSound("Rumor.mp3", true, false);
});
