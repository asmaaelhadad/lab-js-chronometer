class Chronometer {
  constructor() {
 this.currentTime = 0;
 this.intervalId= null;
  }

  start(printTimeCallback) {
   this.intervalId=  setInterval ( ()=>  {
        this.currentTime += 1 ;
     if (   printTimeCallback){ printTimeCallback();}

     }, 1000) ;
         }

  getMinutes() { 
    
  
    return Math.floor(this.currentTime /60)  ;      
  }

  getSeconds() {

         let x =  (this.currentTime % 60);
    return x ;
     
  }

  computeTwoDigitNumber(value) {

    if (value===0){return '00';}
         else if (value <10) {
             return `0${value}` ;}
                  else { return value.toString() ;}

         }

  stop() {
    
    clearInterval(this.intervalId);

  }

  reset() {
    clearInterval(this.currentTime);
 this.currentTime = 0 ;
  }

  split() {
   let minutes= this.computeTwoDigitNumber(this.getMinutes());
   let seconds= this.computeTwoDigitNumber(this.getSeconds()) ;
   return `${minutes}:${seconds}` ;
  }
}
