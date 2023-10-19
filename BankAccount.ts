enum accountTypeEnum{
    ctaSueldo="cuenta sueldo",
    ctaCorriente="cuenta corriente",
    ctaDolares= "cuenta dolares",
    cajaAhorro="caja de ahorro"

    }

class AccountType{
    private tipo: accountTypeEnum;
    constructor(tipo: accountTypeEnum){
        this.tipo= tipo;
    }
}




class BankAccount {
    private owner: string;
    private balance: number;
    private accountType: AccountType;
    constructor(owner:string,accountType:accountTypeEnum){
        this.owner= owner;
        this.balance=0;
        this.accountType= new AccountType(accountType);
    }
deposit(dinero: number): void{
    if(dinero>0){
    this.balance+=dinero
console.log(`${dinero} depositado en la cuenta ${JSON.stringify(this.accountType)}`);
}
}
withdraw(dinero: number):void{
    if(dinero > 0 && dinero <= this.balance){
    this.balance-=dinero
    console.log(`${dinero} retirado de la cuenta ${JSON.stringify(this.accountType)}`);
    }
    else {
        console.log("fondo insuficiente");
    }
}
getBalance() : void {
    console.log(this.balance);
     
    
}
}
const cuenta1= new BankAccount("maria",accountTypeEnum.cajaAhorro)
cuenta1.deposit(2000)
cuenta1.withdraw(500)
cuenta1.getBalance()