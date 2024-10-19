# Debouncing - (Calling API on Searching Video)

Typing Slow : 200ms
Typing Fast : 30ms

Performance:

- iphone pro max = 14 letters
- if end user typing slow then 14 _ 200 _ 1000 = 28,00,000 (API Call requests will raise)
- if end user typing fast then 14 _ 30 _ 1000 = 4,20,000 (API Call requests will raise)

using Debouncing with 200ms

- if difference between 2 key-strokes is > 200ms - then we make API Call
- if difference between 2 key-strokes is not > 200ms - then we don't make API Call

# Buliding Cache for Search Suggestions

- Time complexity to search in an Array is = O(n) //Order of n
- example is [i, ip, iph, ipho, iphone]
- Time complexity to search in an Object is = O(1) //Order of 1 -- this is better
- example is { i, ip, iph, ipho, iphone}
