// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALizVrr7-g6qUIuvWdWqqHijW3ct4nn9w",
  authDomain: "turmadeaerobica.firebaseapp.com",
  databaseURL: "https://turmadeaerobica-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "turmadeaerobica",
  storageBucket: "turmadeaerobica.appspot.com",
  messagingSenderId: "131746295513",
  appId: "1:131746295513:web:e006e94724a999b79818c8",
  measurementId: "G-TFY42TKKG5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
console.log('m')

var nome = document.querySelector('#nome')
var data = document.querySelector('#data')
var sexo = document.querySelector('#sexo')
var bi = document.querySelector('#bi')
var morada = document.querySelector('#morada')
var telefone = document.querySelector('#telefone')
var telefoneFamiliar = document.querySelector('#telefoneFamiliar')
var email = document.querySelector('#email')
var objectivo = document.querySelector('#objectivo')
var maiorVicio = document.querySelector('#maiorVicio')
var turmaGinastica = document.querySelector('#turmaGinastica')
var algoMais = document.querySelector('#algoMais')
var btnEnviar = document.querySelector('.btnEnviar')

alert('Preencher o formulário de cadastro da Academia Turma de Aeróbica é importante para personalizar os treinos e acompanhar seu progresso de forma eficiente. Também ajuda a manter um registro atualizado dos alunos e receber informações sobre novidades e promoções. Não deixe de preencher o formulário e aproveitar ao máximo sua experiência na academia.')

btnEnviar.addEventListener('click', ()=>{
    function writeUserData(userId, name, data, sexo, bi, morada, telefone, telefoneFamiliar, email, objectivo, maiorVicio, turmaGinastica, algoMais) {
        const db = getDatabase(app);
        set(ref(db, 'usuarios/' + userId), {
          nome: name,
          dataAniversario: data,
          sexo: sexo,
          bi: bi,
          morada: morada,
          telefone: telefone,
          telefoneFamiliar: telefoneFamiliar,
          email: email,
          objectivo: objectivo,
          maiorVicio: maiorVicio,
          turmaGinastica: turmaGinastica,
          algoMais: algoMais
        });

        alert('Os seus dados foram gravados com sucesso, obrigado pela tua contribuição!')
        return 0
      }

      try {
        writeUserData(telefone.value, nome.value, data.value, sexo.value, bi.value, morada.value, telefone.value, telefoneFamiliar.value, email.value, objectivo.value, maiorVicio.value, turmaGinastica.value, algoMais.value)
      } catch (error) {
        console.log(error)
      }
})

