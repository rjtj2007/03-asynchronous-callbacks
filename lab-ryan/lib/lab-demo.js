"use strict";
// create reminder function
function createReminder(message, delay, cb) {
    let cycles = 0;
    setTimeout(() => {
        cycles ++;
        cb('reminder: ' + message);
    }, delay)
}

let cycles = 0;
let difference = 0;
let start = new Date();

function createReminderSync(messager, delay) {
    let start = new Date();
    while(difference < delay) {
    cycles ++;
    let now = new Date();
    let difference = now - start;
    console.log("Reminder: " + message)
    }
}

createReminderSync("remember, you're sync!");
createReminder("rememnber you're async!");

//async test demo
describe('Reminders', () => {
    it('should return a message'), (resolve, reject) => {
        let message = 'do something';
        createReminder(message, 1000 (reminder) => {
            console.log('Reminder arrived: ', reminder);
            expect(reminder).toBe('Reminder: ' + message);
            // expect(92).toBe(40);
            resolve(); //best practice to use resolve()
        });
        console.log('it() finished')
    });
});