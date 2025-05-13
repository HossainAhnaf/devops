const backendUrls = {
  http: process.env.REACT_APP_API || 'http://localhost:5000/graphql',
  ws: process.env.REACT_APP_WS || 'ws://localhost:5000/graphql',
};

console.log(backendUrls);

export default backendUrls;
