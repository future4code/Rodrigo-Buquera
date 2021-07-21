import { Request, Response } from "express"
import connection from "./connection"
import app from "./app"
import { Actor } from "./types"
// Esse arquivo seria o index.ts

// const getActorById = async (id: string): Promise<any> => {
//   const result = await connection.raw(`
//     SELECT * FROM Actor WHERE id = '${id}'
//   `)
// console.log(result)
// 	return result[0][0]
// }


// // // Assim a chamada funciona fora dos endpoints com .then()/.catch
// getActorById("001")
// 	.then(result => {
// 		console.log(result)
// 	})
// 	.catch(err => {
// 		console.log(err)
// 	});

// // Assim a chamada funciona fora dos endpoints com await
// (async () => {
//   console.log(await getActorById("001") )
// })()


// // // Ou então podemos chamá-la dentro de um endpoint
// app.get("/users/:id", async (req: Request, res: Response) => {
//   try {
//     const id = req.params.id

//     console.log(await getActorById(id))

//     res.end()
//   } catch (error) {
// 		console.log(error.message)
//     res.status(500).send("Unexpected error")
//   }
// }) 

//1b
app.get("/users/:name", async (req: Request, res: Response) => {
    try {
        const result = await connection.raw(`
            SELECT * FROM Actor WHERE name = ${req.params.name}
        `)

        res.send(result[0])
    } catch (error) {
        console.log(error.message)
        res.status(500).send("error")
    }
})

//1c
// app.get("/users", async (req: Request, res: Response) => {
//     try {
//         const result = await connection.raw(`
//             SELECT COUNT(*) as count
//             FROM Actor 
//             WHERE gender = "${req.query.gender}"
//         `)

//         res.send(result[0])
//     } catch (error) {
//         console.log(error.message)
//         res.status(500).send("error")
//     }
// })

//2a


app.put("/users/:id", async (req: Request, res: Response) => {
   
    try{
        await connection("Actor")
        .update({
            salary: req.body.salary
        })
        .where({id: req.params.id})

     res.send("alterado com sucesso")   
    }catch(error){
        console.log(error.message);
        res.status(500).send("An unexpected error occurred")
    }
})


//2b 

// app.delete("/users/:id", async (req: Request, res: Response) => {
   
//     try{
//         await connection("Actor")
//         .delete()
//         .where({id: req.params.id})

//      res.send("deletado com sucesso")   
//     }catch(error){
//         console.log(error.message);
//         res.status(500).send("An unexpected error occurred")
//     }
// })

//2c 

app.get("/users", async (req: Request, res: Response) => {
   const gender =req.query.gender

    try{
        const result =  await connection("Actor")
        .avg("salary as average")
        .where({gender})

        
      res.send(result[0])

    }catch(error){
        console.log(error.message);
        res.status(500).send("An unexpected error occurred")
    }
})

//3a

const getActorById = async (id: string): Promise<any> => {
    const result = await connection("Actor")
    .where({id})
  
      return result[0]
  }

app.get("/actor/:id", async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const actor = await getActorById(id);
  
      res.status(200).send(actor)
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  });


//3b

const getActorCountBygender = async (gender: string): Promise<any> => {
    const result = await connection("Actor")
    .count("* as contagem")
    .where({gender})
  
      return result[0]
  }

  app.get("/actor", async (req: Request, res: Response) => {
    try {
      const gender: string  = req.query.gender as string;
      const count = await getActorCountBygender(gender);
  
      res.status(200).send(count)
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  });



  //4a

  app.post("/actor", async (req: Request, res: Response) => {
   
    try{
        await connection("Actor")
        .update({
            salary: req.body.salary
        })
        .where({id: req.body.id})

     res.send("alterado com sucesso")   
    }catch(error){
        console.log(error.message);
        res.status(500).send("An unexpected error occurred")
    }
})
