const downloadsFolder = Cypress.config('downloadsFolder');
import 'cypress-file-upload';

Cypress.Commands.add('fileMatching', (text, format) => {
    cy.task('getFiles', downloadsFolder).then((files) => {
  const matchingFile = files.find(file => file.includes(text));
  expect(matchingFile).to.exist;
  expect(matchingFile).to.match(format); 
})
})