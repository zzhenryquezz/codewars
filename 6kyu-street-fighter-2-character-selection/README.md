Kata summary:

You'll have to simulate the video game's character selection screen behaviour, more specifically the selection grid. Such screen looks like this:

Selection Grid Layout in text:

```
| Ryu  | E.Honda | Blanka  | Guile   | Balrog | Vega    |
| Ken  | Chun Li | Zangief | Dhalsim | Sagat  | M.Bison |
```

**Input**

The list of game characters in a 2x6 grid;
The initial position of the selection cursor (top-left is (0,0));
A list of moves of the selection cursor (which are up, down, left, right);

**Output**

The list of characters who have been hovered by the selection cursor after all the moves (ordered and with repetition, all the ones after a move, wether successful or not);