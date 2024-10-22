export const prettifyJson = (val: string, space = 2) => {
  try {
    const res = JSON.parse(val);

    return JSON.stringify(res, null, space);
  } catch {
    const errorJson = { error: `${val}` };

    return JSON.stringify(errorJson, null, space);
  }
};
