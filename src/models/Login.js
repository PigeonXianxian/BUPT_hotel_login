import { API_ENDPOINT } from '../models/config';

export default class User {
  constructor() {
    this.username = 'pigeonXian';
    this.password = '114514';
  }

  async Login(apiPath) {
    const apiUrl = `${API_ENDPOINT}${apiPath}`;

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: this.username,
          password: this.password,
        }),
      });

      if (response.ok) {
        console.log('用户登录成功');
        window.location.href = '/';
      } else {
        console.error('用户登录失败:', response.statusText);
      }
    } catch (error) {
      console.error('请求发生错误:', error);
    }
  }
}
