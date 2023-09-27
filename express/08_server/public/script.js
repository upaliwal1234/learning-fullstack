

function refreshList() {
    $('#list').empty();
    $.get('/todos', (data) => {
        for (const item of data) {
            $('#list').append(`<li>${item}</li>`)
        }
    })
}

refreshList();

$('#btn').on('click', () => {
    const todo = $('#inp').val();
    function addTodo() {
        $.post('/todos', { todo }, (data) => {
            console.log(data);
            $('#inp').val("")
        });
    }
    addTodo();
    refreshList();
})