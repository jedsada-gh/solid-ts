(() => {
  const requestId = "req_1";

  if (requestId) {
    updateRequest(requestId)
      .then((res) => {})
      .catch((err) => {});
  } else {
    createRequest()
      .then((res) => {})
      .catch((err) => {});
  }
})();

class User {
  get(id: string) {}

  getAll() {}

  create() {}

  update(id: string) {}

  delete(id: string) {}

  sendEmail() {}

  addContact(contact: {}) {}

  removeContact(contact: {}) {}

  getContact(id: string) {}

  getAllContact() {}
}

(() => {
  const shapes = [circle(2), square(5), square(6)];

  const circle = (radius) => {
    const proto = {
      type: "Circle",
      //code
    };
    return Object.assign(Object.create(proto), { radius });
  };

  const square = (length) => {
    const proto = {
      type: "Square",
      //code
    };
    return Object.assign(Object.create(proto), { length });
  };
})();
