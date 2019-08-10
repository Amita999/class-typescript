import {Newclass} from './class';
class ImportClass{
    constructor(){
        Newclass.staticPropertyAccess();
    };
}
Newclass.areaCode = 421004;
let importedClassObject = new ImportClass();
        
