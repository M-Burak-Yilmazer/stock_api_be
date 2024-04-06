"use strict";

module.exports = (err, req, res, next) => {
  return res.status(res?.errorStatuscode || 500).send({
    error: true,
    message: err?.message || "Internal Server Error",
    cause: err?.cause,
    body: req.body,
    stack: err.stack,
  });
};
