(function () {

    // const PouchDB = require('pouchdb');
    // Do I need above if I have it linked locally?

    const db = new PouchDB('structures');

    const remoteCouch = "http://admin:passWordsSuck!@localhost:5984/structures";

    function makeStructure (date, time, hazards, living, dead, searchStatus) {
        let structure = {
            _id: new Date().toISOString(),
            // look into collating as alternative to above
            date: date,
            time: time,
            hazards: hazards,
            living: living,
            dead: dead,
            searchCompleted: searchStatus
        };
    }

    function showStructures() {
        db.allDocs (
            {
                include_docs: true,
                descending: true
            },
            function(err, doc){
                redrawStructuresUI(doc.rows);
            }
        );
    }

    db.changes({
        since: 'now',
        live: true
    }).on('change', showStructures);

    function sync(){
        syncDom.setAttribute('data-sync-state', 'syncing');
        const opts = {live: true};
        db.replicate.to(remoteCouch, opts, synceError);
        db.replicate.from(remoteCouch, opts, syncError);
    }

})();