import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header';
import MyCard from './components/MyCard';
import Footer from './components/footer';

function App() {

  return (
    <> 

      <div className='contenedor'>
      <Header titulo="Adopta un perrito" />
         <div className='contenedor_principal'>
      <MyCard image="public/img/perrito1.jpg" nombrePerrito="Haru" descripcionPerrito="Lleno de energía y listo para jugar. ¡Dale a Haru el hogar amoroso que se merece!" razaDelPerrito="Corgi" color="success" />
      <MyCard image="public/img/perrito2.jpg" nombrePerrito="Toby" descripcionPerrito="Es Juguetón, Amigable y se lleva bien con niños y otros animales. ¡Haz de Toby parte de tu familia hoy mismo!" razaDelPerrito="Basset houndush" color="info" />
      <MyCard image="public/img/perrito3.jpg" nombrePerrito="Almendra" descripcionPerrito="Un perro de tamaño Mediano con un corazon gigante. Hazte amigo de Almendra y experimenta un amor incondicional!" razaDelPerrito="YorkShire" color="danger" />
      <MyCard image="public/img/perrito4.jpg" nombrePerrito="Canelo" descripcionPerrito="Es una compañera leal y cariñosa que adora los mimos y los abrazos ¡Ayuda a Canelo a encontrar su final feliz!" razaDelPerrito="Husky" color="secondary" />
      </div>
      <Footer />
      </div>     
      
     
     
    </>
  );
};

export default App
