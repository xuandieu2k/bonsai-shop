
export const ApiConfig = {
  API_URL: "http://localhost:4000",
  API_HTTPS: 'https://',
  DEFAULT_PORT: 5000,
};

// export const ApiOauthRouter = {
//   VERSION: 'v10',
//   get API_GET_SESSION() {
//     return `api/${this.VERSION}/sessions`;
//   },
//   get API_GET_CONFIG() {
//     return `api/${this.VERSION}/configs`;
//   },
//   get API_LOGIN() {
//     return `api/${this.VERSION}/customers/login`;
//   }
// };

export const ApiProduct = {
  get API_GET_PRODUCTS() {
    return `/products`;
  },
}
