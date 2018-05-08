import React,{Component} from 'react'
import  { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../App';
import HelloComponent from '../component/hello';
import  AComponent from '../component/a';
import Children from '../component/children'
class Routers extends Component{
    render (){
        const first = (match) => {
            console.log(match)
            return <div>第一个</div>
        }
        const second = () => {
            return <div>第二个</div>
        }
        const third = () => {
            return <div>第三个</div>
        }
        return(
            <div>
                <Route exact path="/" render={()=><h2>Please press the button</h2>} />
                <Route path="/acomponent" component={AComponent} />
                <Route path="/hello" component={HelloComponent} />
                <Route path="/children" component={Children} />
            </div>
        )
    }
}

export default Routers