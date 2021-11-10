# joomla-scaffolding
Scaffolding for Joomla! 3 - is to create a component, models, controllers, views or mvc with few steps.

## Install

```bash
npm install
```

## Use

Execute and follow the steps:
```bash
npm run-script generate
```

```bash
# Options
? What do you want to generate? ...
Admin Component
Admin MVC
Admin Controller
Admin Model
Admin View
Site Component
```

After that see in *dist* folder. When you use Joomla Admin MVC or Model the version should be upper than the current one in your component.

I recommend running in the following order:
```
1. Create Admin Component
2. Create Site Component
// After 1 and 2 we hace a simple component with 1 mvc.
3. Create Admin MVC
// It creates a new Model, View and Controller with Languages (if it already exists it will be appended, otherwise it will create a new one) and SQL (same as language)
```