# Advent of code 2023
See https://adventofcode.com/2023 for tasks. 

# How to run
Look in the package.json. 
There should be for every day a testing command like the following:
```
npm run test-10
```

# Solutions

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

### Notes 11-1
Calculating the distance in grid was actually not that hard as I thought in the first place.
Finding the combination between all stars without duplications took me longer than expected but not that long in total.

### Notes 11-2
After solving this task it seems for easier to express the scaling of empty rows and columns by jumps than by rebuilding the scaling inside an array.
