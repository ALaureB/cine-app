import React, { Component } from "react";

interface ISearchBarProps {}

interface ISearchBarState {
  searchText: string;
  placeHolder: string;
}

class SearchBar extends Component<ISearchBarProps, ISearchBarState> {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(props: Readonly<ISearchBarProps>) {
    super(props);
    this.state = {
      searchText: "",
      placeHolder: "Rechercher un film"
    };
  }

  handleChange(event: React.FormEvent<HTMLInputElement>) {
    this.setState({
      searchText: event.currentTarget.value
    });
  }

  render() {
    return (
      <input
        placeholder={this.state.placeHolder}
        onChange={this.handleChange.bind(this)}
      />
    );
  }
}

export default SearchBar;
