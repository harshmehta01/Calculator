let string = "";
let buttons = document.querySelectorAll('.button');
for(item of buttons) {
    item.addEventListener('click', (e) => {
        ButtonText = e.target.innerText;
        console.log('Button text is ', ButtonText);
        if (ButtonText == '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if (ButtonText == 'C') {
            string = ""
            document.querySelector('input').value = string;
        }
        else {
            console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
}