const app = require('./app');

app.listen(3000, () => {
    console.log(`🚀  Server ready at http://localhost:${app.get('port')}`);
});
