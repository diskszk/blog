type Style = {
  [key: string]: {
    pc: string;
    sp: string;
  };
};

export const styles = {
  headerHeight: {
    pc: "112px",
    sp: "64px",
  },
  footerHeight: {
    pc: "64px",
    sp: "32px",
  },
} satisfies Style;
