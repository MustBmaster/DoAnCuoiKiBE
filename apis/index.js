const app = require('../app');
const user = require('../routes/user');
const role = require('../routes/role');
const email = require('../routes/email');
const history = require('../routes/history');
const likedSong = require('../routes/likedSong');

app.use('/api/account', user);
app.use('/api/email', email);
app.use('/api/role', role);
app.use('/api/history', history);
app.use('/api/likedSong', likedSong);