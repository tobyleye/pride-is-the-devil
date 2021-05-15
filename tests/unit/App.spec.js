import { mount } from "@vue/test-utils";
import App from "@/App.vue";

describe("App component", () => {
  test("renders without crashing", () => {
    const wrapper = mount(App);
    console.log("app html-->", wrapper.html());
    expect(wrapper.exists()).toBe(true);
  });
});
