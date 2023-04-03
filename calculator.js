let outputScreen=document.getElementById("output-screen");
function display(num){
    outputScreen.value +=num;
}
function Calculator(){
    try{
        outputScreen.value= eval(outputScreen.value);

    }
    catch(err)
    {
        alert("Invalid")
    }

}
function Clear(){
    outputScreen.value = "";

}
function Del(){
    outputScreen.value=outputScreen.value.slice(0,-1)
}
// Bu kod, bir hesap makinesi işlevi gerçekleştirmek için yazılmış bir JavaScript fonksiyonudur. Fonksiyonun adı "Calculator()" olarak belirlenmiştir.

// Fonksiyon, "try-catch" bloğu içinde yer alır. "try" bloğu, "outputScreen.value" özelliğinin değerini hesaplamak için "eval()" fonksiyonunu kullanır. "outputScreen" genellikle bir HTML form elemanıdır ve kullanıcı tarafından girilen sayıları veya işlemleri tutar. "eval()" fonksiyonu, bu sayıları veya işlemleri bir matematiksel ifadeye dönüştürür ve sonucunu "outputScreen.value" özelliğine atar.

// Ancak, kullanıcının yanlış bir ifade girmesi durumunda, "eval()" fonksiyonu hata verebilir. Bu nedenle, "catch" bloğu hatayı yakalar ve "Invalid" adlı bir uyarı mesajı gösterir.

// Yani, bu kod bir hesap makinesi işlevi gerçekleştirir ve kullanıcının girdiği ifadeyi matematiksel bir ifadeye dönüştürüp sonucunu ekrana yansıtır. Ancak, yanlış bir ifade girilirse, "Invalid" adlı bir hata mesajı gösterilir.