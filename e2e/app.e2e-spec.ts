import { RxjsObservablesPage } from './app.po';

describe('rxjs-observables App', () => {
  let page: RxjsObservablesPage;

  beforeEach(() => {
    page = new RxjsObservablesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
