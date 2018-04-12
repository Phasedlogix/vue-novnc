import vue from 'rollup-plugin-vue';
import uglify from 'rollup-plugin-uglify';
import resolve from 'rollup-plugin-node-resolve';

export default {
    input: 'src/vue-novnc.vue',
    output: [
        {
            name: 'VueNoVNC',
            file: 'dist/vue-novnc.min.js',
            format: 'umd'
        },
        {
            name: 'novnc',
            file: 'dist/vue-novnc.js',
            format: 'es'
        }
    ],
    plugins: [
        vue(),
        uglify(),
        resolve()
    ],
    external: ['@novnc/novnc']
};
