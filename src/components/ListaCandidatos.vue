<template>
  <div class="lista-candidatos">
    <div class="tabla-container">
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
            <th>Ciudad</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="candidatos.length === 0">
            <td colspan="5" class="empty-state">
              No hay candidatos agregados
            </td>
          </tr>
          <tr v-for="candidato in candidatos" :key="candidato.id">
            <td>{{ candidato.titulo }}</td>
            <td>{{ candidato.nombre }}</td>
            <td>{{ candidato.apellido }}</td>
            <td>{{ candidato.email }}</td>
            <td>{{ candidato.ciudad }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListaCandidatos',
  props: {
    candidatos: {
      type: Array,
      required: true,
      default: () => []
    }
  }
}
</script>

<style scoped>
.lista-candidatos {
  padding: 20px;
  background: white;
  border: 3px solid #4169E1;
  border-radius: 30px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  min-height: 400px;
}

.tabla-container {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
}

thead th {
  background: white;
  color: #4169E1;
  font-size: 18px;
  font-weight: bold;
  padding: 15px 10px;
  text-align: center;
  border-bottom: 3px solid #4169E1;
}

tbody td {
  padding: 15px 10px;
  text-align: center;
  border-bottom: 2px solid #4169E1;
  color: #4169E1;
  font-size: 16px;
  font-style: italic;
}

tbody tr:hover {
  background: #F0F4FF;
}

.empty-state {
  text-align: center;
  color: #999;
  font-style: italic;
  padding: 40px 20px;
}

/* Scrollbar personalizado */
.tabla-container::-webkit-scrollbar {
  height: 8px;
}

.tabla-container::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

.tabla-container::-webkit-scrollbar-thumb {
  background: #4169E1;
  border-radius: 10px;
}

.tabla-container::-webkit-scrollbar-thumb:hover {
  background: #2F4F9F;
}
</style>
