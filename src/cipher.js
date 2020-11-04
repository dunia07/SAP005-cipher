//implementar objeto cipher, o qual já está exportado no boilerplate. Este objeto (cipher) deve conter dois métodos:
//cipher.encode(offset, string): offset é o número de posições que queremos mover para a direita no alfabeto e string é a mensagem (texto) que queremos cifrar.
//cipher.decode(offset, string): offset é o número de posições que queremos mover para a esquerda no alfabeto e string é a mensagem (texto) que queremos decifrar.

//(codLetra + desloc) % (tamDoAlfab)
//((codLetraAscii - cod1aLetra + desloc) % tamDoAlfab) + cod1aLetra

//função parseInt = analisa argumento String e retorna inteiro (n precisa, offset tá type=number)
//função .charCodeAt() = muda de ASCII pra 0 a 25
//função String.fromCharCode() = retorna pra ASCII
//.lenght = descobrir o tamanho da String
//.split() = dividir/separar String

const cipher = {

  encode(offset, message){

    const codAsciiFirstLetter = 65;
    const alphabetSize = 26;
    let finalResult = "";

    for (let i=0; i<message.length; i++){
      let result = ((message.charCodeAt(i) - codAsciiFirstLetter + offset) % alphabetSize) + codAsciiFirstLetter;
      finalResult += String.fromCharCode(result);

    }

    /*let finalResult = "";

    for (let i=0; i<message.length; i++){

      if (message[i].charCodeAt() >=65 && message[i].charCodeAt() <=90){
        finalResult += String.fromCharCode((message[i].charCodeAt() - 65 + offset) % 26 + 65);
      } else if (message[i].charCodeAt >= 97 && message[i].charCodeAt() <=122){
        finalResult += String.fromCharCode((message[i].charCodeAt() - 97 + offset) % 26 + 97);
      } else {
        finalResult += String.fromCharCode((message[i].charCodeAt()));
      }

      return finalResult;
    }*/

    document.getElementById("result").innerHTML=finalResult;
    return finalResult;

  },

  decode(offset, message){
    
    const codAsciiFirstLetter = 65;
    const alphabetSize = 26;
    let finalResult = "";

    for (let i=0; i<message.length; i++){
      let result = ((message.charCodeAt(i) + codAsciiFirstLetter - offset) % alphabetSize) + codAsciiFirstLetter;
      finalResult += String.fromCharCode(result);

    }

    document.getElementById("result").innerHTML=finalResult;
    return finalResult;
  }
  
}

export default cipher;
