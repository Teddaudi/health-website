import {defineConfig} from 'sanity';
import {deskTool} from 'sanity/desk';

const config = defineConfig({
    projectId:"7rigqs60",
    dataset:"health",
    title:"Health",
    apiVersion:"2024-03-24",
    basePath:"/admin",
    plugins:[deskTool()],
});

export default config;