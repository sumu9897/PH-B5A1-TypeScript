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

TypeScript improves code quality and makes a project more maintainable in several practical ways:

### Benefits:

- **Detects errors early**  
  TypeScript highlights issues during development, allowing problems to be fixed before running the code.

- **Improves editor support**  
  Code editors provide intelligent suggestions and autocompletion based on defined types, which reduces typos and speeds up development.

- **Makes code easier to understand**  
  By using types, it's clear what kind of data is expected, helping others (and the future self) to quickly grasp the purpose of each function or variable.

- **Supports team collaboration**  
  Clear type definitions help team members work on the same codebase with fewer misunderstandings and mistakes.

- **Simplifies code refactoring**  
  When changing the code structure, TypeScript highlights where updates are needed, making refactoring safer and more efficient.
