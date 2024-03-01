import Card from '../../components/Card'
import data from './data'
import './certificates.css'

const certificates = () => {
  return (
    <section id="services">
      <h2>My Skills</h2>
      <div className="container services__container" data-aos="fade-up">
        {
          data.map(item => (
            <Card key={item.id} className="about__card">
              <span className='about__card-icon'>{item.icon}</span>                    
            </Card>
          ))
        }
      </div>
    </section>
  )
}

export default certificates