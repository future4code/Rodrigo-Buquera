### ex.1

a) ele vem em um array, por isso é necessário selecionar a info que você precisa: [0][0]

b)
```
app.get("/users/:name", async (req: Request, res: Response) => {
    try{
        const result = await connection.raw(`
            SELECT * FROM Actor WHERE name = ${req.params.name}
        `)

        res.send(result[0])
    } catch (error) {
		console.log(error.message)
    res.status(500).send("error")
  }
})
```

c)
```
app.get("/users", async (req: Request, res: Response) => {
    try {
        const result = await connection.raw(`
            SELECT COUNT(*) as count
            FROM Actor 
            WHERE gender = "${req.query.gender}"
        `)

        res.send(result[0])
    } catch (error) {
        console.log(error.message)
        res.status(500).send("error")
    }
})

```

### ex.2

a)
```
app.put("/users/:id", async (req: Request, res: Response) => {
   
    try{
        await connection("Actor")
        .update({
            salary: req.body.salary
        })
        .where({id: req.params.id})

     res.send("sucesso")   
    }catch(error){
        console.log(error.message);
        res.status(500).send("An unexpected error occurred")
    }
})

```

b)
``` 
app.delete("/users/:id", async (req: Request, res: Response) => {
   
    try{
        await connection("Actor")
        .delete()
        .where({id: req.params.id})

     res.send("deletado com sucesso")   
    }catch(error){
        console.log(error.message);
        res.status(500).send("An unexpected error occurred")
    }
})
```

c)
``` 

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
```

### ex.3

a)
```
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
```

b)
``const getActorCountBygender = async (gender: string): Promise<any> => {
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
  });`

```

### ex.4

a)
```
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

``` 

b)
```
app.delete("/actor/:id", async (req: Request, res: Response) => {
   
    try{
        await connection("Actor")
        .delete()
        .where({id: req.params.id})

     res.send("deletado com sucesso")   
    }catch(error){
        console.log(error.message);
        res.status(500).send("An unexpected error occurred")
    }
})
``` 