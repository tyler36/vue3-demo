import AssignmentList from './AssignmentList.js';

export default {
    components: {
        AssignmentList
    },

    template: /*html*/`
        <div class="space-y-8">
            <assignment-list :assignments="filters.inProgress" title="In Progress"></assignment-list>
            <assignment-list :assignments="filters.completed" title="Completed"></assignment-list>

            <form @submit.prevent="add">
                <div className="text-black border border-gray-600">
                    <input v-model="newAssignment" placeholder="New Assignment ..." class="p-2">
                    <button type="submit" class="p-2 text-white border-left">Add</button>
                </div>
            </form>
        </div>
    `,

    data() {
        return {
            assignments: [
                {id: 1, name: 'Finish project', complete: false},
                {id: 2, name: 'Read Chapter 4', complete: false},
                {id: 3, name: 'Turn in Homework', complete: false},
            ],
            newAssignment: '',
        }
    },

    methods: {
        add() {
            this.assignments.push({
                id:       this.assignments.length + 1,
                name:     this.newAssignment,
                complete: false,
            });

            this.newAssignment = '';
        }
    },

    computed: {
        filters() {
            return {
                completed:  this.assignments.filter( item => item.complete),
                inProgress: this.assignments.filter( item => !item.complete),
            }
        }
    }
}
