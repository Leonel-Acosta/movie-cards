import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from "./components/Cards";
import { Container} from "react-bootstrap";
import AddForm from "./components/addform"
import Header from "./components/header";



function App() {
  return (


    <div className="App">
      
      <Header />
        <Container className="d-flex flex-row flex-wrap justify-content-center p-2 bd-highlight">
          <Cards 
          title="Todo sobre mi madre"
          image="https://static.carrefour.es/hd_510x_/imagenes/products/21000/00213/849/2100000213849/imagenGrande1.jpg"
          director="Pedro Almodovar"
          abstract="Manuela recibe un duro golpe y decide huir del presente refugiándose en el pasado. Viaja hasta Barcelona, de donde salió embarazada hace dieciocho años. Va en busca de Esteban, el padre de su hijo, quien nunca supo que Manuela había sido madre."
          year="1999"
          cast="Cecilia Roth, Marisa Paredes, Candela Peña, Antonia San Juan, Penélope Cruz"
          />
          <Cards 
          title="Mar Adentro"
          image="http://img.over-blog-kiwi.com/0/96/61/56/20140313/ob_0902e5_mar-adentro-critica-cartel.jpg"
          director="Alejandro Amenábar"
          abstract="La historia de Ramón Sampedro tuvo una importante repercusión en España, y renovó el controvertido debate sobre la eutanasia. En España, la asistencia al suicidio estaba penalizada. El juicio por la legalización de la eutanasia se celebró en 1993 y fue de gran interés mediático. Ramón se quitó la vida en 1998 con la ayuda de su amiga Ramona Maneiro."
          year="2004"
          cast="Javier Bardem, Belén Rueda, Lola Dueñas, Mabel Rivera, Celso Bugallo"
          />
          <Cards 
          title="El Bar"
          image="https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/media/imagenes/recursos/elbar_cartel_online_af/126842898-1-esl-ES/ELBAR_CARTEL_ONLINE_AF.jpg?resize=480:*"
          director="Alex de la Iglesia"
          abstract="El bar es una película coproducción de España y Argentina dirigida por Álex de la Iglesia estrenada en 2017. Contó con un presupuesto de 5 millones de euros y recaudó en salas algo más de 3,5 millones de euros.2​ La historia presenta un reparto coral, como suele ser habitual en las películas de De la Iglesia."
          year="1999"
          cast="Blanca Suárez, Mario Casas, Carmen Machi, Secundino de la Rosa Márquez"
          />
      </Container>
    <AddForm/>

    </div>
  );
}

export default App;
