import Card from '../../components/Card'
import data from './data'
import './certificates.css'

const certificates = () => {
  return (
    <section id="services">
      <h2>My Certifications</h2>
      <p>Check my Certifications below</p>
      <div className="container services__container" data-aos="fade-up">
        {
          data.map(item => (
            <Card key={item.id} className="service light">
              <div className="service__icon">{item.icon}</div>
              <div className="service__details">
                <h4>{item.title}</h4>
                  <p>{item.desc}</p>
              </div>
            </Card>
          ))
        }
      </div>
    </section>
  )
}

export default certificates