import React from 'react';


class AnalyzeNow extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            emailFormat: false,
        };
    }
    
    updateInputValue(evt){
        this.setState({
            inputValue: evt.target.value
        })

        this.checkEmail(evt.target.value);
    }

    checkEmail(value){
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(re.test(String(value).toLowerCase())){
            this.setState({emailFormat:true})
            console.log('aaaaaaaaaaa');
        } else {
            this.setState({emailFormat:false})
            console.log('bbbbbbbbbbb');
        }
    }

    render(){
        return(
            <div className="carosel backgroundColor">
            <h5>ANALYZE NOW</h5>
            <h4>Wonder how much faster your website can go? <br/> Easily check your SEO Score now</h4>
            <br/>
            <input type="text" placeholder="Email Adress" className="input" value={this.state.inputValue}
                onChange= {evt => this.updateInputValue(evt)}
            />
            <button className="button" disabled={!this.state.emailFormat}>Analyze</button>

                    <div id="emptySpace"></div>
            </div>
        )
    }
    
}

export default AnalyzeNow