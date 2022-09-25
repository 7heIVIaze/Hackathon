App.onJoinPlayer.Add(function(player) {
    App.showCenterLabel("국채보상 기념공원")
    App.playSound("ray.mp3", true, false);
})

App.addOnKeyDown(78, function(player){ //n?쓣 ?늻瑜대㈃ ?냼由? 爰쇱쭚
	App.stopSound();
});

App.addOnKeyDown(79, function(player){ //o?쓣 ?늻瑜대㈃ ?냼由? 耳쒖쭚
	App.playSound("ray.mp3", true, false);
});