const { Airplane, Flight, Airport, Sequelize, sequelize } = require('./models');
const Op = Sequelize.Op;
//const { lt } = require('sequelize/types/lib/operators');
//const Op = Sequelize.Op;

// console.log(Sequelize);
// console.log('---------------------');
//console.log(Op);

async function findFlights() {
    const flightsInfo = await Flight.findAll({
        where: {
            date: {
                [Op.lt]: '2020-07-01'
            },
        },
    }
    );
    console.log('---', flightsInfo);
    sequelize.close();
}
findFlights();