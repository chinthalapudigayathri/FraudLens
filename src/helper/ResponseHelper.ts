export const successResponse = (res: any, data: any, message = "Success") => {
  return res.status(200).json({ message, data });
};

export const errorResponse = (res: any, error: any, status = 500) => {
  return res.status(status).json({
    message: error.message || "Internal Server Error",
    stack: process.env.NODE_ENV === "development" ? error.stack : undefined
  });
};
