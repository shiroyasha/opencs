# Permutations and Arrangements

Arrangements of a set of objects is the nubmer of ways the objects can be arranged in 
a certain order, we call this the number of permutations of the objects.

For example:

Given a set of 3 objects: {A, B, C}, the number of ways the objects can be arranged in
a certain order is 3 x 2 x 1 = 6. The arrangements are: ABC, ACB, BAC, BCA, CAB, CBA.

The formula for the number of arrangements of n objects is n! (n factorial). The factorial
of a number is the product of all positive integers less than or equal to the number. For
example, 5! = 5 x 4 x 3 x 2 x 1 = 120.

## Formula

The formula for the number of arrangements of n objects is n! (n factorial).

## Example Problems

### How many ways can the letters in the word "MATH" be arranged?

Let's say the letters in the word "MATH" are {M, A, T, H} and draw four blanks to represent
the four positions in which the letters can be arranged:

```
_ _ _ _
```

The first blank can be filled with any of the four letters:

```
_ _ _ _
4
```

The second blank can be filled with any of the three remaining letters:

_ _ _ _
4 3

The third blank can be filled with any of the two remaining letters:

_ _ _ _
4 3 2

The fourth blank can be filled with the remaining letter:

_ _ _ _
4 3 2 1

The choices for each blank are dependent on the choices made for the previous blanks. Therefore,
we can use the multiplication principle to determine the total number of ways the letters in the
word "MATH" can be arranged:

4 x 3 x 2 x 1 = 24

### Given four different books, how many ways can they be arranged on a shelf?

Let's say the books are {A, B, C, D} and draw four blanks to represent the four positions on the
shelf:

_ _ _ _

The first blank can be filled with any of the four books:

_ _ _ _
4

The second blank can be filled with any of the three remaining books:

_ _ _ _
4 3

The third blank can be filled with any of the two remaining books:

_ _ _ _
4 3 2

The fourth blank can be filled with the remaining book:

_ _ _ _
4 3 2 1

Using the multiplication principle, we can determine the total number of ways the four books can be
arranged on the shelf:

4 x 3 x 2 x 1 = 24
