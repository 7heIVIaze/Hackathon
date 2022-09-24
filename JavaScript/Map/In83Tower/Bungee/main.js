let timer = 0;
let _height = 0;
let updateTime = 2; // 프레임 업데이트 시간
let _gravity = 4.9; 
let timerForCalculate = 0;

App.onJoinPlayer.Add((player)=> {
    _player = player;
})


let flagDownWard = true;
let flagUpWard = false;


App.addOnKeyDown(88, function (player) {
   player.spawnAtMap("19PXZX", "8JMW9Q");
})

App.onUpdate.Add(function(dt){
   timer += dt;
   timerForCalculate += dt;
   if(timer>=0.5){
      if(flagDownWard){ 
            let next = square(timerForCalculate);
            
            _height = _gravity * next;

            if(_height > 92){
               flagDownWard = false;
               flagUpWard = true;
               timerForCalculate = 0;
            }
            else{
               _player.spawnAt(14, _height, 4);
            }
            timer = 0;
      } 

      else if(flagUpWard){
         let next = square(timerForCalculate);
            
         _height = _gravity * next;

         if(_height  > 92){
            flagDownWard = false;
            flagUpWard = false;
            let style =   "display: inline-block; text-align: center; width:1.2em; height:1.2em; line-height: 1.2em; color: black; background-color: white; font-size: 1.2em; border-radius:3px";
            
            _player.showCustomLabel(
               `수고하셨습니다! <span style="${style}">X</span>  버튼을 눌러 나가실 수 있습니다.`,
               0xffffff, // 흰색글씨
               0, // 검은색 배경
               300, // 오프셋 300
               20, // 너비 20%
               1 // 투명도 1 -> 불투명
            );
         }
         else{
            _player.spawnAt(14, 92 - _height, 4);
         }
      }
   }         
})

function square(a) {
    let result = a * a;
    return result;
}