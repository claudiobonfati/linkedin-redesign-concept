import React from 'react';
import Image from 'next/image';
import { TimelineMax, TweenMax, Power3 } from 'gsap';
import styles from './NotificationsButton.module.sass';
import ProfileDisplay from './ProfileDisplay';

class NotificationsButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      currentTab: 0,
    };

    this.onClickButton = this.onClickButton.bind(this);
    this.activateTab = this.activateTab.bind(this);
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  componentDidMount() {
    this.tlShowTabNotification = new TimelineMax({ paused: true });
    this.tlShowTabNotification
      .from(this.tabContentNotificationRef, 0.2, {
        css: {
          opacity: 0,
          display: 'none',
          scale: 0.95,
        },
        ease: Power3.easeOut,
      });

    this.tlShowTabRequest = new TimelineMax({ paused: true });
    this.tlShowTabRequest
      .from(this.tabContentRequestRef, 0.2, {
        css: {
          opacity: 0,
          display: 'none',
          scale: 0.95,
        },
        ease: Power3.easeOut,
      });

    this.toggleVisibility();
  }

  onClickButton() {
    this.setState((prevState) => ({
      isVisible: !prevState.isVisible,
    }), () => {
      this.toggleVisibility();
    });
  }

  toggleVisibility() {
    if (this.state.isVisible) {
      TweenMax.to(this.dropRef, 0.2, {
        css: {
          opacity: 1, display: 'block', scale: 1,
        },
        ease: Power3.easeOut,
      });
    } else {
      TweenMax.to(this.dropRef, 0.2, {
        css: {
          opacity: 0, display: 'none', scale: 0.95,
        },
        ease: Power3.easeOut,
      });
    }

    this.activateTab(0);
  }

  activateTab(tab) {
    this.setState({
      currentTab: tab,
    });

    if (tab === 0) {
      this.tlShowTabRequest.reverse();
      setTimeout(() => {
        this.tlShowTabNotification.play();
      }, 200);
    } else if (tab === 1) {
      this.tlShowTabNotification.reverse();
      setTimeout(() => {
        this.tlShowTabRequest.play();
      }, 200);
    }
  }

  render() {
    return (
      <div className={`ml-3 ${styles.wrapper}`}>
        <button
          aria-expanded="false"
          className={`${styles.navBarButtons} ${this.state.isVisible ? 'active' : ''}`}
          type="button"
          onClick={this.onClickButton}
        >
          <span className="lnr lnr-flag" />
        </button>
        <div className={styles.wrapperDrop} ref={(ref) => { this.dropRef = ref; }}>
          <nav className={styles.dropHeader}>
            <ul>
              <li className={this.state.currentTab === 0 ? styles.activeItem : ''}>
                <button type="button" onClick={() => this.activateTab(0)}>
                  Notifications
                </button>
              </li>
              <li className={this.state.currentTab === 1 ? styles.activeItem : ''}>
                <button type="button" onClick={() => this.activateTab(1)}>
                  Requests
                </button>
              </li>
            </ul>
          </nav>
          <div className="content px-4">
            <div ref={(ref) => { this.tabContentNotificationRef = ref; }}>
              <div className={`py-4 ${styles.dropContentItem}`}>
                <span className="d-block mb-3">
                  7 people viewed you profile
                </span>
                <div className={styles.listProfilePics}>
                  {[...Array(4)].map(() => (
                    <div className="mr-2">
                      <Image
                        src="https://i.pravatar.cc/300"
                        alt="Profile picture"
                        className={`circle-image ${styles.profilePic}`}
                        width={40}
                        height={40}
                      />
                    </div>
                  ))}
                  <div className={`mr-2 small ${styles.profilePic}`}>
                    <span>+3</span>
                  </div>
                </div>
              </div>
              <div className={styles.dropContentItem}>
                <ProfileDisplay
                  imgSize={50}
                  title="Jenson Kent"
                  subtitle="published an article: 'What to do for'"
                />
              </div>
              <div className={styles.dropContentItem}>
                <ProfileDisplay
                  imgSize={50}
                  title="Emily Kilimanjaro"
                  subtitle="is now a connection"
                />
              </div>
              <div className={styles.dropContentItem}>
                <ProfileDisplay
                  imgSize={50}
                  title="Daniel Estienne"
                  subtitle="is now a connection"
                />
              </div>
            </div>
            <div ref={(ref) => { this.tabContentRequestRef = ref; }}>
              <div className={`py-4 ${styles.dropContentItem}`}>
                <span className="d-block mb-3">
                  8 people viewed you profile
                </span>
                <div className={styles.listProfilePics}>
                  {[...Array(4)].map(() => (
                    <div className="mr-2">
                      <Image
                        src="https://i.pravatar.cc/300"
                        alt="Profile picture"
                        className={`circle-image ${styles.profilePic}`}
                        width={40}
                        height={40}
                      />
                    </div>
                  ))}
                  <div className={`mr-2 small ${styles.profilePic}`}>
                    <span>+3</span>
                  </div>
                </div>
              </div>
              <div className={styles.dropContentItem}>
                <ProfileDisplay
                  imgSize={50}
                  title="Jenson Kent"
                  subtitle="published an article: 'What to do for'"
                />
              </div>
              <div className={styles.dropContentItem}>
                <ProfileDisplay
                  imgSize={50}
                  title="Emily Kilimanjaro"
                  subtitle="is now a connection"
                />
              </div>
              <div className={styles.dropContentItem}>
                <ProfileDisplay
                  imgSize={50}
                  title="Daniel Estienne"
                  subtitle="is now a connection"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NotificationsButton;