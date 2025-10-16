import { pexelSelectors } from "./selectors/testSelectors";
const imageDownloadIndex = Math.floor(Math.random() * 20) + 1;


describe('Pexels.com', () => {
it('Download Videos from Pexels.com', () => {
    cy.fixture('testData').then((testData) => {
    cy.visit(`https://www.pexels.com/search/videos/${testData.searchTerm}/`, {failOnStatusCode: false})
})
cy.wait(4000)
cy.get(pexelSelectors.videoDownloadButton).eq(imageDownloadIndex).click({force: true});
cy.wait(8000)
cy.fileMatching('hd', /\.mp4$/)
cy.get(pexelSelectors.closeButton).click()
})
})
