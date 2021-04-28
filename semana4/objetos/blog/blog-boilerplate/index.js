const listaDePosts =[]

function criaPostOnClick() {
    
    const post = {
        tituloPost: document.getElementById("titulo-post").value,
        autorPost: document.getElementById("autor-post").value,
        conteudoPost: document.getElementById("conteudo-post").value
    }
    listaDePosts.push(post)
    document.getElementById("titulo-post").value = ""
    document.getElementById("autor-post").value = ""
    document.getElementById("conteudo-post").value = ""
    
    const containerDePosts = document.getElementById("container-de-posts")
    containerDePosts.innerHTML += `<h3> ${post.tituloPost} </h3> <h5> ${post.autorPost} </h5> <div> ${post.conteudoPost} </div>` 
}