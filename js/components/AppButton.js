export default {
    template: `
        <button :disabled="processing" class="px-5 py-2 bg-gray-200 border rounded disabled:cursor-not-allowed hover:bg-gray-400"><slot /></button>
    `,
    data() {
        return {
            processing: false,
        };
    },
}
