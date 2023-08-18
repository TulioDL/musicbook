const pausarResto = id => {
    let audio = [...document.getElementsByClassName('audio')].filter(
        audio => audio.id != id
    );
    audio.map(a => a.pause());
};

const onLike = id => {
    let post;

    if (
        !document.getElementById(`btnLike-${id}`).className.includes('active')
    ) {
        post = posts.find(post => post.id === id);
        post.likes--;
        document.getElementById(`likes-${id}`).innerText = post.likes;
        return;
    }
    post = posts.find(post => post.id === id);
    post.likes++;
    document.getElementById(`likes-${id}`).innerText = post.likes;
};

const desplegarComentarios = id => {
    if (!document.getElementById(`comentarios-${id}`).hidden) {
        document.getElementById(`comentarios-${id}`).hidden = true;
        return;
    }

    const comentarios = posts.find(post => post.id === id).comentarios;

    let mapaComentarios = comentarios.map(
        comentario => `<div class="comentario">${comentario}</div>`
    );

    mapaComentarios = `<div class="comentarios">${mapaComentarios.join(
        ''
    )}</div>`;

    document.getElementById(`comentarios-${id}`).innerHTML = mapaComentarios;
    document.getElementById(`comentarios-${id}`).hidden = false;
};
