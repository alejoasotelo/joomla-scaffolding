const {generateTemplateFiles} = require('generate-template-files');

generateTemplateFiles([
    {
        option: 'Create Admin Component',
        defaultCase: '(pascalCase)',
        entry: {
            folderPath: './tools/templates/joomla/admin/component',
        },
        stringReplacers: [{ question: 'Insert component name without "com_"', slot: '__component_name__' }, '__version__', '__items__', '__item__'],
        output: {
            path: './dist/components/com___component_name__(lowerCase)/admin/',
            pathAndFileNameDefaultCase: '(lowerCase)',
            overwrite: true,
        },
    },
    {
        option: 'Create Site Component',
        defaultCase: '(pascalCase)',
        entry: {
            folderPath: './tools/templates/joomla/site/component',
        },
        stringReplacers: [{ question: 'Insert component name without "com_"', slot: '__component_name__' }, '__items__', '__item__'],
        output: {
            path: './dist/components/com___component_name__(lowerCase)/site/',
            pathAndFileNameDefaultCase: '(lowerCase)',
            overwrite: true,
        },
    },
    {
        option: 'Create Admin MVC',
        defaultCase: '(pascalCase)',
        entry: {
            folderPath: './tools/templates/joomla/admin/mvc/'
        },
        stringReplacers: [{ question: 'Insert component name without "com_"', slot: '__component_name__' }, '__version__', '__items__', '__item__'],
        output: {
            path: './dist/components/com___component_name__(lowerCase)/admin/',
            pathAndFileNameDefaultCase: '(lowerCase)',
        },
    },
    {
        option: 'Create Admin Controller',
        defaultCase: '(pascalCase)',
        entry: {
            folderPath: './tools/templates/joomla/admin/component/controllers/'
        },
        stringReplacers: [{ question: 'Insert component name without "com_"', slot: '__component_name__' }, '__items__', '__item__'],
        output: {
            path: './dist/components/com___component_name__(lowerCase)/admin/controllers/',
            pathAndFileNameDefaultCase: '(lowerCase)',
        },
    },
    {
        option: 'Create Admin Model',
        defaultCase: '(pascalCase)',
        entry: {
            folderPath: './tools/templates/joomla/admin/models/'
        },
        stringReplacers: [{ question: 'Insert component name without "com_"', slot: '__component_name__' }, '__version__', '__items__', '__item__'],
        output: {
            path: './dist/components/com___component_name__(lowerCase)/admin/',
            pathAndFileNameDefaultCase: '(lowerCase)',
        },
    },
    {
        option: 'Create Admin View',
        defaultCase: '(pascalCase)',
        entry: {
            folderPath: './tools/templates/joomla/admin/component/views/'
        },
        stringReplacers: [{ question: 'Insert component name without "com_"', slot: '__component_name__' }, '__items__', '__item__'],
        output: {
            path: './dist/components/com___component_name__(lowerCase)/admin/views/',
            pathAndFileNameDefaultCase: '(lowerCase)',
        },
    }
]);