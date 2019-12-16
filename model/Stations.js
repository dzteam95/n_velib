import Database from './Database';

class Stations {
    
    constructor() {
        this.db = new Database();
    }

    async getData(filter_type, filter_val) {
        let request;
        if(filter_type == 'adress'){
            request = "SELECT * FROM `data` WHERE `station_nom` = '"+filter_val+"'";
        }else{
            request = "SELECT * FROM `data` WHERE `geo` = '"+filter_val+"'";
        }
        
        return this.db.query(request)
            .then(([rows]) => {
                return rows;
            })
            .catch(err => {
                console.log(err);
                return false;
            });        
    } 

}

module.exports = Stations;


