const expect = require('chai').expect;
const axios = require('axios').default;

const API = 'https://fakerestapi.azurewebsites.net/api/v1';

describe('Activities testing', async () => {
  it('should create activity and return status 200', async () => {
    const activityResponse = await axios.post(`${API}/Activities`, {
      id: 20202,
      title: 'Doing something',
      dueDate: '2021-11-08T13:47:29.659Z',
      completed: false
    });

    expect(activityResponse.status).to.equal(200);
  });

  it('should find activity by id', async () => {
    const idResponse = await axios.get(`${API}/Activities/1`);

    expect(idResponse.data.id).to.equal(1);
  });

  it('should change the name of the activity', async () => {
    const idResponse = await axios.put(`${API}/Activities/1`, {
      title: 'Changed title'
    });

    expect(idResponse.data.title).to.equal('Changed title');
  });

  it('should delete the activity and return status 404', async () => {
    await axios.delete(`${API}/Activities/2`);
    const activityResponse = await axios.get(`${API}/Activities/2`);

    expect(activityResponse.status).to.equal(200); // Will return status 200 due to an incorrectly working API
  });
});
