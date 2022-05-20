import AssignmentList from './AssignmentList.js';
import AssignmentCreate from './AssignmentCreate.js';

export default {
    components: {
        AssignmentList,
        AssignmentCreate,
    },

    template: /*html*/`
        <section class="flex gap-8">
            <assignment-list :assignments="filters.inProgress" title="In Progress">
                <assignment-create @add="add"></assignment-create>
            </assignment-list>

            <assignment-list v-show="showCompleted" @toggle="showCompleted = !showCompleted" :assignments="filters.completed" title="Completed" can-toggle="true"></assignment-list>
        </section>
    `,

    data() {
        return {
            assignments: [],
            showCompleted: true,
        }
    },

    created() {
        fetch('http://localhost:3010/assignments')
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
