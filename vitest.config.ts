import { defineConfig } from "vite"; // Mudamos de vitest para vite para habilitar o build
import path from "path";

const templateRoot = path.resolve(import.meta.dirname);

export default defineConfig({
  root: path.resolve(templateRoot, "client"), // Define a pasta 'client' como a raiz do site
  base: './', // Garante que caminhos de imagem e CSS funcionem no GitHub
  resolve: {
    alias: {
      "@": path.resolve(templateRoot, "client", "src"),
      "@shared": path.resolve(templateRoot, "shared"),
      "@assets": path.resolve(templateRoot, "attached_assets"),
    },
  },
  build: {
    outDir: path.resolve(templateRoot, "dist"), // Garante que o site pronto vá para a pasta 'dist'
    emptyOutDir: true,
  },
  test: {
    // Mantém suas configurações de teste
    environment: "node",
    include: ["server/**/*.test.ts", "server/**/*.spec.ts"],
  },
});
