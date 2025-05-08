{
  function formatString(input: string, toUpper: boolean = true): string {
    return toUpper ? input.toUpperCase() : input.toLowerCase();
  }

  //   console.log(formatString("Hello"));
  //   console.log(formatString("Hello", true));
  //   console.log(formatString("Hello", false));

  function filterByRating(
    items: { title: string; rating: number }[]
  ): { title: string; rating: number }[] {
    return items.filter((item) => item.rating >= 4);
  }

  const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 },
  ];
  //   console.log("Filtered Books:", filterByRating(books));

  function concatenateArrays<T>(...arrays: T[][]): T[] {
    return arrays.flat();
  }
  //   console.log("Concatenated Strings:", concatenateArrays(["a", "b"], ["c"]));
  //   console.log("Concatenated Numbers:", concatenateArrays([1, 2], [3, 4], [5]));

  class Vehicle {
    private make: string;
    private year: number;

    constructor(make: string, year: number) {
      this.make = make;
      this.year = year;
    }

    getInfo(): string {
      return `Make: ${this.make}, Year: ${this.year}`;
    }
  }

  class Car extends Vehicle {
    private model: string;

    constructor(make: string, year: number, model: string) {
      super(make, year);
      this.model = model;
    }

    getModel(): string {
      return `Model: ${this.model}`;
    }
  }

  const myCar = new Car("Toyota", 2020, "Corolla");
  // console.log(myCar.getInfo());
  // console.log(myCar.getModel());

  function processValue(value: string | number): number {
    return typeof value === "string" ? value.length : value * 2;
  }
  // console.log("Process 'hello':", processValue("hello"));
  // console.log("Process 10:", processValue(10));

  interface Product {
    name: string;
    price: number;
  }

  function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) return null;
    return products.reduce((max, product) =>
      product.price > max.price ? product : max
    );
  }

  const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 },
  ];
  // console.log("Most Expensive Product:", getMostExpensiveProduct(products));

  enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }

  function getDayType(day: Day): string {
    return day === Day.Saturday || day === Day.Sunday ? "Weekend" : "Weekday";
  }
  //   console.log("Day Type (Monday):", getDayType(Day.Monday));
  //   console.log("Day Type (Sunday):", getDayType(Day.Sunday));

  async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (n < 0) {
          reject(new Error("Negative number not allowed"));
        } else {
          resolve(n * n);
        }
      }, 1000);
    });
  }

    // squareAsync(4)
    //   .then(result => console.log("Square of 4:", result))
    //   .catch(error => console.error(error));

    // squareAsync(-3)
    //   .then(result => console.log("Square of -3:", result))
    //   .catch(error => console.error("Error:", error.message));
}
