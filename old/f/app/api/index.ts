import { GoogleServiceApiClient } from '@/app/api/google-service'
import { UserServiceApiClient } from '@/app/api/user-service'

export default class ApiClient {
  get userServiceApiClient() {
    return new UserServiceApiClient('https://localhost:7270')
  }

  get googleServiceApiClient() {
    // https://localhost:7081
    return new GoogleServiceApiClient('https://localhost:7081')
  }
}