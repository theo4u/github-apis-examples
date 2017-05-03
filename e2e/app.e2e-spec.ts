import { GithubApisExamplesPage } from './app.po';

describe('github-apis-examples App', () => {
  let page: GithubApisExamplesPage;

  beforeEach(() => {
    page = new GithubApisExamplesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
