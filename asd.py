def countDuplicate(numbers, num_set):
    c = 0
    for i in (num_set):
        if (numbers.count(i) > 1):
            c += numbers.count(i)-1
    return c


n = int(input())
numbers = []
for i in range(n):
    numbers.append(int(input()))
num_set = list(set(numbers))

print(countDuplicate(numbers, num_set))
