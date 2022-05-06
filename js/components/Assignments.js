import AssignmentList from './AssignmentList.js';
import AssignmentCreate from './AssignmentCreate.js';

export default {
    components: {
        AssignmentList,
        AssignmentCreate,
    },

    template: /*html*/`
        <div class="space-y-8">
            <assignment-list :assignments="filters.inProgress" title="In Progress"></assignment-list>
            <assignment-list :assignments="filters.completed" title="Completed"></assignment-list>
            <assignment-create @add="add"></assignment-create>
        </div>
    `,

    data() {
        return {
            assignments: [
                {id: 1, name: 'Finish project', complete: false},
                {id: 2, name: 'Read Chapter 4', complete: false},
                {id: 3, name: 'Turn in Homework', complete: false},
            ],
        }
    },

    computed: {
        filters() {
            return {
                completed:  this.assignments.filter( item => item.complete),
                inProgress: this.assignments.filter( item => !item.complete),
            }
        }
    },

    methods: {
        add(name) {
            this.assignments.push({
                id:       this.assignments.length + 1,
                name:     name,
                complete: false,
            });
        }
    },
}
