<template>
  <div class="candidato-form">
    <div class="form-header">
      <div class="form-content">
        <form @submit.prevent="agregarCandidato">
          <div class="form-group">
            <label>Título</label>
            <input type="text" v-model="candidato.titulo" readonly />
          </div>
          
          <div class="form-group">
            <label>Nombre</label>
            <input type="text" v-model="candidato.nombre" readonly />
          </div>
          
          <div class="form-group">
            <label>Apellido</label>
            <input type="text" v-model="candidato.apellido" readonly />
          </div>
          
          <div class="form-group">
            <label>Email</label>
            <input type="text" v-model="candidato.email" readonly />
          </div>
          
          <div class="form-group">
            <label>Ciudad</label>
            <input type="text" v-model="candidato.ciudad" readonly />
          </div>
          
          <div class="button-group">
            <button type="button" @click="buscarCandidato" class="btn-buscar">
              Buscar
            </button>
            <button type="submit" class="btn-agregar" :disabled="!candidatoValido">
              Agregar
            </button>
          </div>
        </form>
      </div>
      
      <div>
        <label>Fotografía</label>
        <div class="foto-container">
          <div class="foto-placeholder" v-if="!candidato.foto"></div>
          <img v-else :src="candidato.foto" alt="Foto del candidato" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {consumirAPIFacade} from '../clients/RandomUserClient.js';

export default {
  name: 'Candidato',
  data() {
    return {
      candidato: {
        foto: '',
        titulo: '',
        nombre: '',
        apellido: '',
        email: '',
        ciudad: ''
      }
    }
  },
  computed: {
    candidatoValido() {
      return this.candidato.nombre && this.candidato.apellido;
    }
  },
  methods: {
    async buscarCandidato() {
      try {
        const data = await consumirAPIFacade();
        const usuario = data.results[0];
        
        this.candidato = {
          foto: usuario.picture.large,
          titulo: usuario.name.title,
          nombre: usuario.name.first,
          apellido: usuario.name.last,
          email: usuario.email,
          ciudad: usuario.location.city
        };
      } catch (error) {
        console.error('Error al buscar candidato:', error);
        alert('Error al consultar la API');
      }
    },
    agregarCandidato() {
      if (this.candidatoValido) {
        this.$emit('agregar-candidato', {
          titulo: this.candidato.titulo,
          nombre: this.candidato.nombre,
          apellido: this.candidato.apellido,
          email: this.candidato.email,
          ciudad: this.candidato.ciudad
        });
      }
    }
  }
}
</script>

<style scoped>
.candidato-form {
  border: 1px solid blue;
}

.form-header {
  display: flex;
}

.foto-container {
  width: 120px;
  height: 120px;
  border: 2px solid blue;
  margin-left: 10px;
}

.foto-placeholder {
  width: 100%;
  height: 100%;
}

.foto-container img {
  width: 100%;
  height: 100%;
}

input {
  width: 100%;
}

.button-group {
  display: flex;
}
</style>