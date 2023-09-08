class Deportista{
    private nombre: string;
    private edad: number;
    protected clasificacion: boolean;
constructor(nombre: string, edad: number, clasificacion:boolean) {
    this.nombre= nombre;
    this.edad= edad;
    this.clasificacion=clasificacion
}
 setClasificacion(clasificacion: boolean){
        this.clasificacion= clasificacion
    }
getClasificacion(): boolean {
        return this.clasificacion;
    }
getNombre(): string { 
  return  this.nombre;

}
getEdad() : number  {
   
    return this.edad
    
}

}




class Basquetbolista extends Deportista {
    private posicion: string;
    constructor (nombre: string, edad: number,posicion: string,clasificacion:boolean) {
        super(nombre,edad,clasificacion)
        this.posicion=posicion
    }
   
recibirMedalla(): void {
    if(this.clasificacion===false)
    {console.log( "no recibe medalla");
    } else{
        console.log("recibe medalla")
    }
    
    }
setPosicion(posicion:string){
    this.posicion=posicion
    console.log(this.posicion);
    
}
getPosicion(): string{
return this.posicion
}

}
const basquetbolista1= new Basquetbolista("matias",21,"delantero",true)
console.log(basquetbolista1);
basquetbolista1.setClasificacion(false)
basquetbolista1.recibirMedalla()



class Ciclista extends Deportista {
    private categoria: string;
    constructor(nombre: string, edad: number,clasificacion:boolean,categoria:string){
        super(nombre,edad,clasificacion)
        this.categoria=categoria
    }
    setCategoria(categoria:string): void{
        this.categoria=categoria;
    }
    getCategoria(): string {
        return this.categoria
        
    }
    recibirMedalla(): void {
        if(this.clasificacion===false)
        {console.log( "no recibe medalla");
        } else{
            console.log("recibe medalla")
        }
        
        }
}

const Ciclista01= new Ciclista("pepe",19,false,"todo terreno")
console.log(Ciclista01);
Ciclista01.recibirMedalla()

class Equipo{
   private nombre: string;
    constructor(nombre: string) {
        this.nombre=nombre;
    }
    
}
 const equipo01 = new Equipo("river")
 const equipo02 = new Equipo("boca")
 const equipo03 = new Equipo("san lorenzo")

class Futbolista extends Deportista {
    private equipo: Equipo;
    private jugador: number
    constructor(nombre: string, edad: number,clasificacion:boolean,equipo: Equipo, jugador: number){
        super(nombre,edad,clasificacion)
        this.equipo=equipo;
        this.jugador=jugador
     }
     setJugador(nro: number): void{
        this.jugador=nro
        console.log(this.jugador)
     }
     getJugador(): number{
        return this.jugador
     }
     recibirMedalla(): void {
        if(this.clasificacion===false)
        {console.log( "no recibe medalla");
        } else{
            console.log("recibe medalla")
        }
        
        }
}
const fut01= new Futbolista("jose",25,true,equipo03,10)
 console.log(fut01);
 fut01.recibirMedalla();
 console.log(fut01.getNombre());

