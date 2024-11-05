import { Client, Databases, Account, Functions, ExecutionMethod, Models } from "appwrite";

const projectID = '6728ee60001d622e9a7a';
const functionId = '67291bf1001cbbd0a2b5';

const client = new Client();
client.setProject(projectID);

const account = new Account(client);
const database = new Databases(client);
const functions = new Functions(client);

let session: Models.Session | null = null;

export const createAccount = (email: string, password: string, name: string) => {
  return account.create("unique()", email, password, name);
}

export const createSession = (userId: string, secret: string) => {
  return account.createSession(userId, secret);
}

export const createEmailPasswordSession = (email: string, password: string) => {
  return account.createEmailPasswordSession(email, password);
}

export const deleteCurrentSession = () => {
  return account.deleteSession("current");
}

export const getUser = () => {
  return account.get();
}

export const getTokents = async () => {
  const userId = (await getUser()).$id;

  return functions.createExecution(
    functionId, // functionId
    JSON.stringify({
      userId
    }), // body (optional)
    false, // async (optional)
    '/', // path (optional)
    ExecutionMethod.POST, // method (optional)
);
}