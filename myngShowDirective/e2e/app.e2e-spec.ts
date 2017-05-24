import { MyngShowDirectivePage } from './app.po';

describe('myng-show-directive App', function() {
  let page: MyngShowDirectivePage;

  beforeEach(() => {
    page = new MyngShowDirectivePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
