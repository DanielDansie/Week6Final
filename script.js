function createResponse(display, comment) {
   let i = $(`<div class="response">
              <img src="https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?b=1&k=20&m=1300845620&s=170667a&w=0&h=JbOeyFgAc6-3jmptv6mzXpGcAd_8xqkQa_oUK2viFr8=" />
              <div>
                <div class="response-header">
                    <span class="displayName">${display}</span>
                    <button class="edit btn">Edit</button>
                    <button class="delete btn">Delete</button>
                </div>
                <p class="comment">${comment}</p>
                <div class="noDisplay editBox">
                    <input class="editComment" value="${comment}" placeholder="Edit Comment">
                    <button class="submit btn">Submit</button>
                </div>
              </div>
            </div>`);
        i.on('click', '.edit', function() {
            let editBox = $(this).parent().next().next();
            editBox.toggleClass('noDisplay');
        });
        i.on('click', '.delete', function() {
            let deleteBox = $(this).parent().parent();
            deleteBox.remove('div.response');
        });
        i.on('click', '.submit', function() {
            let submitButton = $(this).parent();
            submitButton.toggleClass('noDisplay');

            let comment = $(this).prev().val();

            let pTag = $(this).parent().prev();
            pTag.text(comment);
        });
        return i;
}

$('#submitBtn').on('click', function() {
    let display = $('#displayName').val();
    if(display.length < 1) {
    return;
    }

    let comment = $('#comment').val();
    if(comment.length < 1) {
        return;
    }

    let response = createResponse(display, comment);
    $('#responses').prepend(response);
});