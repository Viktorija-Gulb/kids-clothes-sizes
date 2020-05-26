import React from "react";
import "./SearchBy.scss";
import allData from "../../data/allData.json";

class SearchBy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchList: allData,
      currentSearch: "",
      searchSuccess: "",
      searchError: "",
    };

    this.onFieldChange = this.onFieldChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onFieldChange(e) {
    this.setState({
      currentSearch: e.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    console.log(parseInt(this.state.searchList[2].height));

    let filteredSearch = this.state.searchList.filter((item) => {
      return item.height.includes(parseInt(this.state.currentSearch));
    });

    let searchRezult = filteredSearch.map((item, i) => {
      return (
        <div key={i}>
          <p>Id: {item.id}</p>
          <p>Size :{item.size}</p>
          <p>Height: {item.height}</p>
          {item.weight ? <p>Weight: {item.weight}</p> : ""}
          {item.chest ? <p>Chest: {item.chest}</p> : ""}
          {item.waist ? <p>Waist: {item.waist}</p> : ""}
          {item.hips ? <p>Hips: {item.hips}</p> : ""}
        </div>
      );
    });

    this.setState({
      currentSearch: "",
      searchSuccess: searchRezult,
    });
  }

  render() {
    return (
      <div className="search-wrapper">
        <h2>Search</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="currentSearch">Ieškoti pagal ūgį</label>
            <input
              type="text"
              name="currentSearch"
              placeholder="Ieškoti pagal ūgį..."
              value={this.state.currentSearch}
              onChange={this.onFieldChange}
            />
          </div>
          <button>Ieškoti</button>
        </form>

        <h2>Paieškos rezultatai:</h2>
        <div>{this.state.searchSuccess}</div>
      </div>
    );
  }
}

export default SearchBy;
