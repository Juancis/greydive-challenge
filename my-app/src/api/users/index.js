import { firestore } from "../../../firebase-admin";

export const getUsers = async () => {
  let queryRef;
  let metaRef;

  try {
    const snapshot = firestore.collection("users");
    metaRef = await snapshot.get().then((snap) => {
      return {
        totalItems: snap.size,
      };
    });
    queryRef = await snapshot.get();
    const users = [];
    queryRef.forEach((doc) => {
      users.push({ ...doc.data(), id: doc.id });
    });
    return { users, meta: { totalItems: metaRef.totalItems } };
  } catch (e) {
    console.log(e);
  }
};

export const createUser = async (user) => {
  try {
    const userRef = await firestore.collection("users").add(user);
    return userRef;
  } catch (e) {
    console.log(e);
  }
};

export const deleteUserById = async (id) => {
  try {
    const userRef = await firestore.collection("users").doc(id).delete();
    return userRef;
  } catch (e) {
    console.log(e);
  }
};
