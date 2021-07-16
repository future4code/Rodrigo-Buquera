// ex 2
let num

const a = Number(process.argv[3])
const b = Number(process.argv[4])

switch (process.argv[2]) {
    case "add":
        num = a+b
        break;
    case "sub":
        num = a-b
        break;
    case "mult":
        num = a*b
        break;
    case "div":
        num = a/b
        
        break;

    default:
        break;
}

 console.log(`Resposta`, num)
