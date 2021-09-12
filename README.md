# CLI RPN Calculator

## Description of my solution

Given the user input string in the CLI, I decided to go through the input until a operation symbol is found. Once found, I perform the correspondent operation to the previous 2 numbers found.

The user also has the ability to input single numbers or operation symbols so I decided that there is a need of "state" where to save the necesary data to compute the different operations based on the input.

## Technical choices

As my main programming language is Javascript, I decided to build the CLI in Node.js. To be honest, it was my first time building such a thing and using the power of Node.js and readline.

I keep it simple, no extra dependencies, one entry point and a file that holds the calculation logic.

## Trade-offs

If i would have more time, i would validate better the user input.

## To run the code

### Requirements

- Node.js preferably the latest stable version. You can find it here: [Node homepage](https://nodejs.org/). Installation is pretty straigh forward.

### Run the code!

- Clone the repository
- Navigate to the root folder of the project.
- In the command line run the following command:

```cli
node .
```

And you should be done! 🚀
Now you should be able to start entering operations in a reverese polish notation format.

For example, try to enter the following operation:

```cli
> 5 5 5 8 + + -
```

The output should be:

```cli
> -13
```
