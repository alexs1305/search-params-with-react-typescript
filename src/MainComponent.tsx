import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router";

type State = { search: string; count: number };

class MainComponent extends React.Component<RouteComponentProps<any>, State> {
  state = {
    search: this.props.location.search,
    count: 0
  };

  componentDidMount() {
    let search = this.getUrlParams().toString();
    this.setState({ search: search });
  }

  componentDidUpdate() {
    let search = this.getUrlParams().toString();
    if (this.didQueryChange(search)) this.setState({ search: search });
  }

  render() {
    let name = this.getName();
    return (
      <div>
        name is: {name}{" "}
        <button onClick={this.increaseCount}>count: {this.state.count}</button>
      </div>
    );
  }

  increaseCount = () => this.setState({ count: this.state.count + 1 });

  getName(): string {
    let search = this.getUrlParams();
    return search.get("name") || "";
  }

  didQueryChange(search: string): boolean {
    return this.state.search !== search;
  }

  getUrlParams(): URLSearchParams {
    if (!this.props.location.search) return new URLSearchParams();
    return new URLSearchParams(this.props.location.search);
  }
}

export default withRouter(MainComponent);
