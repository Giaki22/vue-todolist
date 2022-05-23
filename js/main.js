let app = new Vue({
    el: '#app',
    data: {
        toDoList: [
            {
                text: 'prova',
                done: false,
            },
            {
                text: 'prova 2',
                done: true,
            }
        ],
        index : 0,
    },
    methods: {
        removeToDo(index){
            this.toDoList.splice(index, 1);
        }
    }
})