interface IElectronic {
    getBrand(): string;
    getModel(): string;
    getYear(): number;
  }
  
  class Phone implements IElectronic {
    private brand: string;
    private model: string;
    private year: number;
    private color: string;
    public constructor(brand: string,model: string,year: number,color: string
    ) {
      this.brand = brand;
      this.model = model;
      this.year = year;
      this.color = color;
    } 
    getBrand(): string {
      return this.brand;
    }
    getModel(): string {
      return this.model;
    }
    getYear(): number {
      return this.year;
    }
    makeCall(number: string): void {
      console.log(`Calling to ${number}...`);
    }
    getColor(): string {
      return this.color;
    }
  }
  
  class Television implements IElectronic {
    private brand: string;
    private model: string;
    private year: number;
    private channel: number;
    public constructor(brand: string, model: string, year: number) {
      this.brand= brand;
      this.model = model;
      this.year= year;
      this.channel = 0;
    }
    getBrand(): string {
      return this.brand;
    }
    getModel(): string {
      return this.model;
    }
    getYear(): number {
      return this.year;
    }
    changeChannel(channel: number): void {
      this.channel = channel;
    }
    getChannel(): number {
      return this.channel;
    }
  }
  
  const nokia = new Phone("nokia","c3",2003,"negro")
  console.log(nokia);
  
  nokia.makeCall("55");
  
  const tele01 = new Television("noblex","nose",2012)
  tele01.changeChannel(20);
  console.log(tele01.getBrand());
  console.log(tele01.getChannel());
  
  
    
  
  