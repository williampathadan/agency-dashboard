import React, { Component } from 'react';
import './Inbox.css';
import Module from '../../components/Module/Module';
import ModuleSidePane from '../../components/ModuleSidePane/ModuleSidePane';
import ModuleMainPane from '../../components/ModuleMainPane/ModuleMainPane';
import ModuleSearch from '../../components/ModuleSearch/ModuleSearch';

class Inbox extends Component {

  render() {
    return (
      <Module>
        <ModuleSidePane>
          <ModuleSearch />
          <div className="InboxMessages">

            <div className="InboxMessages__item InboxMessages__item--unread">
              <div className="InboxMessages__item__content">
                <div className="InboxMessages__item__icon" />
                <div className="InboxMessages__item__text">
                  <div className="line">
                    <div className="sender">Antony Pathadan</div>
                    <div className="timestamp">12 mins</div>
                  </div>
                  <div className="line line2">
                    <div className="subject">Request for website quote</div>
                    <div className="dots">
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="InboxMessages__item">
              <div className="InboxMessages__item__content">
                <div className="InboxMessages__item__icon" />
                <div className="InboxMessages__item__text">
                  <div className="line">
                    <div className="sender">Antony Pathadan</div>
                    <div className="timestamp">12 mins</div>
                  </div>
                  <div className="line line2">
                    <div className="subject">Request for website quote</div>
                    <div className="dots">
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="InboxMessages__item">
              <div className="InboxMessages__item__content">
                <div className="InboxMessages__item__icon" />
                <div className="InboxMessages__item__text">
                  <div className="line">
                    <div className="sender">Antony Pathadan</div>
                    <div className="timestamp">12 mins</div>
                  </div>
                  <div className="line line2">
                    <div className="subject">Request for website quote</div>
                    <div className="dots">
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </ModuleSidePane>

        <ModuleMainPane />
      </Module>
    );
  }

}

export default Inbox;
