### ex.1

a) Round representa o custo(cost) do processo, quanto mais alto, mais segura a senha, mas mais elevado o uso de processador.

b) 

`
import * as bcrypt from "bcryptjs";

export const generateHash = async (s:string):Promise<string> => {
    const rounds = Number(process.env.BCRYPT_COST)
    const salt = await bcrypt.genSalt(rounds)
    const result = await bcrypt.hash(s, salt)

    return result
}

`

c)

`
import * as bcrypt from "bcryptjs";

export const VerifyHash = async (s:string, hash: string):Promise<boolean> => {
    return bcrypt.compare(s, hash)
}

` 

### ex.2 

a) O cadastro, pois a senha no banco precisar ser um hash

b)

c)

d) Não, pois ele não pede a senha, apenas o token.

### ex.3
a) ok

b)

`
export const getData = (token:string): AuthenticationData =>{
    const payload = jwt.verify(token, process.env.JWT_KEY!) as any
    return {id: payload.id, role: payload.role}
} 

`