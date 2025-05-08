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

The `keyof` keyword is used to get all the property names (keys) of an object type as a union of string literals.

This helps write flexible and type-safe code when working with object keys.

### Example:

```ts
type Person = {
  name: string;
  age: number;
};

// keyof Person gives: "name" | "age"
type PersonKeys = keyof Person;

const key: PersonKeys = "name"; // valid
```

## 3. What is type inference in TypeScript? Why is it helpful?

Type inference means that TypeScript can figure out the type of a variable, even if you don’t explicitly write the type.

When a value is assigned during declaration, TypeScript automatically understands the type from the value.

### Why it’s helpful:

- Saves time by reducing the need to manually write types.
- Makes code cleaner and easier to read.
- Prevents mistakes by catching type-related errors early.

### Example:

```ts
let userName = "John"; // TypeScript infers this as a string

userName = 123; //  Error: number is not assignable to string
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
