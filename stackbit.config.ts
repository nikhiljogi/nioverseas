import { defineStackbitConfig } from '@stackbit/types';

export default defineStackbitConfig({
    "stackbitVersion": "~0.6.0",
    "nodeVersion": "18",
    "ssgName": "custom",
    "contentSources": [],
    "staticDir": "public", // Add this to include /public/ in the build
    "postInstallCommand": "npm i --no-save @stackbit/types"
});