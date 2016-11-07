var Bucky = {
  printFirstName: function(){
    console.log("My name is Bucky");
    console.log(this === Bucky); //true
  }
};
Bucky.printFirstName();

//The default calling context is global
function doSomethingWorthless() {
  console.log("\nMake it fresh");
  console.log(this === global);
}
doSomethingWorthless();
//
