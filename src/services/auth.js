export const TOKEN = "@chave-token";
export const USER = "@chave-usuario";

// Verifica se o usuario está logado
export const estaAutenticado = () => localStorage.getItem(CHAVE_TOKEN) !== null;

// Verifica se o usuario está logado
export const tipoUsuario = () =>
  JSON.parse(localStorage.getItem(CHAVE_USUARIO)).tipo;

export const primeiroAcesso = () =>
  JSON.parse(localStorage.getItem(CHAVE_USUARIO)).primeiro_acesso;
// Pega o Token do usuario
export const pegarToken = () => localStorage.getItem(TOKEN);
export const pegarIdUser = () => localStorage.getItem(USER);

// Pega os dados do usuario
export const pegarUsuario = () =>
  JSON.parse(localStorage.getItem(CHAVE_USUARIO));

// Salva os dados iniciais do usuario
export const logar = (token, usuario) => {
  localStorage.setItem(USER, token);
  localStorage.setItem(TOKEN, usuario);
};

// Desloga o usuario
export const deslogar = () => {
  localStorage.removeItem(CHAVE_TOKEN);
  localStorage.removeItem(CHAVE_USUARIO);
  //   localStorage.removeItem(CHAVE_FILTROS);
};
