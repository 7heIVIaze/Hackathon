App.onJoinPlayer.Add(function(player) {
    App.showCenterLabel("��ä���� ������")
    App.playSound("ray.mp3", true, false);
})

App.addOnKeyDown(78, function(player){ //n?�� ?��르면 ?���? 꺼짐
	App.stopSound();
});

App.addOnKeyDown(79, function(player){ //o?�� ?��르면 ?���? 켜짐
	App.playSound("ray.mp3", true, false);
});