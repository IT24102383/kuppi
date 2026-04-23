const mongoose = require('mongoose');
const uri1 = 'mongodb://isidara:I1234@ac-yiuxqwm-shard-00-00.uro4sch.mongodb.net:27017,ac-yiuxqwm-shard-00-01.uro4sch.mongodb.net:27017,ac-yiuxqwm-shard-00-02.uro4sch.mongodb.net:27017/mern-item-manager?ssl=true&authSource=admin&replicaSet=atlas-v32qsn-shard-0';
const uri2 = 'mongodb://isidara:Isidara123@ac-yiuxqwm-shard-00-00.uro4sch.mongodb.net:27017,ac-yiuxqwm-shard-00-01.uro4sch.mongodb.net:27017,ac-yiuxqwm-shard-00-02.uro4sch.mongodb.net:27017/mern-item-manager?ssl=true&authSource=admin&replicaSet=atlas-v32qsn-shard-0';

async function test() {
  try {
    await mongoose.connect(uri1, { serverSelectionTimeoutMS: 3000 });
    console.log("SUCCESS WITH I1234");
    process.exit(0);
  } catch(e) {
    console.log("FAILED WITH I1234");
  }
  
  try {
    await mongoose.connect(uri2, { serverSelectionTimeoutMS: 3000 });
    console.log("SUCCESS WITH Isidara123");
    process.exit(0);
  } catch(e) {
    console.log("FAILED WITH Isidara123");
    process.exit(1);
  }
}
test();
