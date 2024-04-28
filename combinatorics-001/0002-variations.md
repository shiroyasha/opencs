# Variations

Variations are the number of ways a subset of items can be selected and arranged from a larger set of items.

For example:

Given a set of 5 objects: `{A, B, C, D, E}`, the number of ways 3 objects can be selected and arranged in a certain 
order is 5 x 4 x 3 = 60.

## Formula

The formula for the number of variations of selecting and arranging r objects from a set of 
n objects is:

$$ V_k^n = \frac{n!}{(n - k)!} $$

where:

- n is the total number of objects in the set.
- k is the number of objects to be selected and arranged.

## Example Problems

### How many ways can 3 books be selected and arranged from a set of 5 books?

Let's say the books are {A, B, C, D, E} and draw three blanks to represent the three positions in which the books can be arranged:

```
_ _ _
```

The first blank can be filled with any of the five books:

```
_ _ _
5
```

The second blank can be filled with any of the four remaining books:

```
_ _ _
5 4
```

The third blank can be filled with any of the three remaining books:

```
_ _ _
5 4 3
```

The choices for each blank are dependent on the choices made for the previous blanks. 
Therefore, we can use the multiplication principle to determine the total number of ways 
3 books can be selected and arranged from the set of 5 books:

5 x 4 x 3 = 60

or using the formula:

$$ V_3^5 = \frac{5!}{(5 - 3)!} = \frac{5!}{2!} = \frac{5 x 4 x 3 x 2 x 1}{2 x 1} = 60 $$

### Given a license plate with 3 letters followed by 3 digits, how many different license plates can be created if repetition of letters and digits is not allowed?

Let's say the letters can be selected from the set A-Z and the digits can be selected from the set 0-9.

We can draw six blanks to represent the six positions on the license plate:

```
__ __ __   __ __ __
```

The first blank can be filled with any of the 26 letters:

```
__ __ __   __ __ __
26
```

The second blank can also be filled with any of the leftover 25 letters:

```
__ __ __   __ __ __
26 25
```

The third blank can be filled with any of the remaining 24 letters:

```
__ __ __   __ __ __
26 25 24
```

The fourth blank can be filled with any of the 10 digits:

```
__ __ __   __ __ __
26 25 24   10
```

The fifth blank can be filled with any of the 9 remaining digits:

```
__ __ __   __ __ __
26 25 24   10  9
```

The sixth blank can be filled with any of the 8 remaining digits:

```
__ __ __   __ __ __
26 25 24   10  9  8
```

The choices for each blank are dependent on the choices made for the previous blanks.
Therefore, we can use the multiplication principle to determine the total number of ways
the license plate can be created:

26 x 25 x 24 x 10 x 9 x 8 = 1,872,000

or using the formula:

$$ V_3^26 \times V_3^10 = \frac{26!}{(26 - 3)!} \times \frac{10!}{(10 - 3)!} = \frac{26!}{23!} \times \frac{10!}{7!} = 26 x 25 x 24 x 10 x 9 x 8 = 1,872,000 $$
