export const withHandlerMiddleware = (handlers) => {
  return (req, res) => {
    if (req.method) {
      const handler = handlers[req.method];
      console.log("withHandlerMiddleware", req.method, handler);
      if (handler) {
        return handler(req, res);
      }
    }

    return res.status(HttpStatusCode.NOT_FOUND).json({ error: "Not Found" });
  };
};
