import React from 'react';
import cn from 'classnames';

// import { addChannel, removeChannel } from '../actions';

import Channels from './channels';
import Input from './input';

class App extends React.PureComponent {
  render() {
    const firstColCN = cn('col-3 py-md-3 bg-light');
    const secondColCN = cn('col-7 py-md-3 pl-md-5 bd-content bg-light');
    const thirdColCN = cn('col-2 bg-light py-md-3');
    return (
      <div className="container-fluid ">
        <div className="row flex-xl-nowrap m-4">
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
        <div className="row flex-xl-nowrap m-4">
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
        <div className="row flex-xl-nowrap m-4">
          <div className={firstColCN}>
            <Input placeholder="Добавить канал" />
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

export default App;
