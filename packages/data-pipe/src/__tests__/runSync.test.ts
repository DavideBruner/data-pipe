import runSync from "../runSync";
import createTask from "../createTask";
import { Task } from "../types";

const dataMock = [
  { id: "id-1", title: "" },
  { id: "id-2", title: "" },
];

const SimpleTask: Task<any> = () => dataMock;
const MapDataTask: Task<any> = (data, options) =>
  data.map(({ id }: any) => options?.idsMap[id]);
const SimpleOptionsTask = (data: any, options: any) => options;

describe("runSync", () => {
  test("simple processor", () => {
    const { data } = runSync([SimpleTask]);
    expect(data).toBe(dataMock);
  });

  test("multiple processors", () => {
    const idsMap = { "id-1": "Human name", "id-2": "Human name 2" };
    const { data } = runSync([SimpleTask, MapDataTask], { idsMap });
    expect(data).toStrictEqual(Object.values(idsMap));
  });

  test("initial options", () => {
    const processors = [
      createTask(SimpleOptionsTask, {
        options: { customOption: "initial" },
      }),
    ];

    const { data, errors } = runSync(processors, {
      otherOption: "custom",
    });

    expect(data.customOption).toBe("initial");
  });

  test("custom options", () => {
    const processors = [
      createTask(SimpleOptionsTask, {
        options: { customOption: "initial" },
      }),
    ];

    const { data, errors } = runSync(processors, {
      otherOption: "custom",
    });

    expect(data.customOption).toBe("initial");
    expect(data.otherOption).toBe("custom");
  });

  test("errors", () => {
    const errorMessage = "Custom Error";
    const ErrorTask = () => {
      throw new Error(errorMessage);
    };

    const processors = [createTask(ErrorTask)];

    const { data, errors } = runSync(processors);
    expect(errors).toContain(errorMessage);
    expect(data).toBe(null);
  });
});
