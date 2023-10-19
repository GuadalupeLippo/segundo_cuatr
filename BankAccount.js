var accountTypeEnum;
(function (accountTypeEnum) {
    accountTypeEnum["ctaSueldo"] = "cuenta sueldo";
    accountTypeEnum["ctaCorriente"] = "cuenta corriente";
    accountTypeEnum["ctaDolares"] = "cuenta dolares";
    accountTypeEnum["cajaAhorro"] = "caja de ahorro";
})(accountTypeEnum || (accountTypeEnum = {}));
var AccountType = /** @class */ (function () {
    function AccountType(tipo) {
        this.tipo = tipo;
    }
    return AccountType;
}());
var BankAccount = /** @class */ (function () {
    function BankAccount(owner, accountType) {
        this.owner = owner;
        this.balance = 0;
        this.accountType = new AccountType(accountType);
    }
    BankAccount.prototype.deposit = function (dinero) {
        if (dinero > 0) {
            this.balance += dinero;
            console.log("".concat(dinero, " depositado en la cuenta ").concat(JSON.stringify(this.accountType)));
        }
    };
    BankAccount.prototype.withdraw = function (dinero) {
        if (dinero > 0 && dinero <= this.balance) {
            this.balance -= dinero;
            console.log("".concat(dinero, " retirado de la cuenta ").concat(JSON.stringify(this.accountType)));
        }
        else {
            console.log("fondo insuficiente");
        }
    };
    BankAccount.prototype.getBalance = function () {
        console.log(this.balance);
    };
    return BankAccount;
}());
var cuenta1 = new BankAccount("maria", accountTypeEnum.cajaAhorro);
cuenta1.deposit(2000);
cuenta1.withdraw(500);
cuenta1.getBalance();
