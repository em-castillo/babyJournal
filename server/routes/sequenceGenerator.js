const Sequence = require('../models/sequence');
var maxMilestoneId;
var maxMemoryId;
var sequenceId = null;

const sequenceGenerator = {   
     async init() { 
          try {
               const sequence = await Sequence.findOne({}).exec();   
               if (!sequence) {
                    throw new Error('Sequence not found');
               }
               this.sequenceId = sequence._id;
               this.maxMilestoneId = sequence.maxMilestoneId;
               this.maxMemoryId = sequence.maxMemoryId;
               } catch (err) {
                    console.error('Error initializing SequenceGenerator:', err);
                    throw err;
               }
          },

     async nextId(collectionType) {
              if (!this.sequenceId) {
                  await this.init();
              }
              let updateObject = {};
              let nextId;
     
          
             switch (collectionType.toLowerCase()) {
               case 'milestones':
                    this.maxMilestoneId++;
                    updateObject = { maxMilestoneId: this.maxMilestoneId };
                    nextId = this.maxMilestoneId;
                 break;
               case 'memories':
                    this.maxMemoryId++;
                    updateObject = { maxMemoryId: this.maxMemoryId };
                    nextId = this.maxMemoryId;
                 break;
               default:
                throw new Error('Not a valid collection type');
          }
            try {
                await Sequence.updateOne({_id: sequenceId}, {$set: updateObject}).exec();
                return nextId;
     
            } 
            catch (error) {
              console.log("THE SEQUENCE GENERATOR ERROR: " + error);
              throw error;
            }
      }  
}

module.exports = sequenceGenerator;