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
  border: 1px solid blue;
}

table {
  width: 100%;
}

th, td {
  text-align: center;
}

th {
  border-bottom: 1px solid blue;
}
</style>
