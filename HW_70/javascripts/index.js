(function () {
    'use strict';

    const socket = io(),
        messagesDiv = $('#messages'),
        messageInput = $('#message'),
        loginInput = $('#login');

    $(messagesDiv).hide();
    $('#messageForm').hide();
    socket.on('join', data => {
        messagesDiv.append('<p>' + data + '</p><br/>');
    });

    socket.on('message', msg => {
        if (msg.name && msg.message) {
            messagesDiv.append('<span>' + msg.name + ' says:' + msg.message + '</span><br/>');
        }
    });


    $('#messageForm').submit(e => {
        e.preventDefault();
        socket.emit('message', messageInput.val());
        messageInput.val('');
    });


    $('#loginForm').submit(e => {
        e.preventDefault();
        socket.emit('name', loginInput.val());

        $(messagesDiv).show();
        $('#messageForm').show();
        $('#loginForm').hide();
    });


    $('#leave').submit(e => {
        e.preventDefault();
        socket.emit('disconnect');
    });
}());