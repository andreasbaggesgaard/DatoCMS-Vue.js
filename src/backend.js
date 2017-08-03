require('babel-polyfill');
let _ = require('lodash');

const SiteClient = require('datocms-client').SiteClient;
const client = new SiteClient('0f4bf5ec7eb324d69555');

function GetAllItems() { 
    client.items.all().then((items) => console.log(items));
}  

function GetItems() { 
    let items = []
    client.items.all({'filter[type]': 'article'}).then(data => {  
        _.forEach(data, function(item) {
            items.push(item) 
        });      
    });
return items;
} 

function GetHomeItem() { 
    let homeItem = []
        client.items.find('83112').then(function(home) {
            homeItem.push(home);  
        });
    return homeItem;
}  

export { GetItems, GetHomeItem, GetAllItems };

 
