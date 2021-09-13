class Product {
  private id: string;
  private name: string;
  private category: string[];

  constructor(id: string, name: string, category: string[]) {
    this.id = id;
    this.name = name;
    this.category = category;
  }

  getName(): string {
    return this.name;
  }

  getId(): string {
    return this.id;
  }

  protected getCategory(): string[] {
    console.log("root:getCategory");
    return this.category;
  }

  private calculate() {}
}

class Gucci extends Product {
  getLabel() {
    console.log(this.getCategory());
  }
}

(() => {
  const product = new Product("", "", []);
  product.getId();
  product.getName();

  const gucci = new Gucci("", "", []);
  gucci.getId();
  gucci.getName();
  gucci.getLabel();
})();
