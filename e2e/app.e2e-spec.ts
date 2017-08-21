import { CraigslistAngular2Page } from './app.po';

describe('craigslist-angular2 App', () => {
  let page: CraigslistAngular2Page;

  beforeEach(() => {
    page = new CraigslistAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
