import { pexelSelectors } from "./selectors/testSelectors";
const imageDownloadIndex = Math.floor(Math.random() * 20) + 1;
    const downloadsFolder = Cypress.config('downloadsFolder');

describe('Pexels.com', () => {
  it('Download Images and Videos from Pexels.com', () => {
    cy.fixture('testData').then((testData) => {
    cy.visit(`https://www.pexels.com/search/${testData.searchTerm}`)
  })
    cy.get(pexelSelectors.imageDownloadButton).eq(imageDownloadIndex).click({force: true});
    cy.wait(4000)
cy.fileMatching('pexels', /\.jpg$/)
})
})
