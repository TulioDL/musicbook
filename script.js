const posts = [
    {
        id: crypto.randomUUID(),
        titulo: "Zombies",
        artista: "Lacuna Coil",
        url: "./assets/y2mate.com - Zombies.mp3",
        descripcion:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, officiis facere eveniet accusamus totam incidunt natus quo eos aut laborum magni commodi aliquid nemo ratione, corporis rem, in porro consequuntur.",
        likes: 0,
        comentarios: ["arrechisimo", "supercalifragilisticuespialidoso"],
        publicadoPor: "Lacuna Coil",
        fechaPublicacion: new Date().toISOString()
    },
    {
        id: crypto.randomUUID(),
        titulo: "Fade to Black",
        artista: "Metallica",
        url: "./assets/y2mate.com - Fade to Black.mp3",
        descripcion:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, officiis facere eveniet accusamus totam incidunt natus quo eos aut laborum magni commodi aliquid nemo ratione, corporis rem, in porro consequuntur.",
        likes: 0,
        comentarios: ["arrechisimo", "supercalifragilisticuespialidoso"],
        publicadoPor: "Metallica",
        fechaPublicacion: new Date().toISOString()
    },
    {
        id: crypto.randomUUID(),
        titulo: "Fade to Black",
        artista: "Metallica",
        url: "./assets/y2mate.com - Fade to Black.mp3",
        descripcion:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, officiis facere eveniet accusamus totam incidunt natus quo eos aut laborum magni commodi aliquid nemo ratione, corporis rem, in porro consequuntur.",
        likes: 0,
        comentarios: ["arrechisimo", "supercalifragilisticuespialidoso"],
        publicadoPor: "Metallica",
        fechaPublicacion: new Date().toISOString()
    },
    {
        id: crypto.randomUUID(),
        titulo: "Fade to Black",
        artista: "Metallica",
        url: "./assets/y2mate.com - Fade to Black.mp3",
        descripcion:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, officiis facere eveniet accusamus totam incidunt natus quo eos aut laborum magni commodi aliquid nemo ratione, corporis rem, in porro consequuntur.",
        likes: 0,
        comentarios: ["arrechisimo", "supercalifragilisticuespialidoso"],
        publicadoPor: "Metallica",
        fechaPublicacion: new Date().toISOString()
    }
];

const publicaciones = posts.map(post => {
    return `<div class="card-post">
        <div id="reproductor-${post.id}">
            <audio class="audio" id="audio-${post.id}" onplay='pausarResto("audio-${post.id}")' preload='auto' controls src='${post.url}'></audio>
        </div>
        <h1>${post.titulo}</h1>
        <h4>${post.artista}</h4>
        <p>${post.descripcion}</p>
        <div class="btn-box">
            <label id='likes-${post.id}'>${post.likes}</label>
            <button id='btnLike-${post.id}' onclick='onLike("${post.id}")' type="button" class="btn btn-outline-primary" data-bs-toggle="button" aria-pressed="true"><i class="fa-solid fa-thumbs-up"></i></button>
            <label>${post.comentarios.length}</label>
            <button onclick="desplegarComentarios('${post.id}')" type="button" class="btn btn-outline-primary"><i class="fa-solid fa-comment"></i></button>
        </div>
        <div id="comentarios-${post.id}" hidden>
        </div>
    </div>`;
});

document.getElementById('posts').innerHTML = publicaciones.join('');


// const pausarResto = id => {
//     let audio = [...document.getElementsByClassName('audio')].filter(
//         audio => audio.id != id
//     );
//     audio.map(a => a.pause());
// };

// const onLike = id => {
//     let post;

//     if (
//         !document.getElementById(`btnLike-${id}`).className.includes('active')
//     ) {
//         post = posts.find(post => post.id === id);
//         post.likes--;
//         document.getElementById(`likes-${id}`).innerText = post.likes;
//         return;
//     }
//     post = posts.find(post => post.id === id);
//     post.likes++;
//     document.getElementById(`likes-${id}`).innerText = post.likes;
// };

// const desplegarComentarios = id => {
//     if (!document.getElementById(`comentarios-${id}`).hidden) {
//         document.getElementById(`comentarios-${id}`).hidden = true;
//         return;
//     }

//     const comentarios = posts.find(post => post.id === id).comentarios;

//     let mapaComentarios = comentarios.map(
//         comentario => `<div class="comentario">${comentario}</div>`
//     );

//     mapaComentarios = `<div class="comentarios">${mapaComentarios.join(
//         ''
//     )}</div>`;

//     document.getElementById(`comentarios-${id}`).innerHTML = mapaComentarios;
//     document.getElementById(`comentarios-${id}`).hidden = false;
// };

// posts.map(post => play(post.id, post.artista, post.url));
//play(${post.id}, '${post.artista}', '${post.url}').initProgressBar()
//onloadedmetadata="mDur()"
// {
/* <div class="card-post" id="skin-${post.id}">
        <div class="audio-player">
            <div class="holder">
                <div class="audio-wrapper" id="player-container-${post.id}" href="javascript:;">
                            <audio id="player-${post.id}" preload="metadata" onloadedmetadata="mDur(${post.id}, '${post.artista}', '${post.url}')">
                                <source src="${post.url}" type="audio/mp3">
                            </audio>
                </div>
                <div class="player-controls scrubber">
                    <div>
                        <div class="range">
                            <input id="dur-${post.id}" type="range" class="range" name="rng" min="0" max="1" step="0.00000001"
                                value="0" onchange="mSet(${post.id}, '${post.artista}', '${post.url}')" style="width: 100%">
                        </div>
                        <br>
                        <span class="time start-time"></span>
                        <span class="time end-time"></span>
                        <br>
                        <div class="ctrl">
                            <div>
                                <!--<a href="#prev" class="ctrl_btn " id="prev"><i class="fa fa-arrow-left"></i></a>-->
                                <button id="play-btn-${post.id}" class="fa fa-play" onclick="play(${post.id}, '${post.artista}', '${post.url}')"></button>
                                <!--<a href="#next" class="ctrl_btn " id="next-${post.id}"><i class="fa fa-arrow-right"></i></a>-->
                            </div>
                            <div class="volumeControl">
                                <div class="wrapper">
                                    <i class="fa fa-volume-up"></i>
                                    <span class="outer">
                                        <span class="inner"></span>
                                    </span>
                                </div>
                            </div>
                            </div>
                        </div>
                    <div>
                </div>
            </div>
        </div>

        </div>
        <h1>${post.titulo}</h1>
        <h4>${post.artista}</h4>
        <p>${post.descripcion}</p>
        <div class="btn-box">
            <button type="button" class="btn btn-outline-primary" data-bs-toggle="button" aria-pressed="true"><i class="fa-solid fa-thumbs-up"></i></button>
            <button type="button" class="btn btn-outline-primary"><i class="fa-solid fa-comment"></i></button>
        </div>
    </div> */
// }
