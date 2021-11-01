import Cookies from "js-cookie";

const languages = [
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
];

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
  currentLanguage: languages.find(
    (language) => language.code === Cookies.get("i18next")
  ),
};

export const i18Reducer = (state = intialState, { payload, type }) => {
  switch (type) {
    case "SET_CURRENT_LANGUAGE":
      return {
        ...state,
        currentLanguage: languages.find(
          (language) => language.code === Cookies.get("i18next")
        ),
      };
    default:
      return state;
  }
};
