<script setup>
import { ref } from 'vue'

// Datos de ejemplo para simular la información de la base de datos
const registros = ref([
  {
    id: 'REG-001',
    descripcion: 'Adquisición de 10 monitores Dell 24"',
    tipo: 'Activo Fijo',
    estado: 'Asignado',
    asignadoA: 'Juan Pérez',
  },
  {
    id: 'REG-002',
    descripcion: 'Solicitud de compra de insumos de oficina',
    tipo: 'Solicitud de Compra',
    estado: 'Nuevo',
    asignadoA: 'N/A',
  },
  {
    id: 'REG-003',
    descripcion: 'Reporte de falla en impresora de bodega',
    tipo: 'Incidencia',
    estado: 'En Progreso',
    asignadoA: 'Ana Torres',
  },
  {
    id: 'REG-004',
    descripcion: 'Mantenimiento preventivo Servidor Principal',
    tipo: 'Tarea de Mantenimiento',
    estado: 'Nuevo',
    asignadoA: 'N/A',
  },
])
</script>

<template>
  <div class="space-y-8">
    <div class="bg-white p-6 rounded-lg shadow-md">
      <h2 class="text-xl font-semibold mb-4 text-gray-700">Crear Nuevo Registro de Entrada</h2>

      <form class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="md:col-span-2">
          <label for="descripcion" class="block text-sm font-medium text-gray-600 mb-1"
            >Descripción</label
          >
          <input
            type="text"
            id="descripcion"
            class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Ej: Compra de 5 licencias de software"
          />
        </div>

        <div>
          <label for="tipo_registro" class="block text-sm font-medium text-gray-600 mb-1"
            >Tipo de Registro</label
          >
          <select
            id="tipo_registro"
            class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option>Solicitud de Compra</option>
            <option>Activo Fijo</option>
            <option>Incidencia</option>
            <option>Tarea de Mantenimiento</option>
          </select>
        </div>

        <div class="md:col-span-3 text-right">
          <button
            type="submit"
            class="bg-indigo-600 text-white font-bold py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Guardar Entrada
          </button>
        </div>
      </form>
    </div>

    <div class="bg-white p-6 rounded-lg shadow-md">
      <h2 class="text-xl font-semibold mb-4 text-gray-700">Registros Actuales</h2>

      <div class="overflow-x-auto">
        <table class="w-full text-sm text-left text-gray-500">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3">ID Registro</th>
              <th scope="col" class="px-6 py-3">Descripción</th>
              <th scope="col" class="px-6 py-3">Tipo</th>
              <th scope="col" class="px-6 py-3">Estado</th>
              <th scope="col" class="px-6 py-3">Asignado a</th>
              <th scope="col" class="px-6 py-3 text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="registro in registros"
              :key="registro.id"
              class="bg-white border-b hover:bg-gray-50"
            >
              <td class="px-6 py-4 font-medium text-gray-900">{{ registro.id }}</td>
              <td class="px-6 py-4">{{ registro.descripcion }}</td>
              <td class="px-6 py-4">{{ registro.tipo }}</td>
              <td class="px-6 py-4">
                <span
                  class="px-2 py-1 text-xs font-semibold rounded-full"
                  :class="{
                    'bg-green-100 text-green-800':
                      registro.estado === 'Asignado' || registro.estado === 'En Progreso',
                    'bg-blue-100 text-blue-800': registro.estado === 'Nuevo',
                  }"
                >
                  {{ registro.estado }}
                </span>
              </td>
              <td class="px-6 py-4">{{ registro.asignadoA }}</td>
              <td class="px-6 py-4 text-center">
                <a href="#" class="font-medium text-indigo-600 hover:underline mr-4">Editar</a>
                <a href="#" class="font-medium text-red-600 hover:underline">Eliminar</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
