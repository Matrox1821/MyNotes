export const routes = {
  home: "/",
  inicio: "/inicio",
  libros: "/libros",
  libro: (libroID) => (libroID ? `/libros/${libroID}` : "/libros/:libroID"),
  musica: "/musica",
  nosotros: "/nosotros",
  foro: "/foro",
  iniciarSesion: "/iniciar-sesion",
  registro: "/registro",
  cuenta: "/cuenta",
  admin: {
    usuarios: "/admin/usuarios",
  },
};
