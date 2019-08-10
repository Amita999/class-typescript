export class Newclass{
    public name:string;
    public name1:string;
    private name2:string;
    private age:number;
    static areaCode:number;
      
    
    constructor(public privateaccessname2:string){
        console.log('Hello');  
        console.log(`name given is ${this.name1}`);
        this.name2 = privateaccessname2;
     }   
    //Accessing the property
    public propertyAccess():string{
        if(this.name){console.log(`name given is ${this.name}`)};
        return this.name;

    };

    public privatePropertyAccess(){
        if(this.name2 && this.age)
        {console.log(`The private property name is ${this.name2} and age is ${this.age}`)}
    };

    get privateAge(){
        return this.age;
    };
    set privateAge(privateAge:number){
this.age = privateAge;
    };
    
    
static staticPropertyAccess(){
        if(this.areaCode)
        {console.log(` given is static value is ${this.areaCode}`)};
        

    };


}



let newclassinstance = new Newclass('Amita');
newclassinstance.name = 'Neha';
newclassinstance.name1 = 'Seema';//no output
newclassinstance.privateAge = 30;
Newclass.areaCode =400602;
Newclass.staticPropertyAccess();
newclassinstance.privatePropertyAccess();
newclassinstance.propertyAccess();
