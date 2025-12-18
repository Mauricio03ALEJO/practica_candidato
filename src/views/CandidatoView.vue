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
  padding: 20px;
  max-width: 900px;
  margin: 0 auto;
}

h1 {
  text-align: center;
  color: #333;
  margin-bottom: 30px;
  font-size: 32px;
}

.container {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
</style>