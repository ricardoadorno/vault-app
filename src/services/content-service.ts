import MainApiService from './main-api-service';

export default class ContentService extends MainApiService {
  constructor() {
    super('');
  }

  async getContent() {
    const {data} = await this.http.get('/posts');

    return data;
  }
}