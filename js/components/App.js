import Assignments from './Assignments.js';
import Panel from './Panel.js';

export default {
    components: {
        Assignments,
        Panel,
    },

    template: /*html*/`
    <div class="grid gap-4">
        <Assignments></Assignments>
        <Panel>
            Default content
        </Panel>

        <Panel>
            <template v-slot:heading>
                Title
            </template>

            Default content
        </Panel>

        <Panel theme="light">
            <template v-slot:heading>
                Title
            </template>

            Default content

            <template v-slot:footer>
                Here be dragons!
            </template>
        </Panel>
    </div>
    `,
}
