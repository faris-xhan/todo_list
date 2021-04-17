function createTask(task){
    if(task.value) { 
        const li_item = document.createElement('li');

        const p = document.createElement('p');
        const p_text = document.createTextNode(task.value);
        p.append(p_text);

        const btn = document.createElement('button');
        const btn_text = document.createTextNode('X');
        btn.append(btn_text);

        li_item.append(p, btn);

        li_item.classList.add('task');
        btn.classList.add('delete');
        task.value = ""
        return li_item;
    };
};

function removeTask(e){
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove()
    }
}


const btn = document.querySelector('.bar--addbtn');
btn.addEventListener('click', () => {
    let input = document.querySelector('.bar--input');
    let li = createTask(input);
    if(li){
        const list = document.querySelector('.tasks')
        list.append(li);
        
    } else {
        console.log('Empty')
    }
    input.focus();
});
const input = document.querySelector('.bar--input');
input.addEventListener('keyup', (event) => {
    if(event.key === 'Enter'){
        let input = document.querySelector('.bar--input');
        let li = createTask(input);
        if(li){
            const list = document.querySelector('.tasks')
            list.append(li);
            
        } else {
            console.log('Empty')
        }
        input.focus();
    }
})
const list = document.querySelector('.tasks');

list.addEventListener('click', removeTask);

