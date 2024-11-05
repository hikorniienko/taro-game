import { Client, Users } from 'node-appwrite';

export default async () => {
  const permissions = [
    `user:${userId}`,  // дозволити доступ лише цьому користувачу
  ];

  const user = await appwrite.account.get();
  const userId = user.$id;

  const document = await appwrite.database.createDocument('collectionId', 'unique()', data, permissions);

  const documents = await appwrite.database.listDocuments('collectionId', [
    appwrite.query.equal('userId', userId)
  ]);
}