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