import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Detail = () => {
    const params = useParams()
    const [dataDetail, setDetail] = useState([])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_URL}/live/country/${params.Slug}/status/confirmed`).then((response) => {
        const data = response.data.reverse()
        setDetail(data)
      }).catch((err) => {
        console.log(err)
      })
    }, [])

    return(
      <div className="text-center mt-2">
        <h2>{params.Slug.toUpperCase()}</h2>
          <div style={{ overflow: 'scroll', width: '100%', height: '470px'}} className="d-flex justify-content-center text-center">
            <table className="table table-striped table-hover mt-3">
              <thead>
                <tr>
                  <th scope="col">Confirmed</th>
                  <th scope="col">Deaths</th>
                  <th scope="col">Recovered</th>
                  <th scope="col">Active</th>
                  <th scope="col">Last Updated</th>
                </tr>
              </thead>
              <tbody>
              {
                dataDetail.map((item, i) => (
                  <tr key={i}>
                    <td>{item.Confirmed.toLocaleString('en').split(',').join('.')}</td>
                    <td>{item.Deaths.toLocaleString('en').split(',').join('.')}</td>
                    <td>{item.Recovered.toLocaleString('en').split(',').join('.')}</td>
                    <td>{item.Active.toLocaleString('en').split(',').join('.')}</td>
                    <td>{item.Date.slice(0,10).split('-').reverse().join('-')}</td>
                  </tr>
                ))
              }
              </tbody>
            </table>
          </div>
        </div>
    )
}

export default Detail