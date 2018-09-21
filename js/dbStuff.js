(function () {

    // let structureObject;
    // let PouchDB = require("PouchDB");

    const pdb = new PouchDB('structures');

    // const form = document.getElementById('structureForm');
    // maybe forget about above
    
    // const remoteCouch = "http://admin:passWordsSuck!@localhost:5984/structures";

    

    makeStructure = function (event) {
        console.log("I am reading this function");
        let so = {};
        // so.date = form.date.value;
        // so.time = form.time.value;
        so.hazards = form.hazards.value;
        so.victims.dead = form.living.value;
        so.victims.dead = form.dead.value;

        console.log(so);

        pdb.put(so, function (error, response){
            if (error) {
                console.log(error);
                return;
            } else if (response && response.ok){
                console.log("Successfully stored a structure");
            }
        });
    } // end of makeStructure

    // form.addEventListener('saveStructure', makeStructure);
    // above hasn't worked
    /*
    function showStructures() {
        pdb.allDocs (
            {
                include_docs: true,
                descending: true
            },
            function(err, doc){
                redrawStructuresUI(doc.rows);
            }
        );
    }

    pdb.changes({
        since: 'now',
        live: true
    }).on('change', showStructures);

    function sync(){
        syncDom.setAttribute('data-sync-state', 'syncing');
        const opts = {live: true};
        pdb.replicate.to(remoteCouch, opts, synceError);
        pdb.replicate.from(remoteCouch, opts, syncError);
    }
    */

})();