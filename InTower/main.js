App.onJoinPlayer.Add((player)=> {
    player.playSoundLink("https://classical-sound.up.seesaa.net/image/020-Corelli-La-Follia.mp3", true);
})

App.addOnKeyDown(79, function(player){ //o을 누르면 소리 켜짐
    player.playSoundLink("https://classical-sound.up.seesaa.net/image/020-Corelli-La-Follia.mp3", true);
 });