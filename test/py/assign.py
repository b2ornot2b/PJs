#!/usr/bin/env python

# normal
a = 3
b = 3,4
print a, b
a,b = b,a
print a, b

# tuple assign
c, d = [4] + [5]
print c, d
a, (b,c) = 1, (2,3)
print b+c-a

# augassign
r = [3]
r += [1]
print r
a += 2
b /= 1
print a,b

# multi assign
mult = iple = 4
print mult
print iple
a,b = c = 3,4
print [a,b,c]

# subscript assign
f = {}
f[4]=r
f['6'] = []
f['6'] += [3,4]

# vim: et sw=4 sts=4
