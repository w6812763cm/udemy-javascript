### JQuery
#### DOM Select 
* 以 $(selector)來選取元素等同於 querySelectorAll
* 選出來的結果是List

#### Manipulating Style
* $(selector).css(property, value)
* 可將要指定的style放入一個物件內
```
var styles = {
    backgroundColor : pink,  // use CamelCase(backgroundColor) 
    fontWeight: bold        
    };

$("#special").css(styles);
```