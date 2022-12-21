export const TOKEN = "@chave-token";
export const USER = "@chave-usuario";

// Verifica se o usuario está logado
// export const authenticated = () => localStorage.getItem(CHAVE_TOKEN) !== null;

// export const primeiroAcesso = () =>
//   JSON.parse(localStorage.getItem(CHAVE_USUARIO)).primeiro_acesso;

// Pega o Token do usuario
export const getToken = () => localStorage.getItem(TOKEN);
export const getIdUser = () => localStorage.getItem(USER);

// // Pega os dados do usuario
// export const pegarUsuario = () =>
//   JSON.parse(localStorage.getItem(CHAVE_USUARIO));

// Salva os dados iniciais do usuario
export const loginUser = (token, usuario) => {
  localStorage.setItem(USER, token);
  localStorage.setItem(TOKEN, usuario);
};

// Desloga o usuario
export const logout = () => {
  localStorage.removeItem(TOKEN);
  localStorage.removeItem(USER);
};
