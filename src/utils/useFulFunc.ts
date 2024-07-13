const today = new Date();

export const month = (today.getMonth() + 1).toString().padStart(2, "0");
export const date = today.getDate().toString().padStart(2, "0");
