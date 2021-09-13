interface CustomerModel {
  create: () => CustomerModel;
  lean: () => string;
}

class CustomerService implements ModelMethod {
  private customerModel: CustomerModel;

  constructor(customerModel: CustomerModel) {
    this.customerModel = customerModel;
  }
  update: () => void;
  delete: () => void;
  getId: (id: string) => string;
  getAll: () => string[];

  create() {
    this.customerModel.create().lean();
  }
}
