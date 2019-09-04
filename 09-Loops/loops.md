###Loops

####Dry Code : Don't repeat yourself

##### While Loops : Repeat code WHILE a condition is true

```
While(someCondition) {
    //run some code
}
```

如果不在code之中改變someCondition的值，那麼將會一直符合條件，成為無窮迴圈(Infinite loops)。

##### Exercise 1
```
var num = 1;

while(num <= 10) {
  console.log(num);
  num += 2;
}

//1,3,5,7,9
```

##### Exercise 2
```
var num = 1

while(num <= 20) {
 if(num % 4 === 0){
   console.log(num);
 }
 num++;
}

//4,8,12,16,20
```

##### Exercise 3
```
var num = 100;

while(num < 150) {
  console.log(num + 1);
  num--;
}

// is an infinite loop
```

