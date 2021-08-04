### Herança

## 1

a) não, pois ela está private e não tem nenhum método para acessa-lá.

b) Apenas uma, quando a instancia é criada


## 2

a) 1 vez

b) 1 vez também, pois ao chamar o super esta chamando o construtor da classe base


## 3

a) não pois como a senha está encapsulada como private, ela não pode ser acessa fora da classe, mesmo nas subclases.


### Polimorfismo

## 1 
a) Imprimi todas, pois nas interfaces os atributos são sempre públicos.

## 2
a) que não é possivel criar uma instancia de uma classe abstrata.

b) tirar o asbract ou criar uma instancia de outra classe que pegue as informações da classe Place

## 3

` 
const residence = new Residence(5, "123-50") 
const commerce = new Commerce(3, "142-50") 
const industry = new Industry(100, "1243-5")
`

## 4
a) de metódos ela possui a calculatedBills que é obrigatorio pela intergace client + o getter pedido. Quanto aos atributos ela terá todos da classe Residence(e classe abstrata place) e da interface client, além das novas adicionada nesta classe.


## 5
a) os atributos da interface client e da classe abstrata place
b) os atributos da classe Commerce e o CNPJ criado nesta classe.

## 6
a) da Industry, pois não faria sentido ser de outra(mesmo ela tento cnpj igual a commerce)
b) a Client, pois todos sao clients 
c) pois o CNPJ, além de não fazer sentido querer alterar é o unico "nativo" dessa classe e não herdado de outras classes e interfaces