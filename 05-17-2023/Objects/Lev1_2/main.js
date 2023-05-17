const person = {
  name: "Roman",
  alter: 32,
  sagNameAlter: () => {
    return alert(
      ` Hallo, mein Name ist ${person.name} und ich bin ${person.alter} alt.`
    );
  },
};

console.log(person.name, person.alter);
console.log(person.sagNameAlter());
