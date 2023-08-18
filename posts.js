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
    }
];

module.exports.posts = posts;