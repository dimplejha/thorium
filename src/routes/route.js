
const express = require('express');
//const lodash = require('lodash')
const router = express.Router();



router.get('/students/:name', function(req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})

router.get('/movies',function(req,res){
    res.send('["fuckery","delhi6","rockstar","dabang","suryawansh"]')
});








router.get('/movies/:movieId',function(req,res){
    mov=["fuckrey","delhi","dabang","rockstar","suryawansh"]
let value=req.params.movieId;
if(value>mov.length-1){
    res.send('"doesnt exit')
}else{
    req.send(mov[value])
}
})










router.get('/moviez',function(req,res){
    res.send([{id:1,name:'the shining'},{id:2,name:'incendies'},{id:3,name:'3 idiotd'},{id:4,name:'shersha'}])
});



router.get('/films/:filmId',function(req,res){
    let movi=[{id:1,name:'the shining'},{id:2,name:'incendies'},{id:3,name:'3 idiotd'},
    let value=req.params.filmId;
    let found=false;
    for(i=0;i<movi.length;i++){
        found=trueres.send(movie[i])
        break
    }
}if(found==false){
    res.send('"movie name doesnt exit"')
});




module.exports = router;


