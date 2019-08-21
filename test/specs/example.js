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
})