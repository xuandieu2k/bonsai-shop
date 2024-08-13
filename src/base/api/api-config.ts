
export const ApiConfig = {
  API_URL: "localhost",
  API_HTTPS: 'https://',
  OAUTH_PORT: 8003,
};
 
export const ApiOauthRouter = {
  VERSION: 'v10',
  get API_GET_SESSION() {
    return `api/${this.VERSION}/sessions`;
  },
  get API_GET_CONFIG() {
    return `api/${this.VERSION}/configs`;
  },
  get API_LOGIN() {
    return `api/${this.VERSION}/customers/login`;
  }
};
