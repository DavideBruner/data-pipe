import readData from "../readData";
import createProcessor from "../createProcessor";
import { Processor } from "../types";

const dataMock = [
  { id: "id-1", title: "" },
  { id: "id-2", title: "" },
];

const SimpleProcessor: Processor<any> = () => dataMock;
const MapDataProcessor: Processor<any> = (data, options) =>
  data.map(({ id }: any) => options?.idsMap[id]);
const SimpleOptionsProcessor = (data: any, options: any) => options;

describe("readData", () => {
  test("simple processor", () => {
    const { data } = readData([SimpleProcessor]);
    expect(data).toBe(dataMock);
  });

  test("multiple processors", () => {
    const idsMap = { "id-1": "Human name", "id-2": "Human name 2" };
    const { data } = readData([SimpleProcessor, MapDataProcessor], { idsMap });
    expect(data).toStrictEqual(Object.values(idsMap));
  });

  test("initial options", () => {
    const processors = [
      createProcessor(SimpleOptionsProcessor, {
        options: { customOption: "initial" },
      }),
    ];

    const { data, errors } = readData(processors, {
      otherOption: "custom",
    });

    expect(data.customOption).toBe("initial");
  });

  test("custom options", () => {
    const processors = [
      createProcessor(SimpleOptionsProcessor, {
        options: { customOption: "initial" },
      }),
    ];

    const { data, errors } = readData(processors, {
      otherOption: "custom",
    });

    expect(data.customOption).toBe("initial");
    expect(data.otherOption).toBe("custom");
  });

  test("errors", () => {
    const errorMessage = "Custom Error";
    const ErrorProcessor = () => {
      throw new Error(errorMessage);
    };

    const processors = [createProcessor(ErrorProcessor)];

    const { data, errors } = readData(processors);
    expect(errors).toContain(errorMessage);
    expect(data).toBe(null);
  });
});
