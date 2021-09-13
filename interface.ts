interface Customer {
  id: string;
  name: string;
  age: number;
  address: string;
  email: string;
}

interface ProductMethod {
  getId: () => string;
  getName: () => string;
  getCategory: () => string[];
}

interface ModelMethod {
  create: () => void;
  update: () => void;
  delete: () => void;
  getId: (id: string) => string;
  getAll: () => string[];
}

class UserService implements ModelMethod {
  private userModel: UserModel;

  constructor(userModel: UserModel) {
    this.userModel = userModel;
  }

  create() {
    this.userModel.create().lean();
  }

  update: () => void;
  delete: () => void;
  getId: (id: string) => string;
  getAll: () => string[];
}

class Nike implements ProductMethod {
  getCategory: () => string[];
  getId: () => string;
  getName: () => string;

  private calculate() {}
}

interface UserModel {
  create: () => UserModel;
  lean: () => string;
}
