const intialState = {
  languages: [
    {
      code: "en",
      name: "English",
      country_code: "gb",
      dir: "ltr",
    },
    {
      code: "ar",
      name: "العربية",
      country_code: "eg",
      dir: "rtl",
    },
  ],
};

export const i18Reducer = (state = intialState, { payload, type }) => {
  switch (type) {
    case "SET_CURRENT_LANGUAGE":
      return {
        ...state,
      };
    default:
      return state;
  }
};
