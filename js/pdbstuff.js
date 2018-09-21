(function() {

    const pdb = new PouchDB('structures');

    let saveStructure = document.getElementById('saveStructure');

    function makeStructureObject(){
        console.log("I am reading this function");
        let so = {};
        let hazards = document.getElementById('hazards').value;
        let time = document.getElementById('time').value;
        let date = document.getElementById('date').value;
        let living = document.getElementById('living').value;
        let dead = document.getElementById('dead').value;

        console.log(hazards);
        console.log(time);
        console.log(date);
        console.log(living);
        console.log(dead);

        so._id = new Date().toISOString();
        so.date = date;
        so.time = time;
        so.hazards = hazards;
        so.living = living;
        so.dead = dead;

        console.log(so);

        pdb.put(so);

    };

    saveStructure.addEventListener('click', function(ev){
        ev.preventDefault();
        makeStructureObject();
    }, false);

})();