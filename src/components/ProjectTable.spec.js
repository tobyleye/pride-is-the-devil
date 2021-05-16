import { mount } from "@vue/test-utils";
import ProjectTable from "./ProjectTable.vue";

const testData = [
  {
    id: 1,
    country: "Togo",
    developer: "Kerluke, Howe and Hammes PLC",
    project_name: "Wuckert, Blanda and Crooks",
    sector: "Institutional/Public Sector",
    address: "16 Mohr Street 36215 AdamVille",
    region: "SvenVille",
    lga: "KamronVille",
    status: "On hold",
    main_contractor: "Gleason Group and Sons",
    architect: "Macejkovic-Donnelly Inc",
    quantity_surveyor: "Weimann, Douglas and Mertz PLC",
    structural_engineers: "Turcotte, Sawayn and Hansen Group",
    mep_engineer: "Howell-Hermiston LLC",
    project_manager: "Reichert, Oberbrunner and Hettinger and Sons",
    lift_contractor: "Zemlak, Hane and Kutch and Sons",
    bulk_earth_contractor: "Kuvalis Inc Group",
    other: null,
    author: 1,
    content_status: "publish",
    deleted_at: null,
    created_at: "2019-12-10 17:28:33",
    updated_at: "2019-12-10 17:28:33",
    latitude: "-75.287715",
    longitude: "63.447841",
    est_range: "$3M - $46M",
    state: "Wyoming",
    floors: 3,
    elec_engineer: "Towne PLC Ltd",
    piling_contractor: "O'Connell Ltd and Sons",
    legal_partners: "Kutch-Watsica PLC",
  },
];

describe("Project Table component", () => {
  test("renders a table element", () => {
    const table = mount(ProjectTable, {
      propsData: {
        data: [],
      },
    });
    expect(table.find("table").exists()).toBe(true);
  });

  test("display `view project` button when a project name is clicked", async () => {
    const table = mount(ProjectTable, {
      propsData: {
        data: testData,
      },
    });
    const firstRow = table.find("tbody tr:first-child");
    // before it's clicked
    expect(firstRow.find(".view-project").exists()).toBe(false);
    await firstRow.find("td.project-name-column").trigger("click");
    // after clicked;
    expect(firstRow.find(".view-project").exists()).toBe(true);
  });
});
