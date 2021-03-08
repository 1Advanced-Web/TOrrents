const wrapper = document.querySelector(".input-wrapper"),
      textInput = document.querySelector("input[type='text']");
        
textInput.addEventListener("keyup", event => {
  wrapper.setAttribute("data-text", event.target.value);
});


let comment_btn = document.getElementById('comment_btn');
let comment_input = document.getElementById('comment_input');
let content = document.getElementById('content');
let conteiner_for_js_one = document.getElementById('conteiner_for_js_one');
let line_one = document.getElementById('line_one');
let max_size = document.getElementById('max_size');
let comments_none = document.getElementById('comments_none');



comment_input.addEventListener('click', function(){
	setTimeout(function() {comment_btn.style.display = 'block'}, 3000);
})
content.addEventListener('click', function(){
	comment_btn.style.display = 'none';
})
max_size.addEventListener('click', function(){
	comments_none.style.display = 'block';
	content.style.height = '4500px';
	max_size.style.display = 'none';
})