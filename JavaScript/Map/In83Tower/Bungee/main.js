let _gravity = 4.9; // apply the rule of free fall velocity
// 1/(2) * 9.8
let _stateTimer = 0;
let _time = 0;
let _height = 0;
var _player;

App.onJoinPlayer.Add((player)=> {
    _player = player;
})

App.onUpdate.Add((dt)=> {
    _stateTimer += dt;
    let next = square(_stateTimer);
    _height = _gravity * next;

    if(_height >= 92) _player.spawnAt(14, 92, 4);
    _player.spawnAt(14, _height, 4);

})

function square(a) {
    let result = a * a;
    return result;
}