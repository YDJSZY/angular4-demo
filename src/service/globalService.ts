/**
 * Created by luwenwe on 2017/8/23.
 */
import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService{
    myInfo:Object
    constants:Object
    constructor(){
        
    }
    
    setMyInfo(myInfo:Object) {
        this.myInfo = myInfo;
    }
    
    updateMyInfo(prop:String,value:any){
        this.myInfo[prop] = value;
    }

    setConstants(constants:Object) {
        this.constants = constants;
    }

    updateConstants(prop:String,value:any){
        this.constants[prop] = value;
    }
}