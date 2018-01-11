const Sequelize = require('sequelize');
const sequelize = new Sequelize('example-blog-db','richreneau', '',{
    host: 'localhost',
    dialect: 'postgres'
});

// sequelize
//     .authenticate()
//     .then(() => {
//         console.log('That totally connected. yeah!');
//     })
//     .catch((err) => {
//         console.error('Oh noes that did not work.');
// })



const User = sequelize.define('user', {
  firstName: {
      type: Sequelize.STRING
  },
  lastName: {
      type: Sequelize.STRING
  }    
})

User.findOne({
    where: {
        id: 1
    }
})
.then((me) => {
    console.log(me);
});

// User.sync({ force: true})
//     .then(() => {
//         console.log('Table created!');
//         return User.create({
//             firstName: 'Rich',
//             lastName: 'Reneau'
//         });
//     })

module.exports = sequelize;