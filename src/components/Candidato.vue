<template>
  <div class="candidato-form">
    <div class="form-header">
      <div class="form-content">
        <form @submit.prevent="agregarCandidato">
          <div class="form-group">
            <label>Fotografía</label>
          </div>
          
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
      
      <div class="foto-container">
        <div class="foto-placeholder" v-if="!candidato.foto"></div>
        <img v-else :src="candidato.foto" alt="Foto del candidato" />
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
  padding: 30px;
  background: white;
  border: 3px solid #4169E1;
  border-radius: 30px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.form-header {
  display: flex;
  gap: 20px;
}

.form-content {
  flex: 1;
}

.foto-container {
  width: 150px;
  height: 150px;
  flex-shrink: 0;
  margin-top: 30px;
}

.foto-placeholder {
  width: 100%;
  height: 100%;
  border: 3px solid #4169E1;
  border-radius: 20px;
  background: white;
}

.foto-container img {
  width: 100%;
  height: 100%;
  border: 3px solid #4169E1;
  border-radius: 20px;
  object-fit: cover;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  font-weight: bold;
  margin-bottom: 8px;
  color: #4169E1;
  font-size: 18px;
}

.form-group input {
  width: 100%;
  padding: 10px 15px;
  border: 2px solid #4169E1;
  border-radius: 8px;
  font-size: 16px;
  background: white;
}

.button-group {
  display: flex;
  gap: 15px;
  margin-top: 25px;
}

.btn-buscar,
.btn-agregar {
  flex: 1;
  padding: 12px 30px;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;
  color: white;
}

.btn-buscar {
  background-color: #1E90FF;
}

.btn-buscar:hover {
  background-color: #1873CC;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(30, 144, 255, 0.3);
}

.btn-agregar {
  background-color: #1E90FF;
}

.btn-agregar:hover:not(:disabled) {
  background-color: #1873CC;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(30, 144, 255, 0.3);
}

.btn-agregar:disabled {
  background-color: #A0C4E8;
  cursor: not-allowed;
  opacity: 0.6;
}
</style>