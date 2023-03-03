import { mount } from "@vue/tests-utils";
import { FormularioContacto } from "@/FormularioContacto.vue";
test("montar", () => {
  const wrapper = mount(<FormularioContacto />);
  console.log(wrapper.html());
});
