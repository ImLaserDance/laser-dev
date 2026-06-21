export const env = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  defaultLocale: process.env.NEXT_PUBLIC_DEFAULT_LOCALE ?? "en",
  supportedLocales: process.env.NEXT_PUBLIC_SUPPORTED_LOCALES ?? "en,es",
  supabaseUrl: process.env.SUPABASE_URL,
  supabaseAnonKey: process.env.SUPABASE_ANON_KEY,
  resendApiKey: process.env.RESEND_API_KEY,
};
