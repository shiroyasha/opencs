class Main {
  public static void main(String[] args) {
    Person yuki = new Person("Yuki", "0101999821112");
    Person miska = new Person("Miska", "0201999821113");
    Person pisi = new Person("Pisi", "0301999821114");

    BankAccount yukiAccount1 = new BankAccount(yuki);
    BankAccount yukiAccount2 = new BankAccount(yuki);

    BankAccount miskaAccount1 = new BankAccount(miska);
    BankAccount miskaAccount2 = new BankAccount(miska);

    BankAccount pisiAccount2 = new BankAccount(pisi);
    BankAccount pisiAccount2 = new BankAccount(pisi);

    yukiAccount1.deposit(1000);

    yukiAccount1.transfer(yukiAccount2, 500);
    yukiAccount1.transfer(miskaAccount1, 500);

    miakaAccount1.transfer(pisiAccount1, 200);

    System.out.println(yukiAccount1);
    System.out.println(yukiAccount2);
    System.out.println(miskaAccount1);
    System.out.println(miskaAccount2);
    System.out.println(pisiAccount1);
    System.out.println(pisiAccount2);
  }
}

class BankAccount {
  Person owner;
  int balance;

  public BankAccount(Person owner) {
    this.onwer = onwer;
    this.balance = 0;
  }

  public void deposit(int amount) {
    if(amount > 0) {
      this.balance += amount;
    } else {
      System.out.println("You can't deposit a negative amount");
    }
  }

  public void withdraw(int amount) {
    if(amount > 0 && this.balance >= amount) {
      this.balance -= amount;
    } else {
      System.out.println("You can't withdraw a negative amount or more than your balance");
    }
  }

  public void transfer(BankAccount other, int amount) {
    if(this.owner.getJMBG() == other.owner.getJMBG()) {
      if(this.balance >= amount) {
        this.withdraw(amount);
        other.deposit(amount);
      } {
        System.out.println("You don't have enough money to transfer");
      }
    } else {
      if(this.balance >= amount + 19) {
        this.withdraw(amount + 19);
        other.deposit(amount);
      } else {
        System.out.println("You don't have enough money to transfer");
      }
    }
  }

  public String toString() {
    return this.owner.name + " " + this.balance + " RSD";
  }
}

class Person {
  String name;
  String jmbg;

  public Person(String name, String jmbg) {
    this.name = name;
    this.jmbg = jmbg;
  }

  public String getJMBG() {
    return this.JMBG;
  }
}
