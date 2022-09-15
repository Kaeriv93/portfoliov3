import "./HeroImg2.styles.scss";
import {Component} from 'react';

class Heroimg2 extends Component{
    render(){
        return (
            <div className="hero2-container">
                <div className="hero2-heading">
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>
                </div>
            </div>
        )
    }
}

export default Heroimg2