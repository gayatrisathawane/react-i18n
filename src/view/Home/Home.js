import './Home.css'
import I18n from '../../utils/i18n'

const Home = () => {


  return (
    <div>
         
          <div className='lang-div'>
            <select   
            defaultValue={localStorage.getItem('lang')}
            onChange={(e)=>{
              localStorage.setItem('lang', e.target.value)
              window.location.reload()

            }}>
              <option value="en">English</option>
              <option value="mr">Marathi</option>
              <option value="hi">Hindi</option>

            </select>
          </div>
       <div className='qoutes-div'>
        <h2 className='heading'>{I18n("topic")}</h2>
        <p className='text'>{I18n("text")}</p>
       </div>

      
    </div>
  )
}

export default Home
