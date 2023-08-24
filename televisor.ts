class Televisor {
    isOn: boolean;
    volume: number;
    channel: number;
    constructor(on: boolean = false, vol: number = 10, chn: number = 0) {
      this.isOn = on;
      this.volume = vol;
      this.channel = chn;
    }
    switchOnOff(): void {
      this.isOn = !this.isOn;
      console.log(this.isOn ? "encendido" : "apagado");
    }
    volUp(): void {
      if (!this.isOn) return;
      if(this.volume===100) return;
      this.volume+1;
      
      
        
        
    }
    volDown(): void {
      if (!this.isOn) return;
      if(this.volume===0) return;
      this.volume-1;
      
      
    }
    channelUp(): void {
      if (!this.isOn) return;
      if (this.channel ===99)  {
          this.channel = 1
      } 
      else (  console.log(this.channel+1)
      )
      
    }
    channelDown(): void {
      if (!this.isOn) return;
      if (this.channel ===1)  {
        this.channel = 99
    } 
    else (  console.log(this.channel--)
    )
    }
    pickChannel(channel: number): void {
      if (!this.isOn) return;
      this.channel = channel;
     console.log("Cambiaste al canal", this.channel);
    }
      
    
    info(): void {
      console.log("canal:",this.channel, "\n volumen:", this.volume, "\n hora:",new Date().toLocaleTimeString());
    }
}
  
  const tv01 = new Televisor();
  tv01.switchOnOff();
  tv01.volUp();
  tv01.volDown();
  tv01.channelUp();
  tv01.channelDown();
  tv01.pickChannel(5);
  tv01.info()