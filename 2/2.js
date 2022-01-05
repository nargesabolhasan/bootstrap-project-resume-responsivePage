const stackCalculator = (str) => {
    if (str===""){
        return 0
    }else{
    var numStack=[]
    var opStack=[]

    const arr=str.split("")
   arr.map(input=>{
       if (!(isNaN(input))){
        numStack.push(Number(input))
       }else{
        opStack.push(input)
       }
    })
