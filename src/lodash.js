



const lodash=require("lodash")
let arr=['jan','feb','mar','arp']
let chk=lodash.chunk(arr,4)
console.log(chk)


let arr2=[1,3,5,7,9,11,13,15,17,19]
let last=lodash.tail(arr2)
console.log(last)



const lodash1=require("lodash")
let arr3=[8,9,6,4]
let arr4=[8,5,3]
let arr5=[6,5,3]
let arr6=[9,2,6,7]
let arr7=[6,4]
const lod=lodash1.union(arr3,arr4,arr5,arr6,arr7)
console.log(lod)



const lodash2=require('lodash')
let pairs=[["horror","the shining"],['dream', 'titanic'],['thriller', "shuter island"],['fantacy', 'pans labyrith']]
let ob=lodash2.fromPairs(pairs)
console.log(ob)


module.exports.chunk=chk
module.exports.tail=last
module.exports.lod=lod
module.exports.pairs=ob
