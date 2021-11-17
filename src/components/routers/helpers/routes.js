export const routes = {
  home: "/",
  inicio: "/inicio",
  mangas: "/mangas",
  manga: (mangaID) => (mangaID ? `/manga/${mangaID}` : "/manga/:mangaID"),
  animes: "/animes",
  anime: (animeID) => (animeID ? `/anime/${animeID}` : "/anime/:animeID"),
  nosotros: "/nosotros",
  foro: "/foro",
  iniciarSesion: "/iniciar-sesion",
  registro: "/registro",
  cuenta: "/cuenta",
  admin: {
    usuarios: "/admin/usuarios",
  },
};
