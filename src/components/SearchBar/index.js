import React from 'react';

class SeachBar extends React.Component {
    state = {
        searchQ: '',
        picked: 'day'
    };

    inputChange = event => {
        this.setState({ searchQ: event.target.value });
    }

    filtersChange = event => {
        this.setState({ picked: event.target.value });
    }

    onFormSubmit = event => {
        event.preventDefault();
        this.props.submit(this.state.searchQ, this.state.picked);
        this.setState({ searchQ: '', picked: 'day' });
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.onFormSubmit}>
                    <input className="input" type="Text" value={this.state.searchQ} placeholder="e.g. Programmer" onChange={this.inputChange} />
                    <button className="submit-btn" type="submit">Search</button>
                    <div className="filters">
                        <ul>
                            <li>
                                <input type="radio" value="hour" name="filter" id="hour" onChange={this.filtersChange} checked={this.state.picked === 'hour'} />
                                <label for="hour">Hour</label>
                            </li>
                            <li>
                                <input type="radio" value="day" name="filter" id="day" onChange={this.filtersChange} checked={this.state.picked === 'day'} />
                                <label for="day">Day</label>
                            </li>
                            <li>
                                <input type="radio" value="week" name="filter" id="week" onChange={this.filtersChange} checked={this.state.picked === 'week'} />
                                <label for="week">Week</label>
                            </li>
                            <li>
                                <input type="radio" value="month" name="filter" id="month" onChange={this.filtersChange} checked={this.state.picked === 'month'} />
                                <label for="month">Month</label>
                            </li>
                            <li>
                                <input type="radio" value="year" name="filter" id="year" onChange={this.filtersChange} checked={this.state.picked === 'year'} />
                                <label for="year">Year</label>
                            </li>
                            <li>
                                <input type="radio" value="all" name="filter" id="all" onChange={this.filtersChange} checked={this.state.picked === 'all'} />
                                <label for="all">All</label>
                            </li>
                        </ul>
                    </div>
                </form>
            </div>
        )
    }
}

export default SeachBar;
