const assert = require('assert')
Feature('Sample Feature')
// we are passing the object {I} which is a codeceptjs object and contains all the functions we need
Scenario('First test', ({ I }) => {
	I.amOnPage('https://www.example.com') //to open the browser
	I.wait(1) // pass number on seconds, NOT miliseconds
	I.saveScreenshot('test.png', true) //filename and full screen true/false(default)
	I.see('Example') //if a text element is visible
	I.dontSee('Berserk') // the opposite
	I.seeElement('h1')
	I.dontSeeElement('#noExistingDiv')
})
Scenario('Second test', ({ I }) => {
	I.amOnPage('https://www.example.com') //to open the browser
	I.wait(2) // pass number on seconds, NOT miliseconds
})
Scenario('Third test', async ({ I }) => {
	I.amOnPage('https://www.example.com') //to open the browser
	const text = await I.grabTextFrom('h1') // we ae grabbing/extracting a text value and storing it into a variable
	console.log(text)
	I.wait(3) // pass number on seconds, NOT miliseconds
	assert.strictEqual(
		text,
		'Exacxczmple Domaisadn',
		` This is the error message in case of failure, so the text didnt match with the "${text}" text`
	) // value, string to match & error message in case of nedded.
})
