
const express = require('express');
const router = express.Router();



// router.get('/get-query-1',function(req,res){
//     let data = req.query
//     console.log(data)
//     res.send({data:data,status:true})
// })

// let arr=[1,2,3,4,5,6,7,8]
// router.get('/get-query-2',function(req,res){
//     let input=req.query.input
//     let finalArr=[]
//     for(i=0;i<=arr.length;i++){
//         if(input<arr[i]){
//             return finalArr.push(arr[i])
//             //res.send(data:finalArr,status:true)
//         }
//         //res.send({data:finalArr,status:true})
//     }
//     res.send({data:finalArr,status:true})
// })





let persons = [
    {
        name: "PK",
        age: 10,
        votingStatus: false
    },
    {
        name: "SK",
        age: 20,
        votingStatus: false
    },
    {
        name: "AA",
        age: 70,
        votingStatus: false
    },
    {
        name: "SC",
        age: 5,
        votingStatus: false
    },
    {
        name: "HO",
        age: 40,
        votingStatus: false
    }
]

router.post("/election", function (req, res) {
    let votingAge = req.query.votingAge

    let arr=[];
    for (let i = 0; i < persons.length; i++) {

        if (persons[i].age > votingAge) {
        
            persons[i].votingStatus = true
            arr.push(persons[i])
        }
    }
if (arr.length>0)
{
    return res.send(arr)
}
else{
    return res.send("no member found above this age")
}

})



module.exports = router;


