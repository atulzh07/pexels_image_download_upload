import { fileSelectors } from "./selectors/testSelectors";
const downloadsFolder = Cypress.config('downloadsFolder');

describe('File.io', () => {
    describe('Upload MP4 file', () => {
        it('grabs an mp4 file from Downloads', () => {
          cy.visit('https://tmpfiles.org/')
          cy.task('readdir', downloadsFolder).then((files) => {
            const mp4File = files.find(f => f.endsWith('.mp4'));
            const mp4FilePath = `${downloadsFolder}/${mp4File}`;
            cy.wrap(mp4FilePath).as('mp4FilePath')
          });
          cy.get('@mp4FilePath').then((mp4FilePath) => {
            cy.get("input[type=file]").invoke("show").selectFile(mp4FilePath);
            cy.contains('Upload').click()
          })
          cy.url().then((url) => {
            cy.log(url)
          })
        });
        it('grabs an jpg file from Downloads', () => {
          cy.visit('https://tmpfiles.org/')
          cy.task('readdir', downloadsFolder).then((files) => {
            const jpgFile = files.find(f => f.endsWith('.jpg'));
            const jpgFilePath = `${downloadsFolder}/${jpgFile}`;
            cy.wrap(jpgFilePath).as('jpgFilePath')
          });
          cy.get('@jpgFilePath').then((jpgFilePath) => {
            cy.get("input[type=file]").invoke("show").selectFile(jpgFilePath);
            cy.contains('Upload').click()
          })
          cy.url().then((url) => {
            cy.log(url)
          })
        })
      });
})
