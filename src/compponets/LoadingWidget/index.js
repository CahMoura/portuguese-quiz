import React from 'react';

import Widget from '../Widget';

function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>
        {/* <BackLinkArrow href="/" */}
        <h3>
          Let is dance a Samba ...
        </h3>
      </Widget.Header>

      <img
        alt="Descrição"
        style={{
          width: '100%',
          height: 'auto',
          objectFit: 'cover',
        }}
        sound="assets/Batuque Bom - Quincas Moreira.mp3"
        src="https://media4.giphy.com/media/atajvz5OSnwlg07vXN/giphy.gif?cid=ecf05e47d323oa7mybekgu24bf7x0dayt72z4v3nvx3qsu80&rid=giphy.gif"
      />
    </Widget>
  );
}

export default LoadingWidget;
