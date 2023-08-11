class Calculadora {
 public suma(a:number, b:number) : number {
  return  a + b; 
 
 };
 public resta(a:number, b:number): number {
    return a - b; 
  
 };
 public multiplicacion(a:number, b:number) : number{
    return a * b; 

 };
 public division(a:number, b:number): number | string {
    if(b === 0) return "no puede dividir por cero";
    return a/b
 };
 
}
const calc01 = new Calculadora();
console.log(calc01.suma(5,8));
console.log(calc01.resta(5,8));
console.log(calc01.multiplicacion(5,8));
console.log(calc01.division(50,2));
console.log(calc01.division(2,0));