const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoUri: `mongodb+srv://ashik:5V58ZRc3SxFSpcgV@cluster0.xpjxg.mongodb.net/evcmDb?retryWrites=true&w=majority`,
  // mongoUri: process.env.MONGODB_URI ||
  //   process.env.MONGO_HOST ||
  //   'mongodb://' + (process.env.IP || 'localhost') + ':' +
  //   (process.env.MONGO_PORT || '27017') +
  //   '/mernproject',
  serverUrl: process.env.serverUrl || 'https://biet-evcm.herokuapp.com'
  // serverUrl: process.env.serverUrl || 'http://localhost:3000'
}

export default config
