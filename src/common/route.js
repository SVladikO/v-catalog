export const ROUTE_PATH = {
  CV: "/cv",
  HOME: '/',
  AUTHOR: "/about",
  PACKAGES: "/packages",
  TIME_TABLE_F: "/timetable-f",
  INCOME_CALCULATOR: "/time-calculator",
  ENGLISH_ALPHABET: "/english-alphabet"
}

export const QUERY_PARAMS = {
    HIDE_HEADER: 'h_header',
    HIDE_FOOTER: 'h_footer',
}

export const HEADER_MENU_LINKS = [
  {
    title: "$HEADER.MENU_ITEM.NP",
    path: ROUTE_PATH.PACKAGES
  },
  {
      title: "$HEADER.MENU_ITEM.AUTHOR",
      path: ROUTE_PATH.AUTHOR
  },
  {
    title: "$HEADER.MENU_ITEM.CV",
    path: ROUTE_PATH.CV
  },
];

export const FOOTER_MENU_LINKS = [
  {
    title: "$FOOTER.MENU_ITEM.HOME",
    path: ROUTE_PATH.HOME
  },
  {
    title: "$FOOTER.MENU_ITEM.NP",
    path: ROUTE_PATH.PACKAGES
  },
  {
      title: "$FOOTER.MENU_ITEM.AUTHOR",
      path: ROUTE_PATH.AUTHOR
  },
  {
    title: "$FOOTER.MENU_ITEM.CV",
    path: ROUTE_PATH.CV
  },
];