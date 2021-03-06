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

    if (offset == "" || offset == null || message == "" || message == null){
      throw new TypeError('User did not enter the data correctly', 'cipher.js', 23)
    } else {
      for (let i=0; i<message.length; i++){
        let result = ((message.charCodeAt(i) - codAsciiFirstLetter + offset) % alphabetSize) + codAsciiFirstLetter;
        finalResult += String.fromCharCode(result);

      }
    }
    return finalResult;

  },

  decode(offset, message){
    
    const codAsciiFirstLetter = 65;
    const alphabetSize = 26;
    let finalResult = "";

    if (offset == "" || offset == null || message == "" || message == null){
      throw new TypeError('User did not enter the data correctly', 'cipher.js', 42)
    } else {
      for (let i=0; i<message.length; i++){
        let result = ((message.charCodeAt(i) + codAsciiFirstLetter - offset) % alphabetSize) + codAsciiFirstLetter;
        finalResult += String.fromCharCode(result);

      }
    }
    return finalResult;
  }
  
}

export default cipher;
