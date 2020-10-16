# Appointment Code Challnge

## Requirements

1. Write code and tests to satisfy the problem outlined below.
2. Link to your git repository
3. Your app must run
4. README.md - it should provide a clear how to setup and run your app
5. Appropriate unit and/or integration tests included with your source code (these should be runnable)
6. (Optional) Dockerise your solution

## Problem

Given the starting time and duration (in minutes) of two appointments, determine whether or not they conflict. 
You can model the appointment however you like, but the function should return `true` if they conflict, and `false` if they don't.

Examples:

- `[[2020-01-01 06:00, 20], [2020-01-01 08:00, 60]] -> false`
- `[[2020-01-06 08:00, 120], [2020-01-06 09:15, 15]] -> true`
