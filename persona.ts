class Person {
private name: string;
private age: number;
public constructor(name:string ="" , age: number= 0) {
    this.name = name;
    this.age= age;
}
setName(name: string){
    this.name=name;
    console.log(this.name);
    
};
setAge(age: number){
    this.age= age;
    console.log(this.age);
    
};
getInfo() {
    console.log("el nombre es ",this.name);
    console.log("la edad es",this.age);
    
    

}
};


const Pers01 = new Person();
console.log(Pers01);

Pers01.setName("maria");
Pers01.setAge(9)
Pers01.getInfo()