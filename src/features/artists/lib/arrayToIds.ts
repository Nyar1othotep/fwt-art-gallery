interface IIds {
  _id: string;
}

export const arrayToIds = <T extends IIds>(array: T[]) =>
  array.map((item) => item._id);
