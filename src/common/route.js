export const ROUTE_PATH = {
  HOME: '/',
  GAMES: "/games",
  PACKAGES: "/packages",
  CV: "/cv",
  TIME_TABLE_F: "/timetable-f",
  SALARY_CALC: "/salary-calc"
}

export const HEADER_MENU_LINKS = [
  {
    title: "$HEADER.MENU_ITEM.GAME",
    path: ROUTE_PATH.GAMES
  },
  {
    title: "$HEADER.MENU_ITEM.NP",
    path: ROUTE_PATH.PACKAGES
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
    title: "$FOOTER.MENU_ITEM.GAME",
    path: ROUTE_PATH.GAMES
  },
  {
    title: "$FOOTER.MENU_ITEM.NP",
    path: ROUTE_PATH.PACKAGES
  },
  {
    title: "$FOOTER.MENU_ITEM.CV",
    path: ROUTE_PATH.CV
  },
];