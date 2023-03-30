import axios from 'axios';
import User from './user';
jest.mock('axios');
test('should fetch user', () => {
  const users = [{name: 'Bob'}];
  const resp = {data: users};
  axios.get.mockResolvedValue(resp);
  return User.all().then(data => expect(data).toEqual(users));
});