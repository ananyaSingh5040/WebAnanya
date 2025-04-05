const cron = require('node-cron');
const task =()=>{
    console.log("Running a task at: ",new Date());
}
cron.schedule("*/2 * * * * *",task); //every 2 seconds //minute //hour //day(month) //month //day(week) - website(crontab guru)
