const botonCifrar = document.getElementById("botonCifrar");
botonCifrar.addEventListener("click", code);

function code(){
    //Declare a variable for the original message, take its value and turn it into capital letters
    let originalMessage = document.getElementById ("originalMessage").value.toUpperCase();
    //Declare a variable for the offset, take its value and turn it into an integer number
    let offset = parseInt(document.getElementById ("offsetNumber").value);
    //Declare another variable for the final message
    let finalMessage = ""
    //Use a for cicle to apply the function to every character of the string
    for (let i = 0; i <originalMessage.lenght; i++){
        //Obtain the ASCII code
        let ascii = originalMessage.charCodeAt(i);
        //Apply the Math formula to obtain the character's new ASCII code
        let newAscii = (ascii -65 + offset) % 26 +65;
        //Create a conditional only for the case of spaces
        if (ascii === 32){
            newAscii = 32;
        }
        //Obtain the character of the new ASCII
        let result = String.fromCharCode(newAscii);
    }

    document.getElementById("newMessage").innerHTML = finalMessage;

    return finalMessage;
}





/*const alphabet = [
  'A','B','C','D','E','F', 'G','H','I','J','K','L', 'M','N','O','P','Q','R', 'S','T','U','V','W','X', 'Y','Z'
];

const form = document.forms[0];
const newMessage = document.getElementById('newMessage');

form.addEventListener ('submit',event => {
  event.preventDefault();
  output.innerHTML = [... form.plaintext.value ].map(char => encrypt(char)).join('');
}
);

function encrypt(char) {
  const offset = Number(form.offset.value);
  if (alphabet.includes(char.toUpperCase()))
  {
    const position = alphabet.indexOf(char.toUpperCase());
    console.log("position", position)
    const newPosition = (position + offset)%26;
    console.log("newPosition", newPosition)
    return alphabet[newPosition]
  }
  else { return char }
  }

  function decrypt(char) {
    const offset = Number(form.offset.value);
    if (alphabet.includes(char.toUpperCase()))
    {
      const position = alphabet.indexOf(char.toUpperCase());
      console.log("position", position)
      if (position == 0) {
      const newPosition = alphabet25;
      }
      const newPosition = (position - offset)%26;
      console.log("newPosition", newPosition)
      return alphabet[newPosition]
    }
    else { return char }
  }*/
