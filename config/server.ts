export default ({ env }) => ({
  url: env("PUBLIC_URL", "https://api.edm-box.com"),
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  proxy: env.bool('IS_PROXIED', true),
  app: {
    keys: env.array("APP_KEYS"),
  },
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },
});
