export type HeaderData = {
  balance: number;
  nextPayout: number;
  currency: string;
};

export type Bonus = {
  title: string;
  description: string;
  link: string;
  promocode: string;
  activated: boolean;
};
