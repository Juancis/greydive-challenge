import * as admin from "firebase-admin";
import fireBaseData from "./firebase-config.json";

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      project_id: "greydive-challenge-d586c",
      clientEmail: fireBaseData.client_email,
      private_key: fireBaseData.private_key,
      client_email: fireBaseData.client_email,
    }),
    databaseURL: "https://greydive-challenge-d586c.firebaseio.com",
  });
}
const firestore = admin.firestore();
const auth = admin.auth();
const storage = admin.storage();

export { firestore, auth, storage };
