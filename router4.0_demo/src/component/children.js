import React,{Component} from 'react';
import { Route, Link } from 'react-router-dom';

class Children extends Component{
    constructor(props) {
        super(props)
        //这里接收不到动态传参
        console.log(this.props.match)
    }

    render() {
        const first = (obj) => {
             //只有这里可以接收到参数
            console.log(obj)
             //这里接收不到动态传参
            console.log(this)
            let id = obj.match.params.id;
            return <div>The {id} method</div>
        }
        return(
            <div>
                <ul>
                    <li><Link to='/children/first'>1</Link></li>
                    <li><Link to='/children/secend'>2</Link></li>
                    <li><Link to='/children/third'>3</Link></li>
                    <Route path="/children/:id" component={first} />
                </ul>
            </div>
        )
    }
}

export default Children