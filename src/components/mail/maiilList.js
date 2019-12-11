import React from 'react';
import { tags, tagColor } from './mailTags.js';
import MailListWrapper from './mailList.style';

export default function mailList(
  mails,
  selectMail,
  selectedMail,
  toggleListVisible
) {
  const renderSingleMail = (mail, key) => {
    const onClick = () => {
      selectMail(mail.id);
      if (toggleListVisible) {
        toggleListVisible();
      }
    };
    const isSelected = selectedMail === mail.id;
    const recpName = mail.name;
    const signature = {
      splitLet: recpName
        .match(/\b(\w)/g)
        .join('')
        .split('', 2),
    };
    const activeClass = isSelected ? 'activeMail' : '';
    const unreadClass = !mail.read ? 'unreadMail' : '';
    const tagOption = mail.tags
      ? tagColor[tags.findIndex(tags => tags === mail.tags)]
      : 'transparent';
    return (
      <div
        key={`list${key}`}
        onClick={onClick}
        className={`${activeClass} ${unreadClass} isoMailList`}
      >
        <div className="isoMailInfo">
          <p className="isoSubject">{mail.name}</p>
          <div className="infoHead">
            <p className="isoRecipents">{mail.cnpj}</p>
          </div>
        </div>
      </div>
    );
  };
  return (
    <MailListWrapper className="isoMailListWrapper">
      {mails.map((mail, index) => renderSingleMail(mail, index))}
    </MailListWrapper>
  );
}
