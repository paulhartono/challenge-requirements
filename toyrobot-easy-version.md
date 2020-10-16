# Toy Robot Challenge

- The application is a simulation of a toy robot moving on a square tabletop, of dimensions 5 units x 5 units.
- There are no other obstructions on the table surface.
- The robot is free to roam around the surface of the table, so long as it is still on the table. Any movement 
  that is happening after the robot has fallen from the table must be ignore

- Create an application that can read in commands of the following form:

```
MOVE (DIRECTION)
REPORT
```

- The Code MUST run 
- Please provide README file and give instruction on how to test / run the application

- `DIRECTION` is either NORTH, SOUTH, EAST or WEST.
- The origin (0,0) can be considered to be the SOUTH WEST most corner and you can assume the Robot start at this position.
- The first valid command to the robot is a PLACE command, after that, any sequence of commands may be issued, in any order, including another PLACE command. The application should discard all commands in the sequence until a valid PLACE command has been executed.
- `MOVE` will move the toy robot one unit forward in the `DIRECTION` specified
- `REPORT` will announce the X,Y of the robot. This can be in any form, but standard output is sufficient.
- If Robot has fallen, `REPORT` command should tell that Robot is not on the table anymore.

- A robot that is not on the table must ignore the MOVE commands.
- CLI or any User Interface is not required on this exercise - we are more interested on how you approach the challenge
- Try not to use any third party library unless it is for build management or testing (eg: typescript module is ok and would be recommended)

- The Application startup code (ie. index.js or app.js) should contains some hardcoded test input (programmatically) 

Example Input and Output: 

a)
```
MOVE NORTH
REPORT
Output: 0,1
```

b)

```
MOVE EAST
MOVE EAST
MOVE NORTH
REPORT
Output: 2,1
```

c)

```
MOVE NORTH
MOVE NORTH
MOVE NORTH
MOVE NORTH
MOVE NORTH
REPORT
Output: Robot is not on table
```

<br />
 
----------------

Happy Coding :)
