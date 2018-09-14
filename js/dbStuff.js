(function () {

    // const PouchDB = require('pouchdb');
    // Do I need above if I have it linked locally?

    const db = new PouchDB('structures');

    function makeStructure (date, time, hazards, living, dead, searchStatus) {
        let structure = {
            _id: new Date().toISOString(),
            date: date,
            time: time,
            hazards: hazards,
            living: living,
            dead: dead,
            searchCompleted: searchStatus

        };

    }

})();