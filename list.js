const addButton = document.querySelector('.addButton');
var inputValue = document.querySelector('input');
const container = document.querySelector('.container');

class item{
    constructor(itemName){
        this.createDiv(itemName)
    }
    createDiv(itemName){
        let input = document.createElement('input')
        input.value = itemName;
        input.disabled = true;
        input.classList.add('iteminput');
        input.type = "text";

        let itembox = document.createElement('div');
        itembox.classList.add('item');

        let editButton = document.createElement('button');
        editButton.innerHTML = "EDIT";
        editButton.classList.add('editButton');

        let removeButton = document.createElement('button');
        removeeditButton.innerHTML = "REMOVE";
        removeButton.classList.add('removeButton')

        container.appendChild(itembox);

        itembox.appendChild(input);
        itembox.appendChild(editButton);
        itembox.appendChild(removeButton);

        editButton.addEventListener('click',() => this.edit(input));

        removeButton.addEventListener('click',() => this.remove(itembox));
        }
        edit(input){
            input.disabled = ! input.disabled;
        }
        remove(item){
            container.removeChild(item);
        }
    }
        function check(){
            if(input.value != ""){
                new item(input.value);
                input.value = "";
        }
     }



addButton.addEventListener('click'.check);
window.addEventListener('keydown', (e) => {
    if(e.which == 13){
        check();
    }
})

