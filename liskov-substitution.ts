// class Product {
//   private id: string;
//   private name: string;
//   private category: string[];

//   constructor(id: string, name: string, category: string[]) {
//     this.id = id;
//     this.name = name;
//     this.category = category;
//   }

//   getName(): string {
//     return this.name;
//   }

//   getId(): string {
//     return this.id;
//   }

//   protected getCategory(): string[] {
//     console.log("root:getCategory");
//     return this.category;
//   }

//   private calculate() {}
// }

class Adidas extends Product {
  getCategory(): string[] {
    return ["NMD", "Samba OG", "YEEZY"];
  }
}

(() => {
  const adidas = new Adidas("", "", ["Sport", "Fashion", "Classic"]);
  adidas.getId();
  adidas.getName();
  console.log(adidas.getCategory());
})();
