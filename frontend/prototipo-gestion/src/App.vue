<script setup>
import GestionRegistros from './components/GestionRegistros.vue';
</script>

<template>
  <div class="flex h-screen bg-gray-100 font-sans">
    
    <aside class="w-64 bg-gray-800 text-white flex-shrink-0">
      <div class="p-4 text-2xl font-bold border-b border-gray-700">
        SistemaGestión
      </div>
      <nav class="mt-4">
        <a href="#" class="block px-4 py-2 text-sm bg-gray-700">Gestión de Registros</a>
        <a href="#" class="block px-4 py-2 text-sm hover:bg-gray-700">Reportes</a>
        <a href="#" class="block px-4 py-2 text-sm hover:bg-gray-700">Administración</a>
      </nav>
    </aside>

    <main class="flex-1 p-8 overflow-y-auto min-w-0">
      <header class="flex justify-between items-center mb-8">
        <h1 class="text-3xl font-bold text-gray-800">Módulo de Gestión de Registros</h1>
        <div class="text-sm text-gray-600">Usuario: felipe.gomez (Administrador)</div>
      </header>
      
      <GestionRegistros />
      
    </main>
  </div>
</template>
