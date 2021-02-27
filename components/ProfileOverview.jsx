import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Image } from 'react-image-and-background-image-fade';
import FeatherIcon from 'feather-icons-react';
import styles from './ProfileOverview.module.sass';
import MaskNumber from '../utils/MaskNumber';

const profileOverview = (props) => (
  <div className={styles.wrapper}>
    <div className={styles.topInfoWrapper}>
      <div className={styles.photoWrapper}>
        <Image
          src={props.photo}
          alt="Profile"
        />
      </div>
      <div className={styles.name}>
        {props.name}
      </div>
      <div className={styles.position}>
        {props.position}
      </div>
    </div>
    <div className={styles.infoWrapper}>
      <div className={`${!props.views ? styles.fullWidth : ''} ${styles.infoLeft}`}>
        <div className={styles.value}>
          {MaskNumber(props.connections)}
        </div>
        <span className={styles.title}>
          {props.views ? 'Connections' : 'Followers'}
        </span>
      </div>
      {props.views
      && (
      <div className={styles.infoRight}>
        <div className={styles.value}>
          {MaskNumber(props.views)}
        </div>
        <span className={styles.title}>
          Views
        </span>
      </div>
      )}
    </div>
    {props.actionMyProfile
    && (
      <Link href="/me/details" scroll={false}>
        <a className={styles.footerAction} title="View my profile">
          View my profile
        </a>
      </Link>
    )}
    {!props.actionMyProfile
    && (
      <div className={styles.socialNetworks}>
        {props.email
        && (
          <a href={`mailto:${props.email}`} className={styles.item}>
            <FeatherIcon icon="globe" size="16" strokeWidth="1" fill />
            {props.email}
          </a>
        )}
        {props.twitter
        && (
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className={styles.item}>
            <FeatherIcon icon="twitter" size="16" strokeWidth="1" fill />
            {props.twitter}
          </a>
        )}
        {props.skype
        && (
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className={styles.item}>
            <FeatherIcon icon="facebook" size="16" strokeWidth="1" fill />
            {props.skype}
          </a>
        )}
      </div>
    )}
  </div>
);

profileOverview.propTypes = {
  photo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  connections: PropTypes.number.isRequired,
  views: PropTypes.number,
  actionMyProfile: PropTypes.bool,
  email: PropTypes.string,
  twitter: PropTypes.string,
  skype: PropTypes.string,
};

profileOverview.defaultProps = {
  actionMyProfile: false,
  views: null,
  email: null,
  twitter: null,
  skype: null,
};

export default profileOverview;
