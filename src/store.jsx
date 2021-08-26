import create from "zustand";
import { devtools } from "zustand/middleware";
import produce from "immer";

var _ = require("lodash");

export const immer = (config) => (set, get) =>
  config((fn) => set(produce(fn)), get);

export const useStore = create(
  devtools(
    immer((set) => ({
      data: {
        _email: "",
        _userName: "",
        _password: "",
        location: "",
        age: "",
        bodyType: "Slim",
        ethnicity: "White",
        tagline: "",
        offer: "",
        images: [],
        unit: "inches",
        height: "140",
        education: "Graduate degree",
        smoker: "No",
        occupation: "Food services",
      },
      //   setData: (values) => set((state) => ({state.data:{ ...state.data, ...values}})),
      setData: (values) =>
        set((state) => ({ data: { ...state.data, ...values } })),
      set: (path, val) =>
        set((state) => {
          _.set(state, path, val);
        }),
    }))
  )
);
