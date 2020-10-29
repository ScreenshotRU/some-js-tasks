# Несколько задачек на JS

## Задача 1

**Реализовать функцию _sum_ таким образом, что бы**
sum(2,3) == sum(2)(3) == 5

## Задача 2

**Реализуйте bind2 - полный аналог bind в js**
***Пример:***
const sum = (x,y) => x + y;
const plusTen = sum.bind2(undefined, 10);
plusTen(1) //11
plusTen(10); //20

