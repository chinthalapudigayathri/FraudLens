// kafka.ts
import { Kafka } from "kafkajs";

const kafka = new Kafka({
  clientId: "claims-service",
  brokers: ["localhost:9092"], // replace with your broker endpoints
});

export const producer = kafka.producer();
export const consumer = kafka.consumer({ groupId: "claims-group" });

export const connectKafka = async () => {
  await producer.connect();
  await consumer.connect();
  console.log("✅ Kafka connected");
};
