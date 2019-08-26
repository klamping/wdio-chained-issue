class Page {
    get missingParent () { return $('#missing-parent'); }
    get child () { return this.missingParent.$('.heading');; }
}

const page = new Page();

describe('Chained Selector Issue', function () {
    it('should not throw error if parent exists', function () {
        browser.url('./');

        const doesChildExist = $('#content').$('.heading').isExisting();

        console.log('Child exists?', doesChildExist);
    })

    it('should not throw error if parent does not exist', function () {
        browser.url('./');

        const doesChildExist = $('#missing-parent').$('.heading').isExisting();

        console.log('Child exists?', doesChildExist);
    })

    it('should not throw error if we check if parent exists', function () {
        browser.url('./');

        if ($('#missing-parent').isExisting() && $('#missing-parent').$('.heading').isExisting()) {
            console.log('Child exists!');
        } else {
            console.log('Child does not exist!');
        }
    })

    it('should not throw error if we check if parent exists using page object', function () {
        browser.url('./');

        if (page.missingParent.isExisting() && page.child.isExisting()) {
            console.log('Child exists!');
        } else {
            console.log('Child does not exist!');
        }
    })

    it('should not throw error if we check if child exists using page object', function () {
        browser.url('./');

        if (page.child.isExisting()) {
            console.log('Child exists!');
        } else {
            console.log('Child does not exist!');
        }
    })
})