let app = new Vue({
    el: '#app',
    data: {
        toDoList: [
            {
                text: 'Prova',
                done: false,
            },
            {
                text: 'Prova 2',
                done: true,
            }
        ],
        index : 0,
    },
    methods: {
        removeToDo(index){
            this.toDoList.splice(index, 1);
        },
        pushToDo(userText){
            if (!(this.toDoText.value == "")) {
                this.toDoList.push({text: this.toDoText.trim(), done: false});
                this.toDoText = "";
            }
        }
    }
})