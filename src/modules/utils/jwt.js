import jwt from "jsonwebtoken";

/**
 * Valida um token JWT.
 * @param {string} token - O token JWT a ser validado.
 * @param {string} secret - A chave secreta usada para assinar o token.
 * @returns {object} Um objeto contendo as informações do token se ele for válido, ou null se não for.
 */
export function validateToken(token, secret) {
  try {
    const decoded = jwt.verify(token, secret);
    return decoded;
  } catch (error) {
    console.error("Erro ao validar token:", error);
    return null;
  }
}
