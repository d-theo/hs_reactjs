import itertools
#http://primes.utm.edu/lists/small/millions/
primes=open('primes1.txt')
f = open("prime.txt", "a")
lines=[]
for line in primes:
    l=filter(str.isalnum, map(str.strip, line.split(' ')))
    lines.append(l)

merged = list(itertools.chain(*lines))
for m in merged:
    f.write(m+"\n")

