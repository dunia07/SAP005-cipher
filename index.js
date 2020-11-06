//.addEventListener("click", function(event) = onclick="" no HTML
//.toUpperCase = transf. lower to upper
//Number() = transf. String to Number

import cipher from './cipher.js';

function encodeCipher(){

    let message = document.getElementById("message").value.toUpperCase();
    let offset = Number(document.getElementById("offset").value);
    let result = document.getElementById("result");
    let resultCipher = cipher.encode(offset, message);

    result.value=resultCipher;
}

function decodeCipher(){

    let message = document.getElementById("message").value.toUpperCase();
    let offset = Number(document.getElementById("offset").value);
    let result = document.getElementById("result");
    let resultCipher = cipher.decode(offset, message);

    result.value=resultCipher;
}


document.getElementById("encodeBtn").addEventListener("click", function(event){
    event.preventDefault();
    encodeCipher();
});
document.getElementById("decodeBtn").addEventListener("click", function(event){
    event.preventDefault();
    decodeCipher();
});