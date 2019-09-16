### JS scope（範疇）
* Scope 是程式碼執行的內容之範疇
* Global Scope / Function Scope
    * 在Function內宣告的變數，在function裡頭有他自己的定義
    * 在Function內仍然可以使用outside已經宣告的變數(Function like as Child scope of Global Scope)
    * Function內如果將全域已宣告過的變數指定某數值(不重新宣告)，那麼將會改變變數的值，反之，如重新宣告，則視為新的變數
    * 每一Function有自己的變數，並不能分享。
