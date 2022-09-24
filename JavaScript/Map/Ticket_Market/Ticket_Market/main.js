App.onJoinPlayer.Add(function(player) {
    App.showCenterLabel(`매표소`);
})


let blueman = App.loadSpritesheet("CableCar-removebg-preview.png");
// q 키를 누르면 동작하는 함수

	let timer = 0;
	let distance = 10;//변위
	let updateTime = 2; // 프레임 업데이트 시간
	App.onUpdate.Add(function(dt){
		timer += dt;
		if(timer>=updateTime){ // update시간마다 프레임이 업데이트됨 
			if(distance-->=0){  //변위가 0이 되면 else문으로 다시 처음위치로 돌아감
				Map.clearAllObjects(); //전프레임 지우고 아래 구문으로 재설치
				Map.putObject(0 + distance, 15, blueman, {overlap: true}); // 오브젝트1 x좌표, y좌표, 오브젝트, 성질
				Map.putObject(10 + distance, 15, blueman, {overlap: true}); // 오브젝트2 x좌표, y좌표, 오브젝트, 성질
				Map.putObject(20 + distance, 15, blueman, {overlap: true}); // 오브젝트3 x좌표, y좌표, 오브젝트, 성질
				Map.putObject(30 + distance, 15, blueman, {overlap: true}); // 오브젝트4 x좌표, y좌표, 오브젝트, 성질
			}
			else{
				distance = 10;//다시 맞춰주시면 됨
			}
			timer = 0;
		}	
	})