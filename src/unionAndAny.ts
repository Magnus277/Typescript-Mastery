let subs: number | string = '1M' //union, can be a string or a number

let apirequestStatus: 'pending' | 'success' | 'error' = 'pending'
apirequestStatus = "success"

let airlineSeat: 'aisle' | 'window' | 'middle' = 'aisle'
airlineSeat = 'aisle'

const orders = ['12', '20', '28', '42']

// let currentorder; // any, it doesnt care what type you put in it
let currentorder: string | undefined;

for(let order of orders) {
  if(order === '28'){
    currentorder = order
    break;
  }
}

console.log(currentorder);
