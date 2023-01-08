export const customFetch = async (url, options) => {
  const response = await fetch(url, options).catch((e) => {
    console.log("error", e);
  });
  return await response.json();
};
