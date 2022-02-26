module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '2b6bc59a66cc4665d496367ad36ab8b9'),
  },
});
