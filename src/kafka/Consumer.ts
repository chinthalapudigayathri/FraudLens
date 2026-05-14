//import consumer from kafka
import { consumer } from "../config/kafka";

//import required entities and services
import Claim from "../entities/Claim";
import { FraudService } from "../services/FraudService";

//create an arrow function to run the consumer
export const runConsumer = async () => {

   //all these are seamless promises, so we can use async/await to handle them 
  //connect to consumer  
  await consumer.connect();
  //subscribe to the "claims" topic, starting from the beginning of the topic
  await consumer.subscribe({ topic: "claims", fromBeginning: true });

  //starts kafka consumer engine to read messages
  await consumer.run({
    //reading each message from the topic
    eachMessage: async ({ message }) => {
       // we will convert message value to string so that we can parse it as JSON to get the claim object 
      const claim = JSON.parse(message.value!.toString());
      // we will use the FraudService to validate the claim and get the result in fraudCheck variable
      // we will pass converted claim object
      const fraudCheck = FraudService.validateClaim(claim);

         // we will create a new claim object using the Claim entity
      const newClaim = new Claim({
        //using spread operator we will copy claim data 
        ...claim,
        //based on the above validation we will add the fraudFlag to the claim object, if the claim is valid then fraudFlag will be false, otherwise it will be true
        fraudFlag: !fraudCheck.valid
      });
// saving the new claim object to the database using promise and logging the result
      await newClaim.save();
      console.log(" Claim processed:", newClaim.claimId);
    }
  });
};
