import Assignment from './Assignment.js'

export default {
    components: {
        Assignment,
    },

    template: /*html*/`
        <section v-show="assignments.length">
            <h2 class="font-bold mb-2">{{ title }}</h2>

            <ul class="flex flex-col">
                <assignment
                    v-for="assignment in assignments"
                    :key="assignment.id"
                    :assignment="assignment"
                ></assignment>
            </ul>
        </section>
    `,

    props: {
        assignments: {
            type: Array,
            default: [],
        },
        title: {
            type: String,
            default: 'Assignments',
        }
    }
}
