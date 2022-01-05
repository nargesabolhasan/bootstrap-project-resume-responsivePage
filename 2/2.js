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
    opStack.map(op=>{
        switch(op){
          case "+":sumFun(numStack.pop(),numStack.pop());
              break;
          case"-":subFun(numStack.pop(),numStack.pop());;
              break;
          case "*":mulFun(numStack.pop(),numStack.pop());
              break;
          case "/":divFun(numStack.pop(),numStack.pop());
              break;
          // case "D":dubFun(numStack.pop(),numStack.pop(),op)
          }
          function sumFun(a,b){
            let ans=a+b
            numStack.push(ans)
        }
        function subFun(a,b){
            let ans=a-b
            numStack.push(ans)
            }
        function mulFun(a,b){
            let ans=a*b
            numStack.push(ans)
        }    
        function divFun(a,b){
            let ans=a/b
            numStack.push(ans)
            }
        // function dubFun(a,b){
        //     for(let i=0 ; i <opStack.lenght;i++,op){
        //        if(op===opStack[i]){
        //         opStack[i+1]
        //        }
        //     }
        //     numStack.push(ans)
        //     }        
    