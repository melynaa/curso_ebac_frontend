$(document).ready(function() {

    $('#form-tarefa').on('submit', function(e) {
        e.preventDefault();

        const tarefa = $('#nome-tarefa').val();

        $('#lista-tarefas').append('<li>' + tarefa + '</li>');

        $('#nome-tarefa').val('');
    });

    $('#lista-tarefas').on('click', 'li', function() {
        $(this).toggleClass('concluida');
    });

});