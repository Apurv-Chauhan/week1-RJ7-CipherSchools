let object = {
    name: "John",
    age: 24,
    address: {
        city: "Jalandhar",
        state: "Punjab",
        country: "India",
    },
};

let object1 = {...object};
object1.address.city = "Phagwara";
console.log(object1);