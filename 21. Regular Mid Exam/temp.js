function chatLogger() {
    const chat = [];
  
    function processCommand(command) {
      const parts = command.split(' ');
      const action = parts[0];
      const message = parts.slice(1).join(' ');
  
      switch (action) {
        case 'Chat':
          chat.push(message);
          break;
  
        case 'Delete':
          deleteMessage(message);
          break;
  
        case 'Edit':
          const editedVersion = parts.slice(2).join(' ');
          editMessage(message, editedVersion);
          break;
  
        case 'Pin':
          pinMessage(message);
          break;
  
        case 'Spam':
          const spamMessages = parts.slice(1);
          spamMessages.forEach(spamMessage => chat.push(spamMessage));
          break;
  
        case 'End':
          printChat();
          break;
  
        default:
          console.log('Invalid command:', command);
      }
    }
  
    function deleteMessage(message) {
      const index = chat.indexOf(message);
      if (index !== -1) {
        chat.splice(index, 1);
      }
    }
  
    function editMessage(message, editedVersion) {
      const index = chat.indexOf(message);
      if (index !== -1) {
        chat[index] = editedVersion;
      }
    }
  
    function pinMessage(message) {
      const index = chat.indexOf(message);
      if (index !== -1) {
        chat.splice(index, 1);
        chat.push(message);
      }
    }
  
    function printChat() {
      chat.forEach(message => console.log(message));
    }
  
    // Reading commands
    const readline = require('readline');
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  
    rl.on('line', command => {
      if (command === 'end') {
        rl.close();
      } else {
        processCommand(command);
      }
    });
  
    rl.on('close', () => {
      printChat();
    });
  }
  
  // Run the chat logger
  chatLogger(["Chat Hello",
  "Chat darling",
  "Edit darling Darling",
  "Spam how are you",
  "Delete Darling",
  "end"]);
  
