import { mount } from "@vue/test-utils";
import ProjectTable from "./ProjectTable.vue";

describe("Project Table component", () => {
  test("renders a table element", () => {
    const table = mount(ProjectTable, {
      propsData: {
        data: [],
      },
    });
    expect(table.find("table").exists()).toBe(true);
  });
});
