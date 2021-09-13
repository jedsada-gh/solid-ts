/***
 * The problem
    Let’s imagine that your application is responsible to process payments. 
     - Credit Card
     - Debit Card
     - Billet
     - Bitcoin
     - etc.
 */

type Payment = {
  clientId: string;
  amount: number;
  payload?: {};
};

interface PaymentMethod {
  charge(): Payment;
}

abstract class BasePayment {
  protected payment: Payment;
  constructor(payment: Payment) {
    this.payment = payment;
  }
}

class CreditCard extends BasePayment implements PaymentMethod {
  charge(): Payment {
    console.log("do something with credit card 🙌");
    return this.payment;
  }
}

class DebitCard extends BasePayment implements PaymentMethod {
  charge(): Payment {
    console.log("do something with debit card 🙌");
    return this.payment;
  }
}

class PaymentStrategy {
  private method: PaymentMethod;

  constructor(method: PaymentMethod) {
    this.method = method;
  }

  charge(): Payment {
    return this.method.charge();
  }
}

(() => {
  const creditCard = new CreditCard({ clientId: "1", amount: 90 });
  const debitCard = new CreditCard({ clientId: "2", amount: 99 });

  const strategy = new PaymentStrategy(debitCard);
  strategy.charge();
})();
