### DOM (Documment Object Model) 文件物件模型
* DOM 是Javascript和HTML、CSS連接的接口(interface)
* HTML的元素(element)都是屬於物件(Object)

[參考 MDN](https://developer.mozilla.org/zh-TW/docs/Web/API/Document_Object_Model)


##### Selector Method
* document.getElementById() &rightarrow; ID比對抓取
* document.getElementsByClassName() &rightarrow; class比對抓取
    * return的資料是HTMLCollection不是Array
* document.getElementsByTagName() &rightarrow; 用Tag抓取
* document.querySelector() &rightarrow; 用CSS樣式抓取
    * 只抓取和回傳第一個match的
* document.querySelectorAll() &rightarrow;
    * return 全部match的element