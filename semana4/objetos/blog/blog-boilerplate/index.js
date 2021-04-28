const listaDePosts = []

function criaPostOnClick() {

    const post = {
        tituloPost: document.getElementById("titulo-post").value,
        autorPost: document.getElementById("autor-post").value,
        conteudoPost: document.getElementById("conteudo-post").value,
        imagemPost: document.getElementById("imagem-post").value,
    }

    document.getElementById("titulo-post").value = ""
    document.getElementById("autor-post").value = ""
    document.getElementById("conteudo-post").value = ""
    document.getElementById("imagem-post").value = ""

    // JSON.stringify(listaDePosts)

    // window.localStorage.setItem(listaDePosts, )    não consegui fazer funcionar
    // window.location.href = "posts.html"

    const containerDePosts = document.getElementById("container-de-posts")

    containerDePosts.innerHTML += `<h3> ${post.tituloPost} </h3> <h5> ${post.autorPost} </h5> <div> ${post.conteudoPost} </div> <img src="${post.imagemPost}">`


}

//JSON.stringify(array) retorna o array como uma string
//JSON.parse(localStorage.getItem()) - retorna como array 
