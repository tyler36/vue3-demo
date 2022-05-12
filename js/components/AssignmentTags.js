export default {
    template: /*html*/`
        <div class="flex gap-2">
            <button
                @click="$emit('change', tag)"
                class="border rounded px-1 py-2 text-xs"
                :class="{'border-blue-500 text-blue-500': tag === currentTag}"
                v-for="tag in tags">
                {{ tag }}
            </button>
        </div>
    `,

    props: {
        currentTag: {
            default: 'all',
            type: String,
        },
        initalTags: {
            default: [],
            type: Array,
        }
    },


    // data() {
    //     return {
    //         currentTag: 'all',
    //     };
    // },


    computed: {
        tags() {
            return [
                'all',
                ... new Set( this.initalTags )
            ];
        },
    },
}
