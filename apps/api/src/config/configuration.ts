export default () => ({
  port: parseInt(process.env.PORT ?? "3001", 10),
  nodeEnv: process.env.NODE_ENV ?? "development",
  mongoUri: process.env.MONGO_URI ?? "mongodb://127.0.0.1:27017/tutor",
  webUrl: process.env.WEB_URL ?? "http://localhost:3000",
  jwt: {
    secret: process.env.JWT_SECRET ?? "dev-only-insecure-secret-change-me",
    accessTtl: process.env.JWT_ACCESS_TTL ?? "15m",
    refreshTtl: process.env.JWT_REFRESH_TTL ?? "7d",
    accessTtlMs: 15 * 60 * 1000,
    refreshTtlMs: 7 * 24 * 60 * 60 * 1000,
  },
  resend: {
    apiKey: process.env.RESEND_API_KEY ?? "",
    fromEmail: process.env.RESEND_FROM_EMAIL ?? "no-reply@english-academy.local",
  },
  cloudinary: {
    cloudName: process.env.CLOUDINARY_CLOUD_NAME ?? "",
    apiKey: process.env.CLOUDINARY_API_KEY ?? "",
    apiSecret: process.env.CLOUDINARY_API_SECRET ?? "",
  },
});
