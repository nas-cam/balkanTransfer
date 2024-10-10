const cypressJunit = require('cypress-junit-reporter');

module.exports = (on, config) => {
    on('after:run', (results) => {
        return cypressJunit(results);
    });
};
