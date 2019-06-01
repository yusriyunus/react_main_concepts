import React from "react";
import data from "./data/index.json";
import "./App.css";

class ProductCategoryRow extends React.Component {
  render() {
    const { category } = this.props;
    return (
      <tr>
        <th colSpan="2">{category}</th>
      </tr>
    );
  }
}

class ProductRow extends React.Component {
  render() {
    const { product } = this.props;
    const name =
      product.stocked === true ? (
        product.name
      ) : (
        <span style={{ color: "red" }}>{product.name}</span>
      );
    return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
}

class ProductTable extends React.Component {
  render() {
    const { filterText, inStockOnly, products } = this.props;
    const rows = [];
    let lastCategory = null;

    products.forEach(product => {
      console.log(product.name.indexOf(filterText));
      if (product.name.indexOf(filterText) === -1) {
        return;
      }
      if (inStockOnly && !product.stocked) {
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category}
          />
        );
      }
      rows.push(<ProductRow product={product} key={product.name} />);
      lastCategory = product.category;
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class SearchBar extends React.Component {
  handleFilterTextChange = e => {
    this.props.onFilterTextChange(e.target.value);
  };

  handleInStockChange = e => {
    this.props.onInStockChange(e.target.checked);
  };

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={this.props.filterText}
          onChange={this.handleFilterTextChange}
        />
        <p>
          <input
            type="checkbox"
            checked={this.props.inStockOnly}
            onChange={this.handleInStockChange}
          />
          {``}
          Only show products in stock
        </p>
      </form>
    );
  }
}

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: "",
      inStockOnly: ""
    };
  }

  handleFilterTextChange = filterText => {
    this.setState({
      filterText
    });
  };

  handleInStockChange = inStockOnly => {
    this.setState({
      inStockOnly
    });
  };

  render() {
    const { filterText, inStockOnly } = this.state;
    return (
      <div>
        <SearchBar
          filterText={filterText}
          inStockOnly={inStockOnly}
          onFilterTextChange={this.handleFilterTextChange}
          onInStockChange={this.handleInStockChange}
        />
        <ProductTable
          products={data}
          filterText={filterText}
          inStockOnly={inStockOnly}
        />
      </div>
    );
  }
}

function App() {
  return <FilterableProductTable />;
}

export default App;
