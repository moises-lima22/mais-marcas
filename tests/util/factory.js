export const verificarSeCampoExiste = (wrapper, campo) => {
  const elemento = wrapper.find(`[name="${campo}"]`);
  expect(elemento.exists()).toBe(true);
};
