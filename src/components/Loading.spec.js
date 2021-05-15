import { mount } from "@vue/test-utils";
import Loading from "./Loading.vue";

test("Loading component renders without crashing", () => {
  const wrapper = mount(Loading);
  expect(wrapper.text()).toContain("Loading...");
});
