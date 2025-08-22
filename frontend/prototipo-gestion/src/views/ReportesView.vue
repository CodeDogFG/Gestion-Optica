<script setup>
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js'

// Es necesario registrar los componentes de Chart.js que vamos a usar
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

// --- Datos para las Tarjetas de KPI (Basados en tu tabla) ---
const kpiData = {
  eficienciaProcesos: { valor: '30 seg.', mejora: '90%' },
  calidadDatos: { valor: '<1%', mejora: '>93%' },
  productividad: { valor: '2 min.', mejora: '>99%' },
  costoOperativo: { valor: '10 hrs/mes', mejora: '87,5%' },
}

// --- Datos para el Gráfico de Barras de Ejemplo ---
const chartData = {
  labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
  datasets: [
    {
      label: 'Registros Creados',
      backgroundColor: '#4f46e5', // Color índigo de Tailwind
      data: [40, 65, 59, 80, 81],
    },
    {
      label: 'Mermas Registradas',
      backgroundColor: '#ef4444', // Color rojo de Tailwind
      data: [5, 8, 4, 6, 9],
    },
  ],
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    title: {
      display: true,
      text: 'Actividad Mensual de la Empresa',
    },
  },
}
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold text-gray-800 mb-8">Dashboard de Rendimiento</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h3 class="text-sm font-medium text-gray-500">Eficiencia de Procesos</h3>
        <p class="text-3xl font-bold text-gray-800 mt-2">{{ kpiData.eficienciaProcesos.valor }}</p>
        <p class="text-sm text-green-500 mt-1">
          ↓ {{ kpiData.eficienciaProcesos.mejora }} de mejora
        </p>
      </div>

      <div class="bg-white p-6 rounded-lg shadow-md">
        <h3 class="text-sm font-medium text-gray-500">Calidad de Datos</h3>
        <p class="text-3xl font-bold text-gray-800 mt-2">{{ kpiData.calidadDatos.valor }}</p>
        <p class="text-sm text-green-500 mt-1">
          ↓ {{ kpiData.calidadDatos.mejora }} en tasa de error
        </p>
      </div>

      <div class="bg-white p-6 rounded-lg shadow-md">
        <h3 class="text-sm font-medium text-gray-500">Productividad</h3>
        <p class="text-3xl font-bold text-gray-800 mt-2">{{ kpiData.productividad.valor }}</p>
        <p class="text-sm text-green-500 mt-1">↓ {{ kpiData.productividad.mejora }} en tiempo</p>
      </div>

      <div class="bg-white p-6 rounded-lg shadow-md">
        <h3 class="text-sm font-medium text-gray-500">Costo Operativo</h3>
        <p class="text-3xl font-bold text-gray-800 mt-2">{{ kpiData.costoOperativo.valor }}</p>
        <p class="text-sm text-green-500 mt-1">
          ↓ {{ kpiData.costoOperativo.mejora }} en horas/mes
        </p>
      </div>
    </div>

    <div class="bg-white p-6 rounded-lg shadow-md">
      <h2 class="text-xl font-semibold mb-4 text-gray-700">Análisis de Actividad Mensual</h2>
      <div class="h-96"><Bar :data="chartData" :options="chartOptions" /></div>
    </div>
  </div>
</template>
