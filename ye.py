def euclid(x, y):
    """
    Implements the euclid algorithm to find the GCD
    of x and y in linear combination form. This
    function returns a tuple (gcd, s, t) where
    gcd = s*x + t*y.
    """
    if x == 0:
        return (y, 0, 1)
    (gcd, s, t) = euclid(y % x, x)
    return (gcd, t - (y // x) * s, s)


gcd, s, t = euclid(19, 28560)
print("d =", s % 28560)