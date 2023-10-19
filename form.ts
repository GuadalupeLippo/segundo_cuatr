class Form {
    protected ancho : number;
    protected alto: number;

    constructor(ancho: number, alto: number) 
    {
        this.ancho= ancho;
        this.alto= alto;
    }

}

class Triangulo extends Form {
    constructor(ancho:number, alto: number){
        super(ancho,alto)
    }
calcularArea(): void {
   console.log((this.ancho* this.alto)/2);

}
}
class Rectangulo extends Form{
    constructor(ancho:number, alto:number){
        super(ancho,alto)
    }
calcularArea(): void {
   console.log (this.ancho* this.alto)

}

}

const Rec01 = new Rectangulo(10,5)
console.log(Rec01);
Rec01.calcularArea()
const trian01 = new Triangulo(20,4)
console.log(trian01);
trian01.calcularArea()
