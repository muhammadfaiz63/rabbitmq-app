const amqplib = require('amqplib');

(async () => {
  try {
    const queue = 'tasks';
    const connectionString = 'amqp://localhost';  // Replace with your RabbitMQ connection string if needed

    const connection = await amqplib.connect(connectionString);

    const channel = await connection.createChannel();
    await channel.assertQueue(queue);

    const message = 'dari pengirim terbaru';
    await channel.sendToQueue(queue, Buffer.from(message));
    console.log(`Message '${message}' sent to queue '${queue}'`);
  } catch (error) {
    console.error('Error:', error);
  }
})();
