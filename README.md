# Advent of code 2023
See https://adventofcode.com/2023 for tasks. 

# Solutions
## 10. December
### How to run
```
npm run test-10
```
The task is run in the test file "10/test/walkingRage.spec.ts" in the test "should handle fifth example"

### Notes
First I tried a recursive approach but this failed, because the the recursion would have reached to deep. 
After this I realized that recursion is in this example maybe elegant but not really necessary. 
In the task description it is given that the path forms a cycle which reaches the start position again.
Also it is given that the pipes always only connect two other pipes. 
This means that there is no branching possible except of the first tile. 
There it is given that the tile "S" could connect with every kind of pipe.  