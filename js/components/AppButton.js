export default {
    template: /*html*/`
        <button
            :class="{
                'px-5 py-2 border rounded disabled:cursor-not-allowed': true,
                'bg-blue-600 hover:bg-blue-700': type === 'primary',
                'bg-purple-200 hover:bg-purple-400': type === 'secondary',
                'bg-gray-200 hover:bg-gray-400': type === 'muted',
                'is-loading': 'processing',
            }"
            :disabled="processing" >
                <slot />
            </button>
    `,
    props: {
        processing: {
            type: Boolean,
            default: false
        },
        type: {
            type: String,
            default: 'primary'
        },
    }
}
