// localStorage.personalData = JSON.stringify({
//     averageTimeOnSite: {unit: "hr", amt: 9},
//     probabilityOfFriends: 0.02,
//     commonKeywords: ["salsa for one", "1 vs. none Chess"]
//   }
// )
// //   console.log(localStorage.getItem("personalData"))

//   let object = JSON.parse(localStorage.getItem("personalData"))

// console.log(object);


let userStorage = {
    darkMode: true,
    showSideNav: false,
    defaultResultCount: 9,
    latestMarks: {
        sectionA: 92,
        sectionB: 11
    },
    cart: [
        { id: 3112, count: 2 },
        { id: 812, count: 16 }
    ]
}
localStorage.setItem("userStorage", JSON.stringify(userStorage))

let newobj = JSON.parse( localStorage.getItem("userStorage"))

console.log(newobj.cart[1].count);