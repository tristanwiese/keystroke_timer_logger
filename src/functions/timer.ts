import { time } from "console";


export default class Timer{

    timer:number = 0.0;
    timerState: boolean = false;
    updateState: ()=>void;

    constructor(updateState: ()=>void){
        this.updateState = updateState
    }

    start(){
        if(!this.timerState){
            console.log('start');
            this.timerState = true;
            this.updateTime()
        }
    }

    updateTime(){
        if (!this.timerState) return
       setTimeout(()=>{
        this.timer += 0.1;
        this.updateState()
        this.updateTime();
       }, 100)
    }

    reset(){
        this.stop();
        this.timer = 0.0;
        this.updateState()
    }

    stop(){
        console.log('stop');
        this.timerState = false;
    }
}
