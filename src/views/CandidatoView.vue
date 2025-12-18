<template>
  <div class="candidato-view">
    <h1>Aprobación de Candidatos</h1>
    
    <div class="container">
      <Candidato @agregar-candidato="agregarCandidato" />
      <ListaCandidatos :candidatos="listaCandidatos" />
    </div>
  </div>
</template>

<script>
import Candidato from '../components/Candidato.vue';
import ListaCandidatos from '../components/ListaCandidatos.vue';

export default {
  name: 'CandidatoView',
  components: {
    Candidato,
    ListaCandidatos
  },
  data() {
    return {
      listaCandidatos: []
    }
  },
  methods: {
    agregarCandidato(candidato) {
      this.listaCandidatos.push({
        ...candidato,
        id: Date.now()
      });
    }
  }
}
</script>

<style scoped>
.candidato-view {
  max-width: 800px;
  margin: auto;
}
</style>