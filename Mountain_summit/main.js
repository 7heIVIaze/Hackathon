//플레이어가 입장할 때 실행
App.onJoinPlayer.Add(function (player) {
	App.playSound("Sailing - Telecasted.mp3", false, false);
});

App.addOnKeyDown(78, function(player){ //n을 누르면 소리 꺼짐
	App.stopSound();
});

App.addOnKeyDown(79, function(player){ //o을 누르면 소리 켜짐
	App.playSound("Sailing - Telecasted.mp3", false, false);
});