import { shallowMount } from "@vue/test-utils";
import CadastroPessoa from "@/modules/cadastro-pessoa/views/CadastroPessoa.vue";
import FormularioCriarEditarPessoa from "@/modules/cadastro-pessoa/components/CadastroPessoa/FormularioCriarEditarPessoa.vue";

describe("CadastroPessoa.vue", () => {
  it("renderiza o componente corretamente", () => {
    const wrapper = shallowMount(CadastroPessoa);
    expect(wrapper.exists()).toBe(true);
  });

  it("renderiza o componente FormularioCriarEditarPessoa", () => {
    const wrapper = shallowMount(CadastroPessoa);
    expect(
      wrapper.findComponent({ name: "FormularioCriarEditarPessoa" }).exists()
    ).toBe(true);
  });

  it("verifica se o componente FormularioCriarEditarPessoa está registrado corretamente", () => {
    const wrapper = shallowMount(CadastroPessoa);
    expect(
      wrapper.vm.$options.components.FormularioCriarEditarPessoa
    ).toBeDefined();
    expect(wrapper.vm.$options.components.FormularioCriarEditarPessoa).toBe(
      FormularioCriarEditarPessoa
    );
  });
});
