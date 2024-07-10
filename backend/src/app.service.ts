import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios, { AxiosInstance } from 'axios';
@Injectable()
export class AppService {
  private readonly http: AxiosInstance;
  constructor(private configService: ConfigService) {
    this.http = axios.create({
      baseURL: this.configService.get<string>('HREF'),
      timeout: 10000,
    });
  }

  async getLeads(query: Record<string, string>) {
    this.http.defaults.headers.common['Authorization'] =
      `Bearer ${this.configService.get<string>('ACCESS_TOKEN')}`;

    console.log( query );
    
    let queryString = '';
    Object.keys(query).forEach((key) => {
      queryString += `${key}=${query[key]}&`;
    });

    if (queryString.endsWith('&')) {
      queryString = queryString.slice(0, -1);
    }

    try {
      const response = await this.http.get(`/api/v4/leads?чвава`);
      const data = response.data;
      if (!data._embedded) return { leads: 0 };
      for (const l of data._embedded.leads) {
        const res = await this.http.get(
          `/api/v4/leads/pipelines/${l.pipeline_id}`,
        );
        console.log(res.data);
        for (const status of res.data._embedded.statuses) {
          if (status.id == l.status_id) {
            l.status = status;
            break;
          }
        }
        const { _embedded, ...pipeline } = res.data;
        l.pipeline = pipeline;
        const user = await this.http.get(`/api/v4/users/${l.responsible_user_id}`);
        l.user = user.data;
      }
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }
}
