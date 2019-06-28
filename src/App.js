import React, { Component } from 'react'
import { Container } from 'react-bootstrap';
import './App.css';

//Component//
import Subtotal from './componen/Subtotal/Subtotal';
import PickupSavings from './componen/PickupSavings/PickupSavings';
import TaxesFees from './componen/TaxesFees/TaxesFees';
import EstimatedTotal from './componen/EstimatedTotal/EstimatedTotal';
import ItemDetails from './componen/ItemDetails/ItemDetails';
import PromoCodeDiscounts from './componen/PromoCode/PromoCode';

//redux
import { connect } from 'react-redux';
import { handleChange } from './actions/promoCodeActions';

class App extends Component {
constructor(props){
  super(props);

  this.state={
    total : 49.25,
    pickupSavings: -3.85,
    taxes: 0,
    estimatedTotal: 0,
    disablePromoButton: false
  }
}

componentDidMount= () => {
  this.setState({
    taxes: 
    (this.state.total + this.state.pickupSavings) * 0.0875
  },
  function(){
    this.setState({
      estimatedTotal: 
      this.state.total + this.state.pickupSavings + this.state.taxes
    });
  }
  );
}

  giveDiscountHandler = () => {
    if (this.props.promoCode === 'OMPLF#2019'){
      this.setState({
        estimatedTotal : this.state.estimatedTotal * 0.9
      },
      function (){
        this.setState({
          disablePromoButton:true
        });
      }
      );
    }
  };

  render() {
    return (
      <div className="container">
        <Container className="purchase-card">
          <Subtotal price={this.state.total.toFixed(2)}/>
          <PickupSavings price={this.state.pickupSavings}/>
          <TaxesFees taxes={this.state.taxes.toFixed(2)}/>
          <hr/>
          <EstimatedTotal price={this.state.estimatedTotal.toFixed(2)}/>
          <ItemDetails price={this.state.estimatedTotal.toFixed(2)} />
          <PromoCodeDiscounts
            giveDiscount={()=> this.giveDiscountHandler()}
            isDisabled={this.state.disablePromoButton}
          />
        </Container>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  promoCode: state.promoCode.value
});

export default connect (mapStateToProps, {handleChange})(App);