import Is from "@flk/supportive-is";
import { Obj } from "reinforcements";


let configList = {};


const Config = {

    set(key, value = null) {
        if (Is.object(key)) {
            configList = Object.assign(configList, key);
        }else {
            configList[key] = value;
        }
    },


    get(key, $default) {
        return Obj.get(configList, key, $default);
    }

}; 


export default Config;
