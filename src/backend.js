require('babel-polyfill');
let _ = require('lodash');

const SiteClient = require('datocms-client').SiteClient;
const client = new SiteClient('0f4bf5ec7eb324d69555');

function GetItems() { 
    let items = []
    client.items.all().then(data => {  
        console.log(data) 
        _.forEach(data, function(value) {
            console.log(value);
            items.push(value) 
        });      
    });
return items;
}  
export { GetItems };

 
