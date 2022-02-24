let player=[];
ReadableStreamDefaultController.post('/players',function(req,res){
    let player=req.body
    let playerName=player.name
    for(let i=0;i<players.length;i++){
        
        if(player[i].name==playerName){
            res.send("player already exit")
        }
    }
    player.push(player)
});



router.post('/players/:playerName/bookings/:bookingId',function(req,res){
    let name=req.params.playerName
    let bookingId=req.params.bookingId
    let isPlayerPresent=false
    for(let i=0;i<players.length;i++){
        if(players[i].name==name){
            isPlayerPresent=true
        }
        if(!isPlayerPresent){
            return res.send('player not present')
        }
    }
    let bookings=req.body;
    for(let i=0;i<players.length;i++){
        if(players[i].name==name){
            for(let j=0;j<players[i].bookings.length;j++){
                if(players[i].bookings[j].bookingName==bookingId{
                    return res.send('booking with the id alredy present')
                }
                player[i].bookings.push(booking)
            }
        }
    }

})
    