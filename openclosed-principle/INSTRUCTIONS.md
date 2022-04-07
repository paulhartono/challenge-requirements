# Open-Close Principle

**[Open-Closed Pricinple](https://www.digitalocean.com/community/conceptual_articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design#open-closed-principle)** is the 2nd principle of the Object Oriented Design in the [SOLID](https://en.wikipedia.org/wiki/SOLID) Principles.

In software engineering, SOLID is a mnemonic acronym for five design principles intended to make software designs more understandable, flexible, and maintainable.

**Open-closed Principle** states that:
> Objects or entities should be `open` for extension but `closed` for modification.

This means that a class should be `extendable without modifying the class itself`.

## Use Case
One way you can notice whether your code require this design pattern, is when there are a lot of `if ... else if` clause, or `switch case` statements.

## What this code does?
This code illustrate an example where a piece of function is responsible to print a different types of questions.
Questions can be a type of boolean, multipleChoice, or a text. But we know that in future, there might be different types of questions we need to support such as "chooseAllTrueStatements", or "Range" questions, etc


## Task
How should we refactor the `printQuestions` function such that, it can be extensible for future usage without the need to modify the function again should we need to introduce a new Question type in the input parameter.


