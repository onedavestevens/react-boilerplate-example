/**
*
* LinkForm
*
*/

import React from 'react';

import styles from './styles.css';
import TextInput from '../TextInput';

class LinkForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    addLink: React.PropTypes.func.isRequired,
    topicName: React.PropTypes.string.isRequired,
  }

  onAdd = () => {
    const url = this.url.value();
    const description = this.description.value();

    this.props.addLink({
      url,
      description,
      topicName: this.props.topicName,
    });
  };

  render() {
    return (
      <div className={styles.overlay}>
        <div className={styles.linkForm}>
          <div className={styles.heading}>
            Add a link
          </div>
          <TextInput
            placeholder="URL"
            className={styles.input}
            ref={(f) => (this.url = f)}
          />
          <TextInput
            placeholder="Description"
            className={styles.input}
            ref={(f) => (this.description = f)}
          />
          <div className={styles.actionContainer}>
            <div
              className={styles.button}
              onClick={this.props.cancelLogin}
            >
              cancel
            </div>
            <div
              className={styles.button}
              onClick={this.onAdd}
            >
              add
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LinkForm;
