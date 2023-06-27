function chatLogger(input) {
    let chat = [];
    for (let i = 0; i < input.length; i++) {
        let command = input[i].split(' ')[0];
        let message = input[i].split(' ').slice(1).join(' ');

        switch (command) {
            case 'Chat':
                chat.push(message);
                break;
            case 'Delete':
                if (chat.includes(message)) {
                    let index = chat.indexOf(message);
                    chat.splice(index, 1);
                }
                break;
            case 'Edit':
                let editedVersion = input[i].split(' ').slice(2).join(' ');
                if (chat.includes(message)) {
                    let index = chat.indexOf(message);
                    chat[index] = editedVersion;
                }
                break;
            case 'Pin':
                if (chat.includes(message)) {
                    let index = chat.indexOf(message);
                    chat.splice(index, 1);
                    chat.push(message);
                }
                break;
            case 'Spam':
                let messages = input[i].split(' ').slice(1);
                for (let j = 0; j < messages.length; j++) {
                    chat.push(messages[j]);
                }
                break;
            case 'end':
                console.log(chat.join('\n'));
        }
    }
}


// chatLogger(["Chat Hello",
// "Chat darling",
// "Edit darling Darling",
// "Spam how are you",
// "Delete Darling",
// "end"]);
// console.log('---------------------');
// chatLogger(["Chat Hello",
// "Delete John",
// "Pin Hi",
// "end"]);
// console.log('---------------------');
chatLogger(["Chat John",
    "Spam Let's go to the zoo",
    "Edit zoo cinema",
    "Chat tonight",
    "Pin John",
    "end"]);
