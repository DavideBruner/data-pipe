import base from "../../jest.config.base";
import pack from "./package.json";

export default {
  ...base,
  displayName: pack.name,
};
