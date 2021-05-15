import { enableFetchMocks } from "jest-fetch-mock";
import { mount } from "@vue/test-utils";
import flushPromises from "flush-promises";
import App from "./App.vue";
import Loading from "./components/Loading.vue";
import ProjectTable from "./components/ProjectTable.vue";

enableFetchMocks();

describe("App component", () => {
  test("renders without crashing and renders a loading component on mount", async () => {
    const wrapper = mount(App);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.findComponent(Loading).exists()).toBe(true);
  });

  test("it displays project table when projects fetch is successfull", async () => {
    fetch.mockResponseOnce(JSON.stringify({ data: [] }));
    const wrapper = mount(App);
    await flushPromises();
    expect(wrapper.findComponent(ProjectTable).exists()).toBe(true);
  });

  test("handle & display error message when projects fetch fails", async () => {
    fetch.mockRejectOnce(new Error());
    const wrapper = mount(App);
    await flushPromises();
    expect(wrapper.text()).toContain("An error occured");
  });
});
