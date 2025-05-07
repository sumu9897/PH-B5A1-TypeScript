# TypeScript Basics - README

## 1. What are some differences between `interface` and `type` in TypeScript?

| Feature         | `interface`                          | `type`                                     |
|-----------------|--------------------------------------|---------------------------------------------|
| Extendable      | Can be extended using `extends`      | Can also use `&` to combine types           |
| Use Case        | Best for objects or class structure  | Can be used for anything (unions, primitives, etc.) |
| Reopening       | Can add new fields later             | Cannot reopen once declared                 |

### Example:

```ts
// Using interface
interface User {
  name: string;
  age: number;
}

// Using type
type Admin = {
  name: string;
  role: string;
};
```


## 2. What is the use of the `keyof` keyword in TypeScript?

- `keyof` gives you the keys (property names) of an object type as a union.

### Example:

```ts
type Person = {
  name: string;
  age: number;
};
type PersonKeys = keyof Person; // "name" | "age"

const key: PersonKeys = "name"; // 

```
## 3. What is type inference in TypeScript? Why is it helpful?

- TypeScript **automatically guesses the type** of a variable when you don't write it yourself.
- This is called **type inference**.

### Why it's helpful:
- Saves time  
- Reduces errors   
- Makes code shorter and cleaner 

### Example:

```ts
let name = "John"; // TypeScript knows it's a string

name = 123; // Error: number is not assignable to string
```


## 4. How does TypeScript help in improving code quality and project maintainability?

TypeScript helps in many ways to make your code better and your project easier to manage:

### Benefits:

- **Finds mistakes early**  
  TypeScript shows errors while you're writing code, so you fix problems before running it.

- **Better autocomplete**  
  Your code editor can suggest what to write next based on types, which saves time and reduces typos.

- **Clearer code**  
  Types explain what kind of data is expected, making it easier to understand what each part of your code does.

- **Team-friendly**  
  When working in a team, others can understand your code faster and make fewer mistakes.

- **Easier to refactor**  
  You can change your code structure more safely, because TypeScript will tell you what needs to be updated.
