import * as admin from "firebase-admin";

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      project_id: process.env.NEXT_PUBLIC_project_id,
      clientEmail: process.env.NEXT_PUBLIC_clientEmail,
      private_key: process.env.NEXT_PUBLIC_private_key,
      client_email: process.env.NEXT_PUBLIC_client_email,
    }),
    databaseURL: process.env.NEXT_PUBLIC_databaseURL,
  });
}
const firestore = admin.firestore();
const auth = admin.auth();
const storage = admin.storage();

export { firestore, auth, storage };
