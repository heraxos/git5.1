document.getElementById('btn1').onclick = (event) => {
    event.preventDefault();
    let number = document.getElementById('num').value;
    let price = document.getElementById('price').value;
    if((/\D/.test(number)) || (/\D/.test(price))){
        console.log('complete');
        document.getElementById('itog').innerHTML = "Not valid value";    }
    else{
        console.log('not complete');
        document.getElementById('itog').innerHTML = number*price ;
    }
}
