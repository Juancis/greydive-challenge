import { withHandlerMiddleware } from "../../../src/api/hof/withHandlerMiddleware";
import { getUsers, createUser, deleteUserById } from "../../../src/api/users";

export const post = async (req, res) => {
  try {
    await createUser(req.body);
    return res.status(200).json({ response: "User created" });
  } catch (e) {
    console.log("error", e);
    return res.status(400).json({ error: "Something went wrong: ", e });
  }
};

export const get = async (req, res) => {
  try {
    const users = await getUsers();
    return res.status(200).json({ response: users });
  } catch (e) {
    console.log("error", e);
    return res.status(400).json({ error: "Something went wrong: ", e });
  }
};

export const remove = async (req, res) => {
  try {
    const deletedUser = await deleteUserById(req.body.id);
    return res.status(200).json({ response: deletedUser });
  } catch (e) {
    console.log("error", e);
    return res.status(400).json({ error: "Something went wrong: ", e });
  }
};

export default withHandlerMiddleware({ POST: post, GET: get, DELETE: remove });
