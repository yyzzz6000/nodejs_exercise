function getShortMessages(messages) {
     return messages.map(obj => obj.message).filter(message => message.length < 50);
}

module.exports = getShortMessages
