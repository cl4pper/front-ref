module.exports = {
    name: 'new:component',
    description: 'Creates a component template.',
    run: async toolbox => {
        const { print, parameters, template } = toolbox;

        if (!parameters.first) return print.error('Component name should be specified!');

        // generate component
        await template.generate({
            template: 'component.js.ejs',
            target: `src/components/${parameters.first}/component.jsx`,
            props: { name: parameters.first }
        });

        // generate tests
        await template.generate({
            template: 'test.js.ejs',
            target: `src/components/${parameters.first}/component.test.js`,
            props: { name: parameters.first }
        });

        // generate styles
        await template.generate({
            template: 'style.js.ejs',
            target: `src/components/${parameters.first}/component.scss`,
            props: { name: parameters.first }
        });

        return print.success(`${parameters.first} component created.`);
    }
}