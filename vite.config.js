export default defineConfig({
  base: process.env.NODE_ENV === "production"
    ? "/ebo-pvt-label-b2c-ui/"
    : "/",
  plugins: [react()],
});
