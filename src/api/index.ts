import { Client, Databases, Account, Functions, ExecutionMethod, Models } from "appwrite";

const projectID = '6728ee60001d622e9a7a';
const functionId = '672a7ca40025f2c5d0cd';

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

export const getCredits = async () => {
  return functions.createExecution(
    functionId, // functionId
    JSON.stringify({}), // body (optional)
    false, // async (optional)
    '/credits', // path (optional)
    ExecutionMethod.GET, // method (optional)
  );
}
