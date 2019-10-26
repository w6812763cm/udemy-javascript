### Manipulating
#### Style Property Change
```
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Demo</title>
</head>
<body>
	<h1>Welcome to MY DOM Demo</h1>
	<p>Corgi mixes are <strong>super</strong> adorable</p>
	<img src="https://barrelhorseworld.com/dogs/images/1145556d.jpg">
	<img src="https://static.boredpanda.com/blog/wp-content/uploads/2017/05/corgi-mix-cross-breeds-18-591c39272d49f__605.jpg">
</body>
</html>
```
* Change font color through js

```
var h1 = document.querySelector("h1");
h1.style.color = "blue";
h1.style.border = "10px solid red;
h1.background = "grey";
```

#### Seperate of Concerns
* the code is not very dry code, we can add some class to our CSS then add class to h1 through js

##### CSS
```
.changing{
    color: blue;
    border: 10px solid red;
    background: grey;
}
```
##### JS
```
var h1 = document.querySelector("h1");
h1.classList.add("changing"); // add class
```

#### ClassList 

##### add
``` h1 classList.add("another-class");```
##### remove
``` h1 classList.remove("another-class");```
##### toggle - add or remove
* return true or false 
``` h1 classList.toggle("another-class");```
- - -
#### Manipulating Text and Content

##### textContent - 印出元素內不包含HTML TAG的所有文字

HTML
```<p>This is a <strong>special</strong> paragraph.</p>```

JS
```
var p = document.querySelector("p");
p.textContent // This is a special paragraph.
```
##### innerHTML - 印出元素內包含HTML TAG的所有文字

```
var p = document.querySelector("p");
p.innerHTML // This is a <strong>special</strong> paragraph.
```

##### * 無論是textContent或innerHTML，只要給予p新字串時，原本內容中的HTML TAG都會被取代。

##### * 若指定```document.body.textContent = <h1>Goodbye</h1>``` 則只會顯示```<h1>Goodbye</h1>```
##### * 若是document.body.innerHTML則會顯示h1樣式的Goodbye

- - -
#### Attributes

##### 取得Attribute (getAttribute)


###### HTML

```
<img src="https://static.boredpanda.com/blog/wp-content/uploads/2017/05/corgi-mix-cross-breeds-18-591c39272d49f__605.jpg">
```

###### JS
```
var img1 = document.querySelector("img");
img1.getAttribute("src"); //https://static.boredpanda.com/blog/wp-content/uploads/2017/05/corgi-mix-cross-breeds-18-591c39272d49f__605.jpg
```

#####改變Attribute (setAttribute)
```
img1.setAttribute("src", "https://images.unsplash.com/photo-1416304646406-414b1009dbe4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80");
```

###### Link setAttribute

###### HTML
```<a href="http://www.google.com">link to GOOGLE</a>```

###### JS
```
var a = document.querySelector("a");
a.setAttribute("href", "http://www.yahoo.com")
a.textContent = "link to YAHOO";