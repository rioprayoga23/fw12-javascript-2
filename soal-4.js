const data = {
  id: 1,
  name: "Leane Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
};

const datas = {
  ...data,
};

datas.name = "Rio Prayoga Teja Putra";
datas.email = "rio@gmail.com";
datas.hobby = "Playing Football";

console.log(datas);