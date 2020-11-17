const alphabet = [
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
    const newPosition = (position + offset)%26;
    return alphabet[newPosition] 
  }
  else { return char }
  }