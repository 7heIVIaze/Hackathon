App.onJoinPlayer.Add((player)=>{
    App.showCenterLabel(`???`);
    App.cameraEffect = 1; // 1 = 비네팅 효과
    App.cameraEffectParam1 = 300; // 비네팅 효과의 범위를 300으로 지정
    App.sendUpdated();
})