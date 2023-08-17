class Witch{
    constructor(name, patron, house, colorEyes){
        this.name = name
        this.patron = patron
        this.house = house
        this.colorEyes = colorEyes
    }

    getName(){
        return `O nome do bruxo é: ${this.name}`;
    }
    getHouse(){
        return `Ele é da casa: ${this.house}`
    }
    getPatron(){
        return `Seu patrono é: ${this.patron}`
    }

}

 const witch1 = new Witch('Harry Potter', 'Deer', 'Gryffindor', 'Green');
 console.log(witch1.getName())
 class TypeWitch extends Witch{
     constructor(name, patron, house, colorEyes, typeWitch){
         super(name, patron, house, colorEyes);
         this.typeWitch = typeWitch;
     }
     getTypeWitch(){
         if(this.typeWitch == 'P'){
             return "Este bruxo é sangue puro"
         }else if(this.typeWitch == 'M'){
             return "Este bruxo é mestiço!"
         }else{
             return "Este bruxo é um trouxa"
         }
     }
 }
//    const Harry = new TypeWitch('Harry potter', 'Hart', 'Grifinória', 'verde/azuis', 'M');
//  //   console.log(Harry.getTypeWitch());
//  class CamaraSecreta{
//      constructor(name,pwd){
//          this.name = name
//          let _pwd = pwd
      
//          this.verifyPwd = (pwdInput) =>{
//              return pwdInput == _pwd
//          }
//            this.acessToChamber = () => {
//              let pwdInput = prompt("digite sua senha")
          
//              if(this.verifyPwd(pwdInput)){
//                  console.log(`Bem vindo a camara secreta ${this.name}`)
//              }else{
//                  console.log(`Acesso negado TROUXA!`)
//              }
//          } 
//      } 

//  }
//  const myAccess1 = new CamaraSecreta('Harry potter1','senha123')
//  myAccess1.name = 'HP';
//  myAccess1.pwd = '123';
//  myAccess1.acessToChamber(); 
