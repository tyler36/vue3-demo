export default {
    template: /*html*/`
        <form @submit.prevent="add">
            <div className="text-black border border-gray-600">
                <input v-model="newAssignment" placeholder="New Assignment ..." class="p-2">
                <button type="submit" class="p-2 text-white border-left">Add</button>
            </div>
        </form>
    `,


    data() {
        return {
            newAssignment: '',
        }
    },

    methods: {
        add() {
            this.$emit('add', this.newAssignment );
            // this.assignments.push({
            //     id:       this.assignments.length + 1,
            //     name:     this.newAssignment,
            //     complete: false,
            // });

            this.newAssignment = '';
        }
    },

}
