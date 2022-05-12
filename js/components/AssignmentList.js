import Assignment from './Assignment.js'
import AssignmentTags from './AssignmentTags.js';

export default {
    components: {
        Assignment,
        AssignmentTags,
    },

    template: /*html*/`
        <section v-show="assignments.length">
            <h2 class="font-bold mb-2">
                {{ title }}
                <span>( {{assignments.length}} )</span>
            </h2>

            <assignment-tags
                :inital-tags="assignments.map(item => item.tag)"
                :current-tag="currentTag"
                @change="currentTag = $event"
            />

            <ul class="flex flex-col border border-gray-600 divide-y divide-gray-600 mt-6" >
                <assignment
                    v-for="assignment in filtered"
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
    },

    data() {
        return {
            currentTag: 'all',
        }
    },

    computed: {
        filtered() {
            if (this.currentTag === 'all') {
                return this.assignments;
            }

            return this.assignments.filter( item => item.tag == this.currentTag );
        },
    },
}
