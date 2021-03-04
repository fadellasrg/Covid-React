import { useState, useEffect } from 'react'
import axios from 'axios'
import styles from './style.module.css'
// import Detail from '../component/Detail'
import { Link } from 'react-router-dom'

const Home = () => {
    const [summary, setSummary] = useState([])

    useEffect(() => {
        axios.get('https://api.covid19api.com/summary').then((response)=>{
            setSummary(response.data.Countries)
        }).catch((err)=>{
            console.log(err)
        })
    }, [])

    return(
        <div className="container text-center mt-2">
          <div style={{ overflow: 'scroll', width: '100%', height: '500px'}}>
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th scope="col">Country</th>
                  <th scope="col">Total Confirmed</th>
                  <th scope="col">Total Deaths</th>
                  <th scope="col">Total Recovered</th>
                  <th scope="col">Date</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
              {
                summary.map((item, i) => (
                  <tr key={i}>
                    <td>{item.Country}</td>
                    <td>{item.TotalConfirmed.toLocaleString('en').split(',').join('.')}</td>
                    <td>{item.TotalDeaths.toLocaleString('en').split(',').join('.')}</td>
                    <td>{item.TotalRecovered.toLocaleString('en').split(',').join('.')}</td>
                    <td>{item.Date.slice(0,10).split('-').reverse().join('-')}</td>
                    <td>
                      {/* <button onClick={detail(item.Slug)} id="btn-detail" type="button" className="btn">Detail */}
                      <Link to={`/detail/${item.Slug}`} className="nav-link"><button id={styles.btnDetail} className="btn">Detail</button></Link>
                    </td>
                  </tr>
                ))
              }
              </tbody>
            </table>
          </div>
        <hr/>
            {/* <Detail title="Hello World"/> */}
        </div>
    )
}

export default Home