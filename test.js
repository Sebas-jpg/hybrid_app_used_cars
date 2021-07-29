import { Selector } from 'testcafe';

fixture `Getting Started`
    .page `http://127.0.0.1:5500/index.html`;

test('Leave textbox blank', async t => {
    await t
        .click('#calculator')
        .click('#calculate-button')
        .expect(Selector('.alert-dialog-content').innerText).eql('For the amount you need to enter an integer from 100 to 20000')
        .click('.alert-dialog-button')
});