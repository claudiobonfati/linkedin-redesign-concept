import React, { Fragment, useEffect, useState } from 'react';
import { withRouter } from 'next/router';
import { motion } from 'framer-motion';
import Sticky from 'react-sticky-el';
import Loading from '../../../components/Loading';
import SimpleCard from '../../../components/SimpleCard';
import Polaroid from '../../../components/Polaroid';
import ProfileOverview from '../../../components/ProfileOverview';
import ProfileDisplay from '../../../components/ProfileDisplay';
import { useUser, getRandomUsers } from '../../../graphql/hooks';
import defaultVariants from '../../../utils/FramerMotionDefault';

const profileDetails = (props) => {
  const { username } = props.router.query;
  const user = useUser(username);
  const [similarProfiles, setSimilarProfiles] = useState([]);

  useEffect(async () => {
    // Reseting scroll manually (FramerMotion dependency)
    window.scrollTo(0, 0);

    // Request "Similar progiles" list
    const profiles = await getRandomUsers(4, [`${user?.data?.id || null}`, '1']);
    setSimilarProfiles(profiles);
  }, []);

  return (
    <motion.div
      className="w-100"
      variants={defaultVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="container">
        <main className="row">
          <div className="col-lg-3 col-md-4 pt-4">
            <div className="sticky-aside-content">
              {(user
              && !user.error
              && user.loading) && (
                <Loading />
              )}
              {(user
              && !user.error
              && !user.loading)
              && (
                <Sticky topOffset={-20} scrollElement=".stickyArea">
                  <ProfileOverview
                    pro={user.data.pro}
                    photo={user.data.photo}
                    name={user.data.name}
                    position={user.data.headline}
                    connections={user.data.connections}
                    email={user.data.email}
                    twitter={user.data.twitter}
                    skype={user.data.skype}
                  />
                </Sticky>
              )}
            </div>
          </div>
          <div className="col-lg-6 col-md-8 py-4">
            {(user
            && !user.error
            && user.loading) && (
              <Loading />
            )}
            {(user
            && !user.error
            && !user.loading)
            && (
              <>
                <div className="mb-4">
                  <SimpleCard title="Summary">
                    <p className="m-0">{user.data.summary}</p>
                  </SimpleCard>
                </div>
                {(user.data.Experiences
                && user.data.Experiences.length > 0)
                && (
                  <div className="mb-4">
                    <SimpleCard title="Experience">
                      {user.data.Experiences.map((item, index) => (
                        <Fragment key={item.id}>
                          <div className="mb-2">
                            <ProfileDisplay
                              link={`/company/${item.Company.nameslug}/home`}
                              image={item.Company.logo}
                              imageSize={45}
                              imageSide="right"
                              title={item.Company.name}
                              blueLine={item.title}
                              subtitle={item.period}
                            />
                          </div>
                          <div className={index + 1 !== user.data.Experiences.length ? 'mb-4' : ''}>
                            <p>
                              {item.description}
                            </p>
                          </div>
                        </Fragment>
                      ))}
                    </SimpleCard>
                  </div>
                )}
                {(user.data.Courses
                && user.data.Courses.length > 0)
                && (
                  <div className="mb-4">
                    <SimpleCard title="Education">
                      {user.data.Courses.map((item, index) => (
                        <Fragment key={item.id}>
                          <div className="mb-2">
                            <ProfileDisplay
                              link={`/company/${item.Company.nameslug}/home`}
                              image={item.Company.logo}
                              imageSize={45}
                              imageSide="right"
                              title={item.Company.name}
                              blueLine={item.title}
                              subtitle={item.period}
                            />
                          </div>
                          <div className={index + 1 !== user.data.Courses.length ? 'mb-4' : ''}>
                            <p>
                              {item.description}
                            </p>
                          </div>
                        </Fragment>
                      ))}
                    </SimpleCard>
                  </div>
                )}
                {(user.data.Recommendations
                && user.data.Recommendations.length > 0)
                && (
                  <div className="mb-4">
                    <SimpleCard title="Recommendations">
                      {user.data.Recommendations.map((item, index) => (
                        <div className={`p-3 border-gray bg-gray-lighter ${index + 1 !== user.data.Recommendations.length ? 'mb-4' : ''}`} key={item.id}>
                          <ProfileDisplay
                            link={`/profile/${item.Author.username}/details`}
                            image={item.Author.photo}
                            imageSize={47}
                            title={item.Author.name}
                            subtitle={item.Author.headline}
                          />
                          <p className="pl-5 ml-3 mt-3 mb-0">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </SimpleCard>
                  </div>
                )}
                {(user.data.Follows
                && user.data.Follows.length > 0)
                && (
                  <div>
                    <SimpleCard title="Following">
                      <div className="row">
                        {user.data.Follows.map((item) => (
                          <div className="col-lg-4 col-sm-3 col-6 mb-4" key={item.id}>
                            <Polaroid
                              image={item.Company.cover}
                              title={item.Company.name}
                              link={`/company/${item.Company.nameslug}/home`}
                            />
                          </div>
                        ))}
                      </div>
                    </SimpleCard>
                  </div>
                )}
              </>
            )}
          </div>
          <div className="col-lg-3 col-md-4 py-4 d-none d-lg-block">
            <div className="sticky-aside-content">
              <Sticky topOffset={-20} scrollElement=".stickyArea">
                <SimpleCard title="Similar profiles">
                  {similarProfiles.length === 0 && (
                    <Loading />
                  )}
                  {(Array.isArray(similarProfiles)
                  && similarProfiles.length > 0)
                  && (
                    <div className="w-100">
                      {similarProfiles.map((item, index) => (
                        <div className={`${index + 1 === similarProfiles.length ? '' : 'pb-3'}`} key={item.id}>
                          <ProfileDisplay
                            image={item.photo}
                            imageSize={50}
                            title={item.name}
                            subtitle={item.headline}
                            link={`/profile/${item.username}/details`}
                            imageOnTop
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </SimpleCard>
              </Sticky>
            </div>
          </div>
        </main>
      </div>
    </motion.div>
  );
};

export default withRouter(React.memo(profileDetails, () => true));
