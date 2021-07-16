
function leTexto(ano: number, sigla: string): void {
let res:string = "caralho"
    switch (sigla) {
        case "AC":
            if (ano > 4000) {
                res = " Pré-história"
            } else if (ano <= 4000) {
                 res ="Idade Antiga"
            }
            break;
        case "DC":
            if (ano < 476) {
                 res =" Idade Antiga"
            } else if (ano >= 476 && ano < 1453) {
                 res =" Idade Média"
            } else if (ano >= 1453 && ano < 1789) {
                 res =" Idade Moderna"
            } else if (ano >= 1789) {
                 res ="Idade Contemporânea"
            }
            break;

        default:
             res ="deu ruim"

    }
  console.log(res)
}

leTexto(1900, "AC")
