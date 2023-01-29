<template>
  <base-input
    type="text"
    label="Pedido"
    placeholder="Informe o número do pedido"
    appendIcon="fas fa-search"
  >
  </base-input>
</template>

<script>
export default {
  name: "autocomplete",
  data() {
    return {
      search: "",
      fields: ["name", "email"],
      data: [
        { name: "John Doe", email: "johndoe@example.com" },
        { name: "Jane Smith", email: "janesmith@example.com" },
        { name: "Bob Johnson", email: "bobjohnson@example.com" },
      ],
    };
  },
  methods: {
    onInput(value) {
      console.log(value);
    },
  },
};
</script>
