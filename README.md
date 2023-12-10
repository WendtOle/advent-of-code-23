# Advent of code 2023
See https://adventofcode.com/2023 for tasks. 

# Solutions
## 10. December
### How to run
```
npm run test-10
```
The first task is run in the test file "10/test/walkingRage.spec.ts" in the test "should handle fifth example".
The second task is run in the test file "10/test/surroundedTiles.spec.ts" in the test "should handle actual puzzle"

### Notes 10-1
First I tried a recursive approach but this failed, because the the recursion would have reached to deep. 
After this I realized that recursion is in this example maybe elegant but not really necessary. 
In the task description it is given that the path forms a cycle which reaches the start position again.
Also it is given that the pipes always only connect two other pipes. 
This means that there is no branching possible except of the first tile. 
There it is given that the tile "S" could connect with every kind of pipe.  

### Notes 10-2
The idea that you have to count the times you cross the loop on the way from outside to a specific point came to me relatively fast.
But it took me a while find out how to handle the different types of crossings. 