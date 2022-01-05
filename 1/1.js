timeToEat=(str)=>{
  const breakFast=7*60
  const lunch=12*60
  const dinner=19*60
  const arrnum=[]
 str.split("").map(input=>{
    if(!(isNaN(input))){
        arrnum.push(input)  
        }
    })
    var hourInput =Number(arrnum[0]+arrnum[1])
    if(str.charAt(6)==="p"){
        hourInput+=12
    } 
    const minInput=hourInput*60 + Number(arrnum[2]+arrnum[3])
    var answer=0
    if (minInput>breakFast &&  minInput<lunch){
         answer=lunch-minInput
      }else if(minInput>lunch && minInput<dinner){
         answer=dinner-minInput
        }else{
         answer=breakFast-minInput
        }
            var h = Math.floor(answer % 360 / 60);
            var m = Math.floor(answer % 360 % 60);
            const ansarr=[]
            ansarr.push(h,m)
           console.log(ansarr) ; 
}

timeToEat("05:50 pm")
timeToEat("02:00 pm")




