import { v4 as uuid } from "uuid";

export const DATA = [
  { name: "start", path: "/", id: uuid(), isBckDark: false },
  { name: "o mnie", path: "/about", id: uuid(), isBckDark: true },
  { name: "portfolio", path: "/portfolio", id: uuid(), isBckDark: false },
  { name: "kontakt", path: "/contact", id: uuid(), isBckDark: false },
];
