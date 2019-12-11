import React, { Component } from 'react';
import { connect } from 'react-redux';
import { InputSearch } from '../../components/uielements/input';
import mailList from '../../components/mail/maiilList';
import singleMail from '../../components/mail/singleMail';
import mailActions from '../../redux/mail/actions';

import mailSelector from '../../redux/mail/selector';

const {
  filterAction,
  selectMail,
  changeComposeMail,
  changeReplyMail,
  changeSearchString,
} = mailActions;

class DesktopView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: this.props.searchString,
    };
  }
  render() {
    const {
      allMails,
      filterAttr,
      filterMails,
      selectedMail,
      composeMail,
      replyMail,
      selectMail,
      filterAction,
      changeComposeMail,
      changeReplyMail,
      changeSearchString,
    } = this.props;
    const { search } = this.state;
    let singleMailComponent = <p className="isoNoMailMsg"></p>;
    const index = allMails.findIndex(mail => mail.id === selectedMail);
    if (index !== -1) {
      singleMailComponent = singleMail(
        allMails,
        filterMails,
        index,
        replyMail,
        changeReplyMail,
        selectMail
      );
    }
    return (
      <>
        <div className="isoSearchMailWrapper">
          <center>
            <InputSearch
              placeholder="Pesquisar Cliente"
              value={search}
              className="isoSearchEmail"
              onChange={event => this.setState({ search: event.target.value })}
              onSearch={value => changeSearchString(value)}
            />{' '}
          </center>
        </div>

        {mailList(filterMails, selectMail, selectedMail)}
      </>
    );
  }
}

function mapStateToProps(state) {
  const {
    allMails,
    tag,
    selectedMail,
    filterAttr,
    composeMail,
    replyMail,
    searchString,
  } = state.Mail;
  return {
    allMails,
    tag,
    selectedMail,
    filterAttr,
    composeMail,
    replyMail,
    searchString,
    filterMails: mailSelector(state.Mail),
  };
}
export default connect(
  mapStateToProps,
  {
    filterAction,
    selectMail,
    changeComposeMail,
    changeReplyMail,
    changeSearchString,
  }
)(DesktopView);
