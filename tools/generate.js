const {generateTemplateFiles} = require('generate-template-files');

generateTemplateFiles([
    {
        option: 'Create Joomla Admin Component',
        defaultCase: '(pascalCase)',
        entry: {
            folderPath: './tools/templates/joomla/admin/component',
        },
        stringReplacers: ['__component_name__', '__version__', '__items__', '__item__'],
        output: {
            path: './dist/components/__component_name__(lowerCase)/admin/',
            pathAndFileNameDefaultCase: '(lowerCase)',
            overwrite: true,
        },
    },
    {
        option: 'Create Joomla Admin MVC',
        defaultCase: '(pascalCase)',
        entry: {
            folderPath: './tools/templates/joomla/admin/mvc/'
        },
        stringReplacers: ['__component_name__', '__version__', '__items__', '__item__'],
        output: {
            path: './dist/components/__component_name__(lowerCase)/admin/',
            pathAndFileNameDefaultCase: '(lowerCase)',
        },
    },
    {
        option: 'Create Joomla Admin Controller',
        defaultCase: '(pascalCase)',
        entry: {
            folderPath: './tools/templates/joomla/admin/component/controllers/'
        },
        stringReplacers: ['__component_name__', '__items__', '__item__'],
        output: {
            path: './dist/components/__component_name__(lowerCase)/admin/controllers/',
            pathAndFileNameDefaultCase: '(lowerCase)',
        },
    },
    {
        option: 'Create Joomla Admin Model',
        defaultCase: '(pascalCase)',
        entry: {
            folderPath: './tools/templates/joomla/admin/models/'
        },
        stringReplacers: ['__component_name__', '__version__', '__items__', '__item__'],
        output: {
            path: './dist/components/__component_name__(lowerCase)/admin/',
            pathAndFileNameDefaultCase: '(lowerCase)',
        },
    },
    {
        option: 'Create Joomla Admin View',
        defaultCase: '(pascalCase)',
        entry: {
            folderPath: './tools/templates/joomla/admin/component/views/'
        },
        stringReplacers: ['__component_name__', '__items__', '__item__'],
        output: {
            path: './dist/components/__component_name__(lowerCase)/admin/views/',
            pathAndFileNameDefaultCase: '(lowerCase)',
        },
    }
]);