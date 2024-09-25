#!/usr/bin/python3
def add_tuple(tuple_a=(), tuple_b=()):
    if len(tuple_a) < 2:
        if len(tuple_a) == 0:
            tuple_a = 0, 0
        else:
            tuple_a = tuple_a[0], 0
    else:
        tuple_a = tuple_a[0], tuple_a[1]

    if len(tuple_b) < 2:
        if len(tuple_b) == 0:
            tuple_b = 0, 0
        else:
            tuple_b = tuple_b[0], 0
    else:
        tuple_b = tuple_b[0], tuple_b[1]

    return int(tuple_a[0]) + int(tuple_b[0]), int(tuple_a[1]) + int(tuple_b[1])