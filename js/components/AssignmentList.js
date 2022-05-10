import Assignment from './Assignment.js'

export default {
    components: {
        Assignment,
    },

    template: /*html*/`
        <section v-show="assignments.length">
            <h2 class="font-bold mb-2">
                {{ title }}
                <span>( {{assignments.length}} )</span>
            </h2>

            <div class="flex gap-2">
                <button
                    @click="currentTag = tag"
                    class="border rounded px-1 py-2 text-xs"
                    :class="{'border-blue-500 text-blue-500': tag === currentTag}"
                    v-for="tag in tags">
                    {{ tag }}
                </button>
            </div>

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

        tags() {
            return [
                'all',
                ... new Set( this.assignments.map( item => item.tag ) )
            ];
        },
    },
}
