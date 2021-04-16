// Hilfs fn
let fnGetEl = (param) => {
    let sOutput = document.getElementById(param);
    return sOutput; 
}

// ----------- x ---------- //

let sOutput1 = fnGetEl('output1');
let sOutput2 = fnGetEl('output2');
let sOutput3 = fnGetEl('output3');
let sOutput4 = fnGetEl('output4');
const sTestString1 = 'Inhalt von sTestString1...';
const sB1 = fnGetEl('b1');


let fnGebeAus1 = () => {
    
    sOutput1.innerHTML = sTestString1;
}
fnGebeAus1();

let fnGebeAus2 = () => {
    
    sOutput2.innerHTML = sTestString1;
}
sB1.addEventListener('click', fnGebeAus2);

// ------ JS Classes ------ //
// ----- Basic Aufbau ----- //
class ClassName {
    constructor(){

    }
}

// -------- Bsp. 1 -------- //
class Pstl {
    constructor(name, clbr, year){
        this.name = name;
        this.clbr = clbr;
        this.year = year;
    }
    // -- Bsp.2, mit Methode -- //
    fnAge(){
        let sDate = new Date();
        return sDate.getFullYear() - this.year;
    }
}
let sPstl1 = new Pstl('M9', '9mm', 1990);
console.log(sPstl1);        // Nur alleine kann das Obj. dargestellt werden
console.log(`Ausgabe Bsp.1: ` + sPstl1.name + ` ` + sPstl1.clbr);
console.log(`Ausgabe Bsp.2, age: ` + sPstl1.fnAge() );

let fnOutput3 = () => {
    sOutput3.innerHTML = sPstl1;        // Wird nicht mit innerHTML ausgegeben
    sOutput3.innerHTML = `Ausgabe Bsp.1: ` + sPstl1.name + ` ` + sPstl1.clbr;
    sOutput4.innerHTML = `Ausgabe Bsp.2, age: ` +  sPstl1.fnAge();
}
fnOutput3(); 



