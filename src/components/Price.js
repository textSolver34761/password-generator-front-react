/*import React from "react"

class Price extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            minValue: 0,
            maxValue: 20000,
            step: 1000,
            firstValue: null,
            secondValue: null,
        };

        this.handleChange = this.handleChange.bind(this);
    }

    componentWillMount() {
        this.setState({
            firstValue: this.state.minValue,
            secondValue: this.state.maxValue,
        });
    }

    handleChange(name, event) {
        //We set the state value depending on input that is clicked
        if (name === "second") {
            let newValue = parseInt(this.state.firstValue) + parseInt(this.state.step);
            //The second value can't be lower than the first value
            if (parseInt(this.state.secondValue) > parseInt(newValue)) {
                this.setState({ secondValue: event.target.value });
            }
        } else {
            //The first value can't be greater than the second value
            if (parseInt(this.state.firstValue) < parseInt(this.state.secondValue)) {
                this.setState({ firstValue: event.target.value });
            }
        }
    }

    render() {
        const language = this.props.language;

        return (
            <div>
                <div className="priceTitle">{language.price}</div>
                <div className="rangeValues">
                    Range : {this.state.firstValue} - {this.state.secondValue}
                </div>

                <section className="range-slider">
                    <input
                        type="range"
                        value={this.state.firstValue}
                        min={this.state.minValue}
                        max={this.state.maxValue}
                        step={this.state.step}
                        onChange={this.handleChange.bind(this, "first")} />
                    <input
                        type="range"
                        value={this.state.secondValue}
                        min={this.state.minValue}
                        max={this.state.maxValue}
                        step={this.state.step}
                        onChange={this.handleChange.bind(this, "second")} />

                    <div className="minValue">{this.state.minValue}</div>
                    <div className="maxValue">{this.state.maxValue}</div>
                </section>
            </div>
        );
    }
}
export default Price;
*/