new Vue({
    el: "#app",
    components: {
      draggable: window['vuedraggable'],
    },
    data() {
      return {
        newTodo: "",
        todos: [
          { id: 1, text: "Send job application", done: true },
          { id: 2, text: "Learn about Vue", done: false },
          { id: 3, text: "Learn about Fliplet", done: false },
          { id: 4, text: "Play around in JSFiddle", done: false },
          { id: 5, text: "Show us what you've got", done: false },
        ]
      };
    },
    computed: {
      incompleteTodos: {
        get() {
          return this.todos.filter(todo => !todo.done);
        },
        set(newList) {
          const completed = this.todos.filter(todo => todo.done);
          this.todos = [...newList, ...completed];
        }
      },
      completedTodos: {
        get() {
          return this.todos.filter(todo => todo.done);
        },
        set(newList) {
          const incomplete = this.todos.filter(todo => !todo.done);
          this.todos = [...incomplete, ...newList];
        }
      }
    },
    methods: {
      addTodo() {
        const text = this.newTodo.trim();
        if (text) {
          this.todos.push({
            id: Date.now(),
            text,
            done: false
          });
          this.newTodo = "";
        }
      },
      removeTodo(todo) {
        this.todos = this.todos.filter(t => t.id !== todo.id);
      }
    }
  });
  