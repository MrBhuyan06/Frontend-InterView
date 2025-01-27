// Prove that when ever the function isn created the closure is created

function createClosure () {
   
    let count=0
    return function () {
        count++
        return count
    }
}
console.log(createClosure()());



let supperHero = {
  originalName: "Tony Stark",
  changeName: function (newName) {
    this.originalName = newName;
    console.log("parent:", this);
    const innerFunctions = () => {
      console.log("Inner Function :", this);
    };
    innerFunctions();
  },
};
supperHero.changeName("Iron Man")