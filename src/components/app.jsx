import React from 'react';
import cn from 'classnames';
// import { connect } from 'react-redux';
// import { withTranslation } from 'react-i18next';


// import { addChannel, removeChannel } from '../actions';

import Channels from '../features/channels/channels';
import Input from './input';
import NewChannelModal from '../features/channels/newChannelModal';

// import { addChannel } from '../features/channels/channelsSlice';

// const mapDispatchToProps = { addChannel };

class App extends React.PureComponent {
  render() {
    const firstColCN = cn('col-3 py-md-3 bg-light m-1');
    const secondColCN = cn('col-7 py-md-3 pl-md-5 bd-content bg-light m-1');
    const thirdColCN = cn('col-2 bg-light py-md-3 d-none d-lg-block m-1');
    // eslint-disable-next-line no-shadow
    // const { addChannel, t } = this.props;
    return (
      <div className="container-fluid">
        <div className="row flex-xl-nowrap">
          <div className={firstColCN}>
            <Input placeholder="Поиск канала" />
          </div>
          <div className={secondColCN}>
            <Input placeholder="Поиск сообщения" />
          </div>
          <div className={thirdColCN}>
            <Input placeholder="Пользователь" />
          </div>
        </div>
        <div className="row flex-xl-nowrap ">
          <div className={firstColCN}>
            <Channels />
          </div>
          <main className={secondColCN} role="main">
            {/* messages */}
          </main>
          <div className={thirdColCN}>
            {/* users */}
          </div>
        </div>
        <div className="row flex-xl-nowrap ">
          <div className={firstColCN}>
            <NewChannelModal />
          </div>
          <div className={secondColCN}>
            <Input placeholder="Новое сообщение" />
          </div>
          <div className={thirdColCN} />
        </div>
      </div>
    );
  }
}

// export default connect(null, mapDispatchToProps)(withTranslation()(App));
export default App;
