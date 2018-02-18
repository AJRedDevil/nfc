import Auth from '../auth';

test('Get Cookie', () => {
  Auth.getCookie().then(cookie => {
    expect(cookie).toBeTruthy();
  });
});
