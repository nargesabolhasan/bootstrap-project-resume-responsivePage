class Jack{
    breakfast=new Date("2022 1 1 7:00:00 am")
    lunch=new Date("2022 1 1 12:00:00 pm")
    dinner=new Date("2022 1 1 7:00:00 pm")
    nextEat(input){
        var ans =0  
        var mi=input.getHours()*60+input.getMinutes()
        var mb= this.breakfast.getHours()*60+this.breakfast.getMinutes()
        var ml= this.lunch.getHours()*60+this.lunch.getMinutes()
        var md= this.dinner.getHours()*60+this.dinner.getMinutes()
        if (input.getHours>7 || input.getHours()<12){
            ans=ml-mi
        }else if(input.getHours()>12||input.getHours()<19){
            ans=md-mi
        }else{
            ans=mb-mi
        }
        this.secondsToHms(ans)   
    }
    secondsToHms(d) {
        d = Number(d);
        var h = Math.floor(d % 360 / 60);
        var m = Math.floor(d % 360 % 60);
        const ansarr=[]
        ansarr.push(h,m)
       console.log(ansarr) ; 
    }
}
let myobj=new Jack()
let obj=new Date("2022 1 1 2:00:00 pm")
let obj2=new Date("2022 1 1 5:50:00 pm")
myobj.nextEat(obj2)
myobj.nextEat(obj)
