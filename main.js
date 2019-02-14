function User(name, text) {
    this.name = name;
    this.text = text
}

let count = 0;

const listConversation = [
    'Puxa, JavaScript seria melhor :-(',
    'Posso te endicar uma pessoa ?',
    'Ele é master em JavaScrit',
    'Vou te passar o Site dele',
    '<a href="https://washingtondeveloper.com.br" target="_blank">https://washingtondeveloper.com.br</a>',
    'Visite o site :-)'
];

const conversations = [
    new User('Silvia', 'Qual linguagem de Programação você gosta?')
];

const content = document.querySelector('.content');
const inputText = document.querySelector('.form-input');

render();

document.querySelector('.form-btn')
    .addEventListener('click', e => {
        e.preventDefault();
        conversations.push(new User('Usuario', inputText.value));
        inputText.value = '';

        render();
        addMsgSilvia();
        myScroll();
    });

function render() {
    content.innerHTML = '';
    conversations
        .forEach(c => {
            content.innerHTML += `<p><b>${c.name}:</b> ${c.text}</p>`;
        });
}

function addMsgSilvia() {
    const msg = listConversation[count];
    if(msg)
        conversations.push(new User('Silva', msg));
    else {
        conversations.push(new User('Silva', 'Até mais :-)'));
        setTimeout(() => location.reload(), 2000);
    }
    count++;

    setTimeout(() => {
        render();
        myScroll();
    }, 1000);
}

function myScroll() {
    content.scrollTop = content.scrollTopMax;
}
