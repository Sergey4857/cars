export const theme = {
  // Colors
  color: {
    black: "#121417",
    fullWhite: "#FFFFFF",
    whiteFirst: "#f7f7fb",
    blue: "#3470ff",
    grayFirst: "#f7f7fb",
    grayThird: "#8a8a89",
    gray: "#005bb6",
    hover: "#0b44cd",

    transition: {
      main: "250ms cubic-bezier(0.165, 0.84, 0.44, 1.03)",
      modal: "300ms ease-in-out",
    },
    // <------------>

    graySecond: "rgba(239, 237, 232, 0.65)",

    grayFourth: "rgba(239, 237, 232, 0.05)",
    grayFifth: "rgba(239, 237, 232, 0.60)",
    grayBackground: "rgba(239, 237, 232, 1)",
    grayDisabled: "rgba(239, 237, 232, 0.2)",

    orangeFirst: "#E6533C",
    orangeSecond: "#EF8964",
    orangeThird: "#EFA082",

    border: "rgba(239, 237, 232, 0.30)",

    // hover

    hoverBorder: "#E6533C",

    // Modal window colors
    backdropBackground: "rgba(0, 0, 0, 0.6)",
    modalBackground: "#10100f",
    borderModal: "rgba(239, 237, 232, 0.2)",

    // Table colors
    tableLabel: "#EF8964",
    circleGreen: "#419B09",
    circleRed: "#E9101D",

    // Form colors
    label: "rgba(239, 237, 232, 0.50)",
    input: "rgba(239, 237, 232, 0.30)",
    inputActive: "#E6533C",
    inputSuccess: "#3CBF61",
    inputError: "#D80027",

    // Step indicator color
    default: "#303030",
  },

  // Breakpoints
  breakpoint: {
    firstMobile: "320px",
    mobile: "375px",
    tablet: "768px",
    desktop: "1440px",
  },

  // Animation (transition) on hover & focus

  // box-shadow
  boxShadow: {
    calendarButton: "0 0 5px 0.5px #EFEDE8, inset 0 0 5px 0px #EFEDE8",
    feedbackButton: "0 0 16px 0 #EFEDE8",
    dataIndicator: "0px 1px 10px 0px rgba(230, 83, 60, 0.80)",
  },
};
