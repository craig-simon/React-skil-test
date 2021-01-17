import { HeaderData, Bonus } from "sharedTypes";

export const createHeaderDataObject = (res: any): HeaderData => ({
  balance: res.balance,
  nextPayout: res.next_payout,
  currency: res.currency,
});

export const createBonusesArray = (res: any): Bonus[] => {
  return res.map(
    (bonus: any): Bonus => ({
      title: bonus.title,
      description: bonus.description,
      link: bonus.link,
      promocode: bonus.promocode,
      activated: false,
    })
  );
};
