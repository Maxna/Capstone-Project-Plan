import React from 'react';
import NewFeedbackForm from './NewFeedbackForm';
import FeedbackConditions from './FeedbackConditions';
import PropTypes from 'prop-types';

class NewFeedbackControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleFeedbackFormConfirmation=this.handleFeedbackFormConfirmation.bind(this);
  }

  handleFeedbackFormConfirmation(){
    this.setState({formVisibleOnPage: true});
  }

  render(){
    let currentlyVisibleContent=null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleContent=<NewFeedbackForm onNewFeedbackCreation={this.props.onNewFeedbackCreation}/>;
    } else {
      currentlyVisibleContent=<FeedbackConditions onFeedbackFormConfirmation={this.handleFeedbackFormConfirmation}/>;
    }
    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

NewFeedbackControl.propTypes={
  onNewFeedbackCreation: PropTypes.func
};

export default NewFeedbackControl;
