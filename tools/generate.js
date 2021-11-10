const {generateTemplateFiles} = require('generate-template-files');
const fs = require('fs');

let onComplete = async(results) => {

    let REG_APPEND = '__append';
    let REG_REPLACE_FULL = '__replace_full';
    let REG_REPLACE = '__replace';
    let REG_REPLACE_CONTENT = '###__replace__###';

    let files = results.output.files.filter((file) => file.indexOf(REG_APPEND) >= 0 || file.indexOf(REG_REPLACE_FULL) >= 0);

    for (let file of files) {

        if (file.indexOf(REG_APPEND) >= 0) {
            try {
                if (fs.existsSync(file)) {
                    let contentToAppend = fs.readFileSync(file);
                    fileToAppend = file.replace(REG_APPEND, '');

                    fs.appendFileSync(fileToAppend, contentToAppend);
                    fs.unlinkSync(file);
                }
              } catch(err) {
                console.error(err)
              }
        } else if (file.indexOf(REG_REPLACE_FULL) >= 0) {
            // como es un reemplazo, tenemos 2 archivos 
            // 1. El archivo solo la parte a agregar
            // 2. El archivo completo en caso de que no exista

            let fileComplete = file.replace(REG_REPLACE_FULL, '');
            let fileReplace = file.replace(REG_REPLACE_FULL, REG_REPLACE);

            // si ya existe en el destino el archivo completo, solo agrego.
            if (fs.existsSync(fileComplete)) {
                let contentOfFileComplete = fs.readFileSync(fileComplete).toString('utf8');
                let contentToReplace = fs.readFileSync(fileReplace).toString('utf8');

                if (contentOfFileComplete.indexOf(REG_REPLACE_CONTENT) >= 0) {    
                    let content = contentOfFileComplete.toString('utf8').replace(REG_REPLACE_CONTENT, contentToReplace.toString('utf8'));
                    fs.writeFileSync(fileComplete, content);
                } else {
                    let itemName = results.stringReplacers.find((item) => item.slot.indexOf('__items__') >= 0 ? true : false).slotValue;
                    fs.renameSync(fileReplace, fileReplace.replace(REG_REPLACE, itemName));
                }

                fs.unlinkSync(file);
                fs.unlinkSync(fileReplace);

            } else {
                fs.renameSync(file, fileComplete);
                fs.unlinkSync(fileReplace);
            }
        }
    }
}

generateTemplateFiles([
    {
        option: 'Admin Component',
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
        option: 'Admin MVC',
        defaultCase: '(pascalCase)',
        entry: {
            folderPath: './tools/templates/joomla/admin/mvc/'
        },
        stringReplacers: [{ question: 'Insert component name without "com_"', slot: '__component_name__' }, '__version__', '__items__', '__item__'],
        output: {
            path: './dist/components/com___component_name__(lowerCase)/admin/',
            pathAndFileNameDefaultCase: '(lowerCase)',
        },
        onComplete: onComplete
    },
    {
        option: 'Admin Model',
        defaultCase: '(pascalCase)',
        entry: {
            folderPath: './tools/templates/joomla/admin/models/'
        },
        stringReplacers: [{ question: 'Insert component name without "com_"', slot: '__component_name__' }, '__version__', '__items__', '__item__'],
        output: {
            path: './dist/components/com___component_name__(lowerCase)/admin/',
            pathAndFileNameDefaultCase: '(lowerCase)',
        },
        onComplete: onComplete
    },
    {
        option: 'Admin View',
        defaultCase: '(pascalCase)',
        entry: {
            folderPath: './tools/templates/joomla/admin/views/'
        },
        stringReplacers: [{ question: 'Insert component name without "com_"', slot: '__component_name__' }, '__items__', '__item__'],
        output: {
            path: './dist/components/com___component_name__(lowerCase)/admin/',
            pathAndFileNameDefaultCase: '(lowerCase)',
        },
        onComplete: onComplete
    },
    {
        option: 'Admin Controller',
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
        option: 'Site Component',
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
]);