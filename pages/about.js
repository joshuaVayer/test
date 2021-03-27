// pages/index.js
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="about">
        <div className="about__firstSection">
          <div className="about__firstSection-right">
            <div className="about__title">
              <img src="/img/linea52.png" alt="LineTitle" />
              <h1>About me</h1>
            </div>
            <p>
              Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum
              ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor N.
              del T. persona que se dedica a la imprenta desconocido usó una galería de textos y los mezcló de
              tal manera que logró hacer un libro de textos especimen.
            </p>
            <p>
              No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos
              electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la
              creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más
              recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye
              versiones de Lorem Ipsum.
            </p>
            <a className="btn btn-secondary rounded-pill" href="#">Download my resume</a>
          </div>
          <div className="about__firstSection-left">
            <img className="img-fluid" src="/img/joshuafull.jpg" alt="Joshua" />
          </div>
        </div>
        <div className="about__secondSection">
          <div className="about__title">
            <img src="/img/linea52.png" alt="LineTitle" />
            <h1>Skills</h1>
          </div>
          <div className="skills">
            <div className="card mr-2">
              <div className="card-body">
                <h4 className="card-title">Back-end</h4>
                <img src="/img/linea5.png" alt="Line" />
                <ul className="dashed">
                  <li>Element one</li>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum assumenda delectus
                  quia perspiciatis, distinctio similique excepturi est accusantium neque deserunt?
                        </p>
                  <li>Element two</li>
                  <li>Element three</li>
                </ul>
              </div>
            </div>
            <div className="card mr-2 ml-2">
              <div className="card-body">
                <h4 className="card-title">Front-end</h4>
                <img src="/img/linea5.png" alt="Line" />
                <ul className="dashed">
                  <li>Element one</li>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum assumenda delectus
                  quia perspiciatis, distinctio similique excepturi est accusantium neque deserunt?
                        </p>
                  <li>Element two</li>
                  <li>Element three</li>
                </ul>
              </div>
            </div>
            <div className="card ml-2">
              <div className="card-body">
                <h4 className="card-title">Web design</h4>
                <img src="/img/linea5.png" alt="Line" />
                <ul>
                  <li>Element one</li>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum assumenda delectus
                  quia perspiciatis, distinctio similique excepturi est accusantium neque deserunt?
                        </p>
                  <li>Element two</li>
                  <li>Element three</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
