const URL = "https://my-json-server.typicode.com/northlanee/fake-db/";

export const API = {
  header: async () => {
    const res = await fetch(URL + "header");
    return res.json();
  },
  bonuses: async () => {
    const res = await fetch(URL + "bonuses");
    return res.json();
  },
};
