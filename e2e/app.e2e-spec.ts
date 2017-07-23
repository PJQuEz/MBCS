import { MBCSPage } from './app.po';

describe('mbcs App', () => {
  let page: MBCSPage;

  beforeEach(() => {
    page = new MBCSPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
