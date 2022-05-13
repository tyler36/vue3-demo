export default {
    template: /*html*/`
        <div class="flex gap-2">
            <button
                @click="$emit('update:currentTag', tag)"
                class="border rounded px-1 py-2 text-xs"
                :class="{'border-blue-500 text-blue-500': tag === currentTag}"
                v-for="tag in tags">
                {{ tag }}
            </button>
        </div>
    `,

    props: {
        currentTag: String,
        initalTags: {
            default: [],
            type: Array,
        }
    },


    computed: {
        tags() {
            return [
                'all',
                ... new Set( this.initalTags )
            ];
        },
    },
}
