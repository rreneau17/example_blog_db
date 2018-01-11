const Sequelize = require('sequelize');
const sequelize = new Sequelize('example-blog-db','richreneau', '',{
    host: 'localhost',
    dialect: 'postgres'
});

sequelize
    .authenticate()
    .then(() => {
        console.log('That totally connected. yeah!');
    })
    .catch((err) => {
        console.error('Oh noes that did not work.');
})
    
