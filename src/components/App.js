import React, { Component, PropTypes } from 'react'
import ArticleList from './ArticleList/index'
import Chart from './Chart'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import DayPicker, { DateUtils } from "react-day-picker";
import "react-day-picker/lib/style.css"

class App extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    state = {
        text: '',
        selected: null,
        from: null,
        to: null,
    }

    handleDayClick = day => {
        const range = DateUtils.addDayToRange(day, this.state);
        this.setState(range);
    }

    handleResetClick = e => {
        e.preventDefault();
        this.setState({
            from: null,
            to: null,
        });
    }

    render() {
        const { articles } = this.props
        const { from, to } = this.state;
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        return (
            <div>
                Enter your name: <input type="text" value={this.state.text} onChange={this.handleTextChange}/>
                <Select options = {options} value={this.state.selected} onChange = {this.handleSelectChange} multi/>
                { !from && !to && <p>Please select the <strong>first day</strong>.</p> }
                { from && !to && <p>Please select the <strong>last day</strong>.</p> }
                { from && to &&
                    <p>
                        You chose from { from.toString() } to { to.toString() }.
                        { ' ' }<a href="." onClick={ this.handleResetClick }>Reset</a>
                    </p>
                }
                <DayPicker
                    numberOfMonths={ 2 }
                    selectedDays={ [from, { from, to }] }
                    onDayClick={ this.handleDayClick }
                    firstDayOfWeek={ 1 }
                />
                <ArticleList articles={this.props.articles}/>
                <Chart articles={this.props.articles}/>
            </div>
        )
    }

    handleSelectChange = selected => {
        this.setState({ selected })
    }

    handleTextChange = ev => {
        if (ev.target.value.length > 10) return

        this.setState({
            text: ev.target.value
        })
    }
}

export default App