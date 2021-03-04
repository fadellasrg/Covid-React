import { Switch, Route } from 'react-router-dom'
import Home from '../views/Home'
import Detail from '../views/Detail'

const router = () => {
    return(
        <Switch>
            <Route path="/" exact>
                <Home/>
            </Route>
            <Route path="/detail/:Slug" exact>
                <Detail/>
            </Route>
        </Switch>
    )
}

export default router