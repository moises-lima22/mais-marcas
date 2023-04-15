import { mount } from "@vue/test-utils";
import FormularioCriarEditarPessoa from "@/modules/cadastro-pessoa/components/CadastroPessoa/FormularioCriarEditarPessoa.vue";
import { verificarSeCampoExiste } from "../../../util/factory";
import { mock as mockAxios } from "./mocks/axiosMock";

describe("FormularioCriarEditarPessoa.vue", () => {
  const BASE_URL = `api/v1/persons`;
  let wrapper;

  beforeEach(() => {
    wrapper = mount(FormularioCriarEditarPessoa);
  });

  afterEach(() => {
    wrapper.destroy();
  });

  const camposEElementos = [
    { name: "firstName", type: "input" },
    { name: "lastName", type: "input" },
    { name: "email", type: "input" },
    { name: "isClient", type: "checkbox" },
    { name: "isSeller", type: "checkbox" },
    { name: "isEmployee", type: "checkbox" },
    { name: "isWorkshop", type: "checkbox" },
    { name: "cpfOrCnpj", type: "input" },
    { name: "bankName", type: "input" },
    { name: "bankAccountType", type: "input" },
    { name: "bankAgencyNumber", type: "input" },
    { name: "bankAccountNumber", type: "input" },
    { name: "cep", type: "input" },
    { name: "addressNumber", type: "input" },
    { name: "cellNumber", type: "input" },
    { name: "phone", type: "input" },
    { name: "note", type: "input" },
  ];

  const person = {
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@example.com",
    isClient: true,
    isSeller: true,
    isEmployee: true,
    isWorkshop: true,
    cpfOrCnpj: "50.130.864/0001-04",
    cellNumber: "(11) 94505-1586",
    phone: "(11) 4574-1433",
    bankName: "Bank XYZ",
    bankAccountNumber: "9876543210",
    bankAgencyNumber: "1234",
    bankAccountType: "CHECKING",
    cep: "12345-678",
    addressNumber: "123",
    note: "Some note",
  };

  camposEElementos.forEach((campo) => {
    it(`deve conter o seguinte campo: ${campo.name}`, () => {
      verificarSeCampoExiste(wrapper, campo.name);
    });
  });

  it("deve iniciar o data com os objetos person e address com as propriedades nulas", () => {
    const personData = wrapper.vm.person;

    for (const prop in personData) {
      expect(personData[prop]).toBeNull();
    }
  });

  camposEElementos.forEach((campo) => {
    it(`deve vincular corretamente o dado passado do input, ${campo.name}, para o data.`, async () => {
      const elemento = wrapper.find(`[name=${campo.name}]`);

      campo.type === "checkbox"
        ? await elemento.setChecked(person[campo.name])
        : await elemento.setValue(person[campo.name]);

      await elemento.trigger("input");

      expect(wrapper.vm.person[campo.name]).toBe(person[campo.name]);
    });
  });

  it(`deve existir um botão para salvar o formulário.`, async () => {
    const btnPersonSave = wrapper.find(`[name=btnPersonSave]`);

    expect(btnPersonSave.exists()).toBe(true);
  });

  it(`deve existir um botão para voltar.`, async () => {
    const btnVoltar = wrapper.find(`[name=btnVoltar]`);

    expect(btnVoltar.exists()).toBe(true);
  });

  it("deve tratar o sucesso da requisição do método salvar pessoa", async () => {
    wrapper.vm.person = person;

    mockAxios.onPost(`${BASE_URL}/save`).reply(200, { success: true });

    await wrapper.vm.saveOrUpdatePerson();

    expect(mockAxios.history.post.length).toBe(1);
    expect(mockAxios.history.post[0].url).toBe(`${BASE_URL}/save`);

    await wrapper.vm.$nextTick();

    expect(wrapper.vm.$notify.success).toHaveBeenCalledWith(
      "Cadastro salvo com sucesso"
    );
  });

  it("deve tratar o erro em caso de falha da requisição do método salvar pessoa", async () => {
    wrapper.vm.person = person;

    mockAxios
      .onPost(`${BASE_URL}/save`)
      .reply(500, { error: "Erro ao salvar dados" });

    await wrapper.vm.saveOrUpdatePerson();

    expect(mockAxios.history.post[0].url).toBe(`${BASE_URL}/save`);

    await wrapper.vm.$nextTick();

    expect(wrapper.vm.$notify.error).toHaveBeenCalledWith(
      "Não foi possível salvar o cadastro"
    );
  });
});
