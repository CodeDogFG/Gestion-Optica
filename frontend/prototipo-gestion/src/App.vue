// src/App.vue

<script setup>
// Ya no necesitamos importar los componentes aquí
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <div class="flex h-screen bg-gray-100 font-sans">

    <aside class="w-64 bg-gray-800 text-white flex-shrink-0">
      <div class="p-4 text-2xl font-bold border-b border-gray-700">
        SistemaGestión
      </div>
      <nav class="mt-4">
        <RouterLink to="/" class="block px-4 py-2 text-sm hover:bg-gray-700">Gestión de Registros</RouterLink>
        <RouterLink to="/reportes" class="block px-4 py-2 text-sm hover:bg-gray-700">Reportes</RouterLink>
        <a href="#" class="block px-4 py-2 text-sm hover:bg-gray-700">Administración</a>
      </nav>
    </aside>

    <main class="flex-1 p-8 overflow-y-auto min-w-0">
      <RouterView />
    </main>
  </div>
</template>

<style>
/* Estilo para el enlace activo en la navegación */
.router-link-exact-active {
  background-color: #4A5568; /* bg-gray-700 */
}
</style>
