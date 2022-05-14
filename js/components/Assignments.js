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
            assignments: [],
        }
    },

    created() {
        fetch('http://localhost:3001/assignments')
            .then(response => response.json())
            .then( data => this.assignments = data )
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
