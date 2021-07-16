type resultado ={
    soma: number
    subt: number
    multi: number
    maior: number

}

function operacoes(a:number, b:number ) : void {

const soma:number = a + b
const sub:number = a - b
const multi:number = a*b

let maior:number 

if (a>=b){
    maior=a
} else {
    maior=b
}

const res = {
    soma: soma,
    subt: sub,
    multi: multi,
    maior: maior
}

console.log(res) 
 
}

operacoes(10, 5)