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



